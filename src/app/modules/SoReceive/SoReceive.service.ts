import { Inject, Injectable } from '@nestjs/common';
import { from } from 'rxjs';
import { BaseService } from 'src/base';
import { Repository } from 'typeorm';
import{SoReceive}from 'src/app/entities/SoReceive.entity'

@Injectable()
export class SoReceiveService extends BaseService<SoReceive>{
    constructor(
        @Inject('SoReceiveToken')protected readonly repo:Repository<SoReceive>)
      
        {
          super();
      
      }
      }
      