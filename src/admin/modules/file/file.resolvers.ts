import { Resolver, Mutation, Args, Query, Context } from '@nestjs/graphql';
import { FileUpload,UploadOptions } from 'graphql-upload';
import {FileService} from './file.service';
import { createWriteStream } from 'fs';
import * as uuid from 'uuid';

import { File } from '../../entities/file.entity';

import { ApolloError } from 'apollo-server-core';
import { extname } from 'path';
import { User } from '../auth/decorators/user.decorator';

@Resolver('File')
export class FileResolver {
  constructor(protected service: FileService) {}

	@Query()
	async files(): Promise<File[]> {
		return this.service.findAll({
			cache: true
		})
	}

	@Mutation()
	async uploadFileLocal(
    @Args('file') file: FileUpload,
    @User() uploader:number,
		@Context('req') req: any
	): Promise<File> {
		const { filename, createReadStream, mimetype }   = file
		// console.log(req.headers.host)
    const uploadedFilename = this.service.generateFilename(filename);
    uploader=req['user']?req['user']['id']:null;
		const pathObj = await new Promise(async (resolve, reject) =>
			createReadStream().pipe(
				createWriteStream(`${uploadedFilename}`)
					.on('error', err => {
						console.log('Error upload ', err)

						reject(err)
					})
					.on('finish', async () => {
						// console.log(
						// 	'Link',
						// 	`${req.headers.host}/uploads/${convertFilename}`
						// )

						const link = `${req.headers.host}/${uploadedFilename}`

						resolve(link)
					})
			)
    )
    const path=pathObj

		// console.log(path)

		return await this.service.create(
			{ filename, path:uploadedFilename,uploader }
		)

	}
}