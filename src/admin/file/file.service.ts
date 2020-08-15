import { Inject, Injectable, BadRequestException } from '@nestjs/common';
import { Repository,  } from 'typeorm';
import { FileDto } from './dto/file.input';
import { File } from '../entities/file.entity';
import { BaseService } from 'src/base';
import { extname } from 'path';
import * as uuid from 'uuid';

@Injectable()
export class FileService extends BaseService<File> {
  constructor(
    @Inject('FILE_MODEL_TOKEN')
    protected readonly repo: Repository<File>,
  ) 
  {
   super()
  }

  async create(data:FileDto) :Promise<File>{
    // data.password=hashSync(password);
    return await super.create(data);
  }
  

  async update(
    id: number,
    data:FileDto,
  ): Promise<File> {
    // const user = await this.findOneById(id,{cache:true});
    // const {}=await this.repository.update(id,{...data});
    return await super.update(id,data);
  }

  generateFilename(originalFilename:string):string {
    return `./uploaded/${uuid.v1()}.${extname(originalFilename)}`;
  }
}
