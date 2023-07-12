import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Locations } from "./Locations";
import { Employees } from "./Employees";
import { JobHistory } from "./JobHistory";

@Index("departments_pkey", ["departmentId"], { unique: true })
@Entity("departments", { schema: "public" })
export class Departments {
  @PrimaryGeneratedColumn({ type: "integer", name: "department_id" })
  departmentId: number;

  @Column("character varying", {
    name: "department_name",
    nullable: true,
    length: 30,
  })
  departmentName: string | null;

  @ManyToOne(() => Locations, (locations) => locations.departments)
  @JoinColumn([{ name: "location_id", referencedColumnName: "locationId" }])
  location: Locations;

  @ManyToOne(() => Locations, (locations) => locations.departments2, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "location_id", referencedColumnName: "locationId" }])
  location_2: Locations;

  @ManyToOne(() => Locations, (locations) => locations.departments3, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "location_id", referencedColumnName: "locationId" }])
  location_3: Locations;

  @ManyToOne(() => Locations, (locations) => locations.departments4, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "location_id", referencedColumnName: "locationId" }])
  location_4: Locations;

  @ManyToOne(() => Employees, (employees) => employees.departments)
  @JoinColumn([{ name: "manager_id", referencedColumnName: "employeeId" }])
  manager: Employees;

  @ManyToOne(() => Employees, (employees) => employees.departments2, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "manager_id", referencedColumnName: "employeeId" }])
  manager_2: Employees;

  @ManyToOne(() => Employees, (employees) => employees.departments3, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "manager_id", referencedColumnName: "employeeId" }])
  manager_3: Employees;

  @ManyToOne(() => Employees, (employees) => employees.departments4, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "manager_id", referencedColumnName: "employeeId" }])
  manager_4: Employees;

  @OneToMany(() => Employees, (employees) => employees.department)
  employees: Employees[];

  @OneToMany(() => Employees, (employees) => employees.department_2)
  employees2: Employees[];

  @OneToMany(() => Employees, (employees) => employees.department_3)
  employees3: Employees[];

  @OneToMany(() => Employees, (employees) => employees.department_4)
  employees4: Employees[];

  @OneToMany(() => JobHistory, (jobHistory) => jobHistory.department)
  jobHistories: JobHistory[];

  @OneToMany(() => JobHistory, (jobHistory) => jobHistory.department_2)
  jobHistories2: JobHistory[];

  @OneToMany(() => JobHistory, (jobHistory) => jobHistory.department_3)
  jobHistories3: JobHistory[];

  @OneToMany(() => JobHistory, (jobHistory) => jobHistory.department_4)
  jobHistories4: JobHistory[];
}
