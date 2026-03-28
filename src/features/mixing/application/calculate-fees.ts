import { PRICING_CONFIG } from "@/shared/pricing";
import type { FeeBreakdown } from "@/shared/pricing";
import type { MixingOutput } from "../domain/mixing-output";

export interface MixingSessionState {
  fees: FeeBreakdown;
  totalPercentage: number;
  canAdd: boolean;
  canRemove: boolean;
  isValid: boolean;
}

export { calculateFees } from "@/shared/pricing";
