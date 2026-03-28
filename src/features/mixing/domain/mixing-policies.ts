import { MIXING_CONFIG } from "../config";
import type { MixingOutput } from "./mixing-output";

export function validateBTCAddress(address: string): boolean {
  return /^(bc1|[13])[a-zA-HJ-NP-Z0-9]{25,62}$/.test(address);
}

export function isAmountValid(amount: number): boolean {
  return amount >= MIXING_CONFIG.MIN_AMOUNT && amount <= MIXING_CONFIG.MAX_AMOUNT;
}

export function getTotalPercentage(outputs: MixingOutput[]): number {
  return outputs.reduce((sum, o) => sum + o.percentage, 0);
}

export function isDistributionValid(outputs: MixingOutput[]): boolean {
  return getTotalPercentage(outputs) === 100;
}

export function canAddOutput(currentCount: number): boolean {
  return currentCount < MIXING_CONFIG.MAX_OUTPUTS;
}

export function canRemoveOutput(currentCount: number): boolean {
  return currentCount > MIXING_CONFIG.MIN_OUTPUTS;
}

export function isOutputAddressValid(output: MixingOutput): boolean {
  return output.address.length === 0 || validateBTCAddress(output.address);
}

export function isSessionValid(amount: number, outputs: MixingOutput[]): boolean {
  return (
    isAmountValid(amount) &&
    isDistributionValid(outputs) &&
    outputs.every((o) => validateBTCAddress(o.address))
  );
}
