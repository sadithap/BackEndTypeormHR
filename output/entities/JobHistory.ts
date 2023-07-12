import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Departments } from "./Departments";
import { Jobs } from "./Jobs";

@Index("job_history_pk", ["employeeId", "startDate"], { unique: true })
@Entity("job_history", { schema: "public" })
export class JobHistory {
  @Column("integer", { primary: true, name: "employee_id" })
  employeeId: number;

  @Column("timestamp without time zone", { primary: true, name: "start_date" })
  startDate: Date;

  @Column("timestamp with time zone", { name: "end_date", nullable: true })
  endDate: Date | null;

  @ManyToOne(() => Departments, (departments) => departments.jobHistories)
  @JoinColumn([{ name: "department_id", referencedColumnName: "departmentId" }])
  department: Departments;

  @ManyToOne(() => Departments, (departments) => departments.jobHistories2, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "department_id", referencedColumnName: "departmentId" }])
  department_2: Departments;

  @ManyToOne(() => Departments, (departments) => departments.jobHistories3, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "department_id", referencedColumnName: "departmentId" }])
  department_3: Departments;

  @ManyToOne(() => Departments, (departments) => departments.jobHistories4, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "department_id", referencedColumnName: "departmentId" }])
  department_4: Departments;

  @ManyToOne(() => Jobs, (jobs) => jobs.jobHistories)
  @JoinColumn([{ name: "job_id", referencedColumnName: "jobId" }])
  job: Jobs;

  @ManyToOne(() => Jobs, (jobs) => jobs.jobHistories2, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "job_id", referencedColumnName: "jobId" }])
  job_2: Jobs;

  @ManyToOne(() => Jobs, (jobs) => jobs.jobHistories3, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "job_id", referencedColumnName: "jobId" }])
  job_3: Jobs;

  @ManyToOne(() => Jobs, (jobs) => jobs.jobHistories4, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "job_id", referencedColumnName: "jobId" }])
  job_4: Jobs;
}
