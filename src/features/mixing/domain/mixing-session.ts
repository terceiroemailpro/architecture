import type { MixingOutput } from "./mixing-output";

export interface FeeBreakdown {
  amount: number;
  serviceFee: number;
  networkFee: number;
  totalFee: number;
  received: number;
}

export interface MixingSession {
  amount: number;
  outputs: MixingOutput[];
  fees: FeeBreakdown;
  isValid: boolean;
}
