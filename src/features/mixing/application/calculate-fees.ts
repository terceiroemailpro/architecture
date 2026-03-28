import { MIXING_CONFIG } from "../config";
import type { FeeBreakdown } from "../domain/mixing-session";

export function calculateFees(amount: number): FeeBreakdown {
  const serviceFee = amount * MIXING_CONFIG.SERVICE_FEE;
  const networkFee = MIXING_CONFIG.NETWORK_FEE;
  const totalFee = serviceFee + networkFee;
  const received = Math.max(0, amount - totalFee);

  return { amount, serviceFee, networkFee, totalFee, received };
}
