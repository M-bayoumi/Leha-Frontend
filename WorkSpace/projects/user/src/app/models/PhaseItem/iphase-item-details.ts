export interface IPhaseItemDetails {
  id: number;
  number: string;
  nameAr: string;
  nameEn: string;
  acumulativePercentage: number;
  progressPercentage: number;
  executionProgressAr: string;
  executionProgressEn: string;
  rfiAr: string;
  rfiEn: string;
  wirAr: string;
  wirEn: string;
  scheduleAr: string;
  scheduleEn: string;
  unitAr: string;
  unitEn: string;
  initialInventoryQuantities: number;
  actualInventoryQuantities: number;
  percentageLossOrExceed: number;
  projectPhaseId: number;
}
