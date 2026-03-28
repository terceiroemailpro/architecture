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
} as const;
