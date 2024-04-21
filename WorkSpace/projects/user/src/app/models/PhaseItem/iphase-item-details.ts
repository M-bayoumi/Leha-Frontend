export interface IPhaseItemDetails {
  id: number;
  number: string;
  nameAr: string;
  nameEn: string;
  acumulativePercentage: number;
  progressPercentage: number;
  executionProgressAr: string;
  executionProgressEn: string;
  rFIAr: string;
  rFIEn: string;
  wIRAr: string;
  wIREn: string;
  scheduleAr: string;
  scheduleEn: string;
  unitAr: string;
  unitEn: string;
  initialInventoryQuantities: number;
  actualInventoryQuantities: number;
  percentageLossOrExceed: number;
  projectPhaseId: number;
}
