import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Plus, Trash2, AlertTriangle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { SIMULATOR_CONFIG } from "@/shared/config/simulator.config";
import { DISCLAIMER } from "@/shared/content/disclaimer";
import { calculateFees, formatBTC, validateBTCAddress } from "@/shared/utils";
import type { MixingOutput } from "@/shared/types";

function OutputRow({
  output,
  index,
  onChange,
  onRemove,
  canRemove,
}: {
  output: MixingOutput;
  index: number;
  onChange: (i: number, field: keyof MixingOutput, value: string | number) => void;
  onRemove: (i: number) => void;
  canRemove: boolean;
}) {
  const isValidAddr = output.address.length === 0 || validateBTCAddress(output.address);

  return (
    <div className="p-4 rounded-lg border border-border/50 bg-card space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-xs font-mono text-muted-foreground">Destino #{index + 1}</span>
        {canRemove && (
          <button onClick={() => onRemove(index)} className="text-muted-foreground hover:text-destructive transition-colors">
            <Trash2 className="w-4 h-4" />
          </button>
        )}
      </div>
      <Input
        placeholder="Endereço BTC de destino"
        value={output.address}
        onChange={(e) => onChange(index, "address", e.target.value)}
        className={`font-mono text-sm ${!isValidAddr ? "border-destructive" : ""}`}
      />
      {!isValidAddr && (
        <p className="text-xs text-destructive">Endereço inválido</p>
      )}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-xs text-muted-foreground mb-1 block">Porcentagem: {output.percentage}%</label>
          <Slider
            value={[output.percentage]}
            onValueChange={([v]) => onChange(index, "percentage", v)}
            min={10}
            max={100}
            step={1}
          />
        </div>
        <div>
          <label className="text-xs text-muted-foreground mb-1 block">Delay: {output.delay}h</label>
          <Slider
            value={[output.delay]}
            onValueChange={([v]) => onChange(index, "delay", v)}
            min={SIMULATOR_CONFIG.MIN_DELAY_HOURS}
            max={SIMULATOR_CONFIG.MAX_DELAY_HOURS}
            step={0.5}
          />
        </div>
      </div>
    </div>
  );
}

export default function MixingMain() {
  const [amount, setAmount] = useState("");
  const [outputs, setOutputs] = useState<MixingOutput[]>([
    { address: "", percentage: 50, delay: 1 },
    { address: "", percentage: 50, delay: 2 },
  ]);

  const parsedAmount = parseFloat(amount) || 0;
  const fees = useMemo(() => calculateFees(parsedAmount), [parsedAmount]);
  const totalPercentage = outputs.reduce((s, o) => s + o.percentage, 0);

  const handleOutputChange = (i: number, field: keyof MixingOutput, value: string | number) => {
    setOutputs((prev) => prev.map((o, idx) => (idx === i ? { ...o, [field]: value } : o)));
  };

  const addOutput = () => {
    if (outputs.length < SIMULATOR_CONFIG.MAX_OUTPUTS) {
      setOutputs((prev) => [...prev, { address: "", percentage: 10, delay: 1 }]);
    }
  };

  const removeOutput = (i: number) => {
    if (outputs.length > SIMULATOR_CONFIG.MIN_OUTPUTS) {
      setOutputs((prev) => prev.filter((_, idx) => idx !== i));
    }
  };

  const isValid =
    parsedAmount >= SIMULATOR_CONFIG.MIN_AMOUNT &&
    parsedAmount <= SIMULATOR_CONFIG.MAX_AMOUNT &&
    totalPercentage === 100 &&
    outputs.every((o) => validateBTCAddress(o.address));

  return (
    <div className="container py-20">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gradient-primary">Mixer</h1>
          <p className="mt-3 text-muted-foreground">Configure sua transação de mixing.</p>
        </div>

        {/* Amount */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 rounded-lg border border-border/50 bg-card mb-6"
        >
          <label className="text-sm font-medium text-foreground block mb-2">Valor (BTC)</label>
          <Input
            type="number"
            placeholder="0.00000000"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="font-mono text-lg"
            min={SIMULATOR_CONFIG.MIN_AMOUNT}
            max={SIMULATOR_CONFIG.MAX_AMOUNT}
            step={0.001}
          />
          <p className="text-xs text-muted-foreground mt-2 font-mono">
            Mín: {SIMULATOR_CONFIG.MIN_AMOUNT} BTC — Máx: {SIMULATOR_CONFIG.MAX_AMOUNT} BTC
          </p>
        </motion.div>

        {/* Outputs */}
        <div className="space-y-4 mb-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Endereços de Destino</h2>
            <Button
              variant="outline"
              size="sm"
              onClick={addOutput}
              disabled={outputs.length >= SIMULATOR_CONFIG.MAX_OUTPUTS}
              className="gap-1"
            >
              <Plus className="w-4 h-4" /> Adicionar
            </Button>
          </div>
          {outputs.map((output, i) => (
            <OutputRow
              key={i}
              output={output}
              index={i}
              onChange={handleOutputChange}
              onRemove={removeOutput}
              canRemove={outputs.length > SIMULATOR_CONFIG.MIN_OUTPUTS}
            />
          ))}
          {totalPercentage !== 100 && (
            <div className="flex items-center gap-2 p-3 rounded-md bg-warning/10 border border-warning/20 text-warning text-xs font-mono">
              <AlertTriangle className="w-4 h-4 flex-shrink-0" />
              Distribuição total: {totalPercentage}% (deve ser 100%)
            </div>
          )}
        </div>

        {/* Summary */}
        {parsedAmount > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-6 rounded-lg border border-primary/20 bg-primary/5 mb-6 space-y-3"
          >
            <h3 className="text-sm font-semibold text-primary">Resumo da Transação</h3>
            <div className="grid grid-cols-2 gap-y-2 text-sm font-mono">
              <span className="text-muted-foreground">Valor:</span>
              <span className="text-right text-foreground">{formatBTC(parsedAmount)}</span>
              <span className="text-muted-foreground">Taxa de serviço (1.5%):</span>
              <span className="text-right text-foreground">- {formatBTC(fees.serviceFee)}</span>
              <span className="text-muted-foreground">Taxa de rede:</span>
              <span className="text-right text-foreground">- {formatBTC(fees.networkFee)}</span>
              <span className="text-muted-foreground border-t border-border/50 pt-2">Total recebido:</span>
              <span className="text-right text-primary font-semibold border-t border-border/50 pt-2">
                {formatBTC(fees.received)}
              </span>
            </div>
          </motion.div>
        )}

        {/* Alert */}
        <div className="p-3 rounded-md bg-destructive/10 border border-destructive/20 text-xs text-destructive mb-6 font-mono flex items-start gap-2">
          <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
          {DISCLAIMER.risk}
        </div>

        <Button className="w-full glow-primary gap-2" size="lg" disabled={!isValid}>
          Confirmar Mixing
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
