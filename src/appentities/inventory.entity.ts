import { Entity, Column, PrimaryColumn, OneToMany, JoinColumn } from 'typeorm';
import { RdsIn10 } from './rdsin10.entity';
import { RdsIn } from './rdsin.entity';
// import { SupperEntity } from '../base';

@Entity('dfg_na_inventory')
export class Inventory {
  @PrimaryColumn()
  cinvcode: string;

  @Column()
  cinvccode: string;
  @Column()
  cinvstd: string;
  @Column()
  cinvname: string;
  @Column()
  cinvaddcode: string;
  @Column()
  cinvcname: string;
  @Column()
  partid: number;
  @Column()
  unitcost: number;
  @Column()
  isbuying: number;
  @OneToMany(type => RdsIn, rdsin => rdsin.inv)
  @JoinColumn({ name: 'cinvcode', referencedColumnName: 'cinvcode' })
  rdsins: RdsIn[];
  @OneToMany(type => RdsIn10, rdsin => rdsin.inv)
  @JoinColumn({ name: 'cinvcode', referencedColumnName: 'cinvcode' })
  rdsins10: RdsIn10[];
}
