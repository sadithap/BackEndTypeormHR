import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Countries } from './Countries';

@Index('pk_region_id', ['regionId'], { unique: true })
@Entity('regions', { schema: 'public' })
export class Regions {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'region_id' })
  regionId: number;

  @Column('character varying', {
    name: 'region_name',
    nullable: true,
    length: 25,
    default: () => 'NULL::character varying',
  })
  regionName: string | null;

  @Column('character varying', {
    name: 'photo',
    nullable: true,
    length: 50,
    default: () => 'NULL::character varying',
  })
  photo: string | null;

  @OneToMany(() => Countries, (countries) => countries.region)
  countries: Countries[];

  @OneToMany(() => Countries, (countries) => countries.region_2)
  countries2: Countries[];

  @OneToMany(() => Countries, (countries) => countries.region_3)
  countries3: Countries[];

  @OneToMany(() => Countries, (countries) => countries.region_4)
  countries4: Countries[];
}
