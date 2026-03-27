export const HOME_CONTENT = {
  headline: "Privacidade Real para suas Transações",
  subheadline: "Proteja sua identidade financeira com tecnologia de mixing avançada. Sem registros, sem rastreamento.",
  steps: [
    {
      number: "01",
      title: "Envie",
      description: "Deposite seus fundos no endereço gerado automaticamente.",
    },
    {
      number: "02",
      title: "Misture",
      description: "Seus fundos são fragmentados e misturados com outros em pools de liquidez.",
    },
    {
      number: "03",
      title: "Receba",
      description: "Fundos limpos são enviados para seus endereços de destino com delay configurável.",
    },
  ],
  cta: "Entender como funciona",
  transparency: {
    title: "Transparência Total",
    items: [
      "Código-fonte auditável",
      "Sem logs permanentes",
      "Taxas claras e previsíveis",
      "Riscos documentados",
    ],
  },
  risks: {
    title: "Riscos que você deve conhecer",
    items: [
      "Transações blockchain são irreversíveis",
      "Delays podem variar conforme a rede",
      "Privacidade adicional, não absoluta",
    ],
  },
};

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
};

export const FEES_CONTENT = {
  title: "Taxas Transparentes",
  subtitle: "Sem surpresas. Calcule exatamente quanto vai pagar.",
  breakdown: {
    service: {
      label: "Taxa de serviço",
      description: "Percentual aplicado sobre o valor total",
    },
    network: {
      label: "Taxa de rede",
      description: "Custo fixo da transação na blockchain",
    },
  },
};

export const FAQ_CONTENT = {
  title: "Perguntas Frequentes",
  subtitle: "Tudo que você precisa saber sobre o serviço.",
  categories: [
    {
      name: "Geral",
      questions: [
        {
          q: "O que é um mixer de criptomoedas?",
          a: "Um mixer (ou tumbler) é um serviço que aumenta a privacidade de transações em blockchain, misturando seus fundos com os de outros usuários para dificultar o rastreamento.",
        },
        {
          q: "É legal usar um mixer?",
          a: "O uso de mixers para fins de privacidade é legal na maioria das jurisdições. No entanto, o uso para lavagem de dinheiro ou outras atividades ilegais é proibido.",
        },
        {
          q: "Meus fundos estão seguros?",
          a: "Utilizamos múltiplas camadas de segurança. No entanto, como em qualquer serviço de blockchain, existem riscos inerentes. Nunca envie mais do que está disposto a perder.",
        },
      ],
    },
    {
      name: "Técnico",
      questions: [
        {
          q: "Quantas confirmações são necessárias?",
          a: "São necessárias 3 confirmações na rede antes que seus fundos sejam processados.",
        },
        {
          q: "Qual o delay mínimo e máximo?",
          a: "O delay mínimo é de 30 minutos e o máximo é de 24 horas. Delays maiores aumentam a privacidade.",
        },
        {
          q: "Para quantos endereços posso distribuir?",
          a: "Você pode distribuir para até 5 endereços de destino diferentes, com porcentagens personalizáveis.",
        },
      ],
    },
    {
      name: "Taxas",
      questions: [
        {
          q: "Como as taxas são calculadas?",
          a: "A taxa de serviço é de 1.5% sobre o valor total, mais uma taxa fixa de rede de 0.0001 BTC por transação.",
        },
        {
          q: "Existem taxas escondidas?",
          a: "Não. Todas as taxas são exibidas antes da confirmação. O que você vê é o que você paga.",
        },
      ],
    },
  ],
};

export const CONTACT_CONTENT = {
  title: "Contato",
  subtitle: "Envie sua mensagem. Nenhum dado pessoal é obrigatório.",
  form: {
    subject: "Assunto",
    message: "Mensagem",
    submit: "Gerar Ticket",
    success: "Ticket gerado com sucesso! Guarde seu código de referência.",
  },
  note: "Todas as comunicações são criptografadas. Você receberá um código de ticket para acompanhamento.",
};
