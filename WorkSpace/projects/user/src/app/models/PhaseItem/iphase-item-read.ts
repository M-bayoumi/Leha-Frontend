export interface IPhaseItemRead {
  id: number;
  number: string;
  name: string;
  acumulativePercentage: number;
  progressPercentage: number;
  executionProgress: string;
  rFI: string;
  wIR: string;
  schedule: string;
  unit: string;
  initialInventoryQuantities: number;
  actualInventoryQuantities: number;
  percentageLossOrExceed: number;
  projectPhaseId: number;
  projectPhaseName: string;
}
