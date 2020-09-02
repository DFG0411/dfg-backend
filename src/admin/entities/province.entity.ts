import { Entity, Column, BaseEntity, PrimaryColumn} from 'typeorm';
//import {  } from '../../base';
import { Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';

@Entity({
    name:'provinces',
    orderBy:{id:'ASC'}
}
)
export class province extends BaseEntity{
    @Field()
  //  @PrimaryGeneratedColumn()
  @ApiProperty()
  @PrimaryColumn({ nullable: false })  
  id:string

    // @Field()
    // @Column({ nullable: false })
    // provinceid:string
    @ApiProperty()
    @Field()
    @Column({ nullable: false })
    provincename:string
}