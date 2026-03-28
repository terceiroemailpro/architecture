import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Plus, AlertTriangle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MIXING_CONFIG } from "../config";
import { MIXING_CONTENT } from "../content";
import { DISCLAIMER } from "../../../shared/content/disclaimer";
import { calculateFees } from "../application/calculate-fees";
import { createDefaultOutputs } from "../application/create-default-outputs";
import { formatBTC } from "@/shared/utils/format";
import {
  getTotalPercentage,
  canAddOutput,
  canRemoveOutput,
  isSessionValid,
} from "../domain/mixing-policies";
import type { MixingOutput } from "../domain/mixing-output";
import { OutputRow } from "./OutputRow";

export default function MixingMain() {
  const [amount, setAmount] = useState("");
  const [outputs, setOutputs] = useState<MixingOutput[]>(createDefaultOutputs());

  const parsedAmount = parseFloat(amount) || 0;
  const fees = useMemo(() => calculateFees(parsedAmount), [parsedAmount]);
  const totalPercentage = getTotalPercentage(outputs);

  const handleOutputChange = (i: number, field: keyof MixingOutput, value: string | number) => {
    setOutputs((prev) => prev.map((o, idx) => (idx === i ? { ...o, [field]: value } : o)));
  };

  const addOutput = () => {
    if (canAddOutput(outputs.length)) {
      setOutputs((prev) => [...prev, { address: "", percentage: 10, delay: 1 }]);
    }
  };

  const removeOutput = (i: number) => {
    if (canRemoveOutput(outputs.length)) {
      setOutputs((prev) => prev.filter((_, idx) => idx !== i));
    }
  };

  const isValid = isSessionValid(parsedAmount, outputs);

  return (
    <div className="container py-20">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gradient-primary">{MIXING_CONTENT.title}</h1>
          <p className="mt-3 text-muted-foreground">{MIXING_CONTENT.subtitle}</p>
        </div>

        {/* Amount */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 rounded-lg border border-border/50 bg-card mb-6"
        >
          <label className="text-sm font-medium text-foreground block mb-2">{MIXING_CONTENT.amountLabel}</label>
          <Input
            type="number"
            placeholder={MIXING_CONTENT.amountPlaceholder}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="font-mono text-lg"
            min={MIXING_CONFIG.MIN_AMOUNT}
            max={MIXING_CONFIG.MAX_AMOUNT}
            step={0.001}
          />
          <p className="text-xs text-muted-foreground mt-2 font-mono">
            Mín: {MIXING_CONFIG.MIN_AMOUNT} BTC — Máx: {MIXING_CONFIG.MAX_AMOUNT} BTC
          </p>
        </motion.div>

        {/* Outputs */}
        <div className="space-y-4 mb-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">{MIXING_CONTENT.destinationsTitle}</h2>
            <Button
              variant="outline"
              size="sm"
              onClick={addOutput}
              disabled={!canAddOutput(outputs.length)}
              className="gap-1"
            >
              <Plus className="w-4 h-4" /> {MIXING_CONTENT.addButton}
            </Button>
          </div>
          {outputs.map((output, i) => (
            <OutputRow
              key={i}
              output={output}
              index={i}
              onChange={handleOutputChange}
              onRemove={removeOutput}
              canRemove={canRemoveOutput(outputs.length)}
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
            <h3 className="text-sm font-semibold text-primary">{MIXING_CONTENT.summaryTitle}</h3>
            <div className="grid grid-cols-2 gap-y-2 text-sm font-mono">
              <span className="text-muted-foreground">{MIXING_CONTENT.summaryAmount}</span>
              <span className="text-right text-foreground">{formatBTC(parsedAmount)}</span>
              <span className="text-muted-foreground">{MIXING_CONTENT.summaryServiceFee}</span>
              <span className="text-right text-foreground">- {formatBTC(fees.serviceFee)}</span>
              <span className="text-muted-foreground">{MIXING_CONTENT.summaryNetworkFee}</span>
              <span className="text-right text-foreground">- {formatBTC(fees.networkFee)}</span>
              <span className="text-muted-foreground border-t border-border/50 pt-2">{MIXING_CONTENT.summaryReceived}</span>
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
          {MIXING_CONTENT.confirmButton}
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
