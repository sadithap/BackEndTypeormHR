import { Column, Entity, Index, OneToMany } from "typeorm";
import { Employees } from "./Employees";
import { JobHistory } from "./JobHistory";

@Index("pk_job_id", ["jobId"], { unique: true })
@Index("unique_title", ["jobTitle"], { unique: true })
@Entity("jobs", { schema: "public" })
export class Jobs {
  @Column("character varying", { primary: true, name: "job_id", length: 10 })
  jobId: string;

  @Column("character varying", {
    name: "job_title",
    nullable: true,
    unique: true,
    length: 35,
  })
  jobTitle: string | null;

  @Column("numeric", {
    name: "min_salary",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  minSalary: string | null;

  @Column("numeric", {
    name: "max_salary",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  maxSalary: string | null;

  @OneToMany(() => Employees, (employees) => employees.job)
  employees: Employees[];

  @OneToMany(() => Employees, (employees) => employees.job_2)
  employees2: Employees[];

  @OneToMany(() => Employees, (employees) => employees.job_3)
  employees3: Employees[];

  @OneToMany(() => Employees, (employees) => employees.job_4)
  employees4: Employees[];

  @OneToMany(() => JobHistory, (jobHistory) => jobHistory.job)
  jobHistories: JobHistory[];

  @OneToMany(() => JobHistory, (jobHistory) => jobHistory.job_2)
  jobHistories2: JobHistory[];

  @OneToMany(() => JobHistory, (jobHistory) => jobHistory.job_3)
  jobHistories3: JobHistory[];

  @OneToMany(() => JobHistory, (jobHistory) => jobHistory.job_4)
  jobHistories4: JobHistory[];
}
