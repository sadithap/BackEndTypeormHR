import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Departments } from "./Departments";
import { Jobs } from "./Jobs";

@Index("employees_pkey", ["employeeId"], { unique: true })
@Entity("employees", { schema: "public" })
export class Employees {
  @PrimaryGeneratedColumn({ type: "integer", name: "employee_id" })
  employeeId: number;

  @Column("character varying", {
    name: "first_name",
    nullable: true,
    length: 20,
  })
  firstName: string | null;

  @Column("character varying", {
    name: "last_name",
    nullable: true,
    length: 25,
  })
  lastName: string | null;

  @Column("character varying", { name: "email", nullable: true, length: 25 })
  email: string | null;

  @Column("character varying", {
    name: "phone_number",
    nullable: true,
    length: 20,
  })
  phoneNumber: string | null;

  @Column("timestamp with time zone", { name: "hire_date", nullable: true })
  hireDate: Date | null;

  @Column("numeric", { name: "salary", nullable: true, precision: 8, scale: 2 })
  salary: string | null;

  @Column("numeric", {
    name: "commission_pct",
    nullable: true,
    precision: 2,
    scale: 2,
  })
  commissionPct: string | null;

  @Column("integer", { name: "xemp_id", nullable: true })
  xempId: number | null;

  @OneToMany(() => Departments, (departments) => departments.manager)
  departments: Departments[];

  @OneToMany(() => Departments, (departments) => departments.manager_2)
  departments2: Departments[];

  @OneToMany(() => Departments, (departments) => departments.manager_3)
  departments3: Departments[];

  @OneToMany(() => Departments, (departments) => departments.manager_4)
  departments4: Departments[];

  @ManyToOne(() => Departments, (departments) => departments.employees)
  @JoinColumn([{ name: "department_id", referencedColumnName: "departmentId" }])
  department: Departments;

  @ManyToOne(() => Departments, (departments) => departments.employees2, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "department_id", referencedColumnName: "departmentId" }])
  department_2: Departments;

  @ManyToOne(() => Departments, (departments) => departments.employees3, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "department_id", referencedColumnName: "departmentId" }])
  department_3: Departments;

  @ManyToOne(() => Departments, (departments) => departments.employees4, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "department_id", referencedColumnName: "departmentId" }])
  department_4: Departments;

  @ManyToOne(() => Jobs, (jobs) => jobs.employees)
  @JoinColumn([{ name: "job_id", referencedColumnName: "jobId" }])
  job: Jobs;

  @ManyToOne(() => Jobs, (jobs) => jobs.employees2, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "job_id", referencedColumnName: "jobId" }])
  job_2: Jobs;

  @ManyToOne(() => Jobs, (jobs) => jobs.employees3, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "job_id", referencedColumnName: "jobId" }])
  job_3: Jobs;

  @ManyToOne(() => Jobs, (jobs) => jobs.employees4, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "job_id", referencedColumnName: "jobId" }])
  job_4: Jobs;

  @ManyToOne(() => Employees, (employees) => employees.employees)
  @JoinColumn([{ name: "manager_id", referencedColumnName: "employeeId" }])
  manager: Employees;

  @OneToMany(() => Employees, (employees) => employees.manager)
  employees: Employees[];

  @ManyToOne(() => Employees, (employees) => employees.employees2, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "manager_id", referencedColumnName: "employeeId" }])
  manager_2: Employees;

  @OneToMany(() => Employees, (employees) => employees.manager_2)
  employees2: Employees[];

  @ManyToOne(() => Employees, (employees) => employees.employees3, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "manager_id", referencedColumnName: "employeeId" }])
  manager_3: Employees;

  @OneToMany(() => Employees, (employees) => employees.manager_3)
  employees3: Employees[];

  @ManyToOne(() => Employees, (employees) => employees.employees4, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "manager_id", referencedColumnName: "employeeId" }])
  manager_4: Employees;

  @OneToMany(() => Employees, (employees) => employees.manager_4)
  employees4: Employees[];
}
