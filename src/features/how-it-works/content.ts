export const HOW_IT_WORKS_CONTENT = {
  title: "Como Funciona",
  subtitle: "Um processo simples em três etapas para proteger sua privacidade.",
  stages: [
    {
      id: "input",
      title: "Entrada",
      icon: "ArrowDownToLine",
      description: "Você envia fundos para um endereço temporário gerado exclusivamente para sua sessão.",
      details: [
        "Endereço único por transação",
        "Confirmação após 3 blocos na rede",
        "Suporte a múltiplas criptomoedas",
      ],
    },
    {
      id: "process",
      title: "Processamento",
      icon: "Shuffle",
      description: "Seus fundos são fragmentados e misturados com outros depósitos em nossos pools de liquidez.",
      details: [
        "Fragmentação em múltiplas parcelas",
        "Mistura com fundos de outros usuários",
        "Delays aleatórios entre transferências",
      ],
    },
    {
      id: "output",
      title: "Saída",
      icon: "ArrowUpFromLine",
      description: "Fundos são distribuídos para seus endereços de destino com delays configuráveis.",
      details: [
        "Distribuição para até 5 endereços",
        "Delay personalizável (0.5h - 24h)",
        "Sem vínculo com o depósito original",
      ],
    },
  ],
} as const;
