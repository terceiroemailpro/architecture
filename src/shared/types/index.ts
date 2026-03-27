export interface MixingOutput {
  address: string;
  percentage: number;
  delay: number;
}

export interface MixingSession {
  amount: number;
  outputs: MixingOutput[];
  serviceFee: number;
  networkFee: number;
  totalFee: number;
  totalReceived: number;
}

export interface FeeBreakdown {
  amount: number;
  serviceFee: number;
  networkFee: number;
  totalFee: number;
  received: number;
}

export interface ContactTicket {
  subject: string;
  message: string;
  ticketId: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface FAQCategory {
  name: string;
  questions: FAQItem[];
}
