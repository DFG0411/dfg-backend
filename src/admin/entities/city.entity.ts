
import { Entity, Column, BaseEntity, PrimaryColumn} from 'typeorm';
//import {  } from '../../base';
import { Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';

@Entity({
    name:'city',
    orderBy:{id:'ASC'}
}
)
export class City extends BaseEntity{
    @Field()
    @ApiProperty()
    @Column({ nullable: false })  
    name:string

    
    @ApiProperty()
    @Field()
    @PrimaryColumn({ nullable: false })
    id:string

    @ApiProperty()
    @Field()
    @Column({ nullable: false })
    pid:string

}