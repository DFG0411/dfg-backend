// import { Op, Transaction } from 'sequelize';
import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { SessionCreateInputDto } from './dto/inputs/session-create.input.dto';
import { SessionUpdateInputDto } from './dto/inputs/session-update.input.dto';
import {Session} from '../../entities/session.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SessionService {
  constructor(
    @Inject('SESSION_REPOSITORY')
    private readonly repository: Repository <Session>,
  ) {}

  async createSession(data: SessionCreateInputDto): Promise<Session> {
    try {
      const entity:Session=this.repository.create(data);
      return await entity.save();
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async updateSession(values: SessionUpdateInputDto): Promise<number> {
    try {
      const res = await this.repository.update(values.id, values);
      const { generatedMaps} = res;
      const data=generatedMaps[0]
      return data['id'];
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async findSession(userId: number, fingerprint: string): Promise<Session> {
    try {
      return await this.repository.findOne({
        where: {
           userId ,  fingerprint ,
        },
      });
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async verifySession(
    refreshToken: string,
    fingerprint: string,
  ): Promise<Session | undefined> {
    return await this.repository.findOne({
      where: {
        refreshToken,fingerprint
          },
    });
  }

  async deleteSession(id: number): Promise<number> {
    await this.repository.delete(id);
    return id;
    // return await this.repository.delete(id);
  }

  async deleteAllSessions(
    userId: number,
    transaction?: any,
  ): Promise<number> {
  const res=await this.repository.delete({
        userId,
  });
    const {affected}=res;
    return affected;
  }

  async numberSessions(userId: number): Promise<number> {
    return await this.repository.count({
      where: {
        userId,
      },
    });
  }
}
