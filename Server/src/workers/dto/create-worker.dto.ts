export class CreateWorkerDto {
  name: string;
  role: "Principal" | "Teacher" | "Student";
  isActive: boolean;
}