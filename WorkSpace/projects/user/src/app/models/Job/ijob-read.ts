export interface IJobRead {
  id: number;
  title: string;
  description: string;
  averageSalary: string;
  dateTime: Date;
  companyId: number;
  companyName: string;
  companySlogan: string;
  companyEmployees: number;
  companyImage: string;
  companyEmail: string;
  companyPhone: string;
  companyLink: string;
}
