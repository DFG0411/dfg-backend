import { Entity, Column, PrimaryColumn, OneToOne, JoinColumn } from 'typeorm';
import { Inventory } from './inventory.entity';

@Entity('dfg_na_history')
export class History {
  @PrimaryColumn({ type: 'int', name: 'isodid' })
  isodid: number;

  @Column()
  jno: string;
  @Column()
  mno: string;
  @Column()
  cuscode: string;
  @Column()
  cusname: string;
  @OneToOne(type => Inventory)
  @JoinColumn({ name: 'cinvcode' })
  inventory: Inventory;
  @Column({ type: 'float' })
  qty: number;
  @Column({ type: 'float' })
  sounitprice: number;
  @Column()
  ddate: Date;
  @Column()
  mdate: Date;
  @Column({ type: 'int', name: 'moid' })
  moid: number;
}
