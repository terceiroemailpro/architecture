import { SIMULATOR_CONFIG } from "@/shared/config/simulator.config";
import type { FeeBreakdown } from "@/shared/types";

export function calculateFees(amount: number): FeeBreakdown {
  const serviceFee = amount * SIMULATOR_CONFIG.SERVICE_FEE;
  const networkFee = SIMULATOR_CONFIG.NETWORK_FEE;
  const totalFee = serviceFee + networkFee;
  const received = Math.max(0, amount - totalFee);

  return { amount, serviceFee, networkFee, totalFee, received };
}

export function generateTicketId(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let result = "TK-";
  for (let i = 0; i < 8; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export function formatBTC(value: number): string {
  return value.toFixed(8) + " BTC";
}

export function validateBTCAddress(address: string): boolean {
  return /^(bc1|[13])[a-zA-HJ-NP-Z0-9]{25,62}$/.test(address);
}
