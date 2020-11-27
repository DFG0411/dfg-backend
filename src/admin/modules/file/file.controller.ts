import {Body, Controller,  Param,  Patch, Put, UseInterceptors, UploadedFile,  Post } from '@nestjs/common';
// import {AuthGuard} from '@nestjs/passport';
import{FileInterceptor} from '@nestjs/platform-express'
import {ApiBearerAuth, ApiTags, ApiParam, ApiBody,} from '@nestjs/swagger';
import {FileService} from './file.service';
import {File} from '../entities/file.entity';
import { Roles } from '../auth/decorators/roles.decorator';
import { FileDto } from './dto/file.input';
import { User } from 'src/admin/auth/decorators/user.decorator';
import { createWriteStream } from 'fs';

@ApiTags('files')
@ApiBearerAuth()
@Roles('user')
@Controller('files')
export class FileController  {

	constructor(protected service: FileService) {
		
	}
	@Post('upload')
	@UseInterceptors(FileInterceptor('file'))
	async uploadFile(@UploadedFile() file,@User('id') uploader:number):Promise<File> {
	  console.log(file);
	  const{filename}=file;
	  const path= this.service.generateFilename(file);
	  const writeStream=createWriteStream(path);
	  writeStream.write(file.buffer);
		writeStream.end();
		return await this.service.create({ filename, path,uploader });

	}
}
