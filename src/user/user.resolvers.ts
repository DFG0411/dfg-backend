import { UseGuards } from '@nestjs/common';
import {
  Args,
  Mutation,
  Query,
  Resolver,
  Subscription,
 
} from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { GqlAuthGuard } from '../guards/gql-auth.guard';
import { UserService } from './user.service';
// import { IUser } from './interfaces/user.interface';
// import { root } from 'rxjs/internal/util/root';
import { UserEntity } from '../adminentities/user.entity';
import { DeleteResult } from 'typeorm';
// import { IToken } from 'src/auth/interfaces/token.interface';

const pubSub = new PubSub();

@Resolver()
export class UserResolvers {
  constructor(private readonly userService: UserService) {}

  @Query(()=>[UserEntity])
  @UseGuards(GqlAuthGuard)
  async getUsers(  ): Promise <UserEntity[]> {
    return await this.userService.findAll();
  }

  @Query(()=>UserEntity)
  async user(
    @Args('id') id: number,
  ): Promise<UserEntity> {
    // console.log('userkey:' + _key);
    return await this.userService.findOneById(id);
  }

  @Mutation(()=>UserEntity)
  async updateUser(@Args('id') id:number,@Args('data') data:UserEntity):Promise<UserEntity>{
    return await this.userService.update(id,data);
  }
  @Mutation(()=>UserEntity)
  async patchUser(@Args('id') id:number,@Args('data') data:UserEntity):Promise<UserEntity>{
    return await this.userService.patch(id,data);
  }
  @Mutation(()=>DeleteResult)
  async deleteUser(@Args('id') id:number):Promise<DeleteResult>{
    return await this.userService.delete(id);
  }
  
  @Mutation(()=>UserEntity)
  async create(
    @Args('data') data: UserEntity,
  ): Promise<UserEntity> {
    const createdUser = await this.userService.create(data);
    pubSub.publish('userCreated', { userCreated: createdUser });
    return createdUser;
  }
  @Subscription(()=>UserEntity)
  userCreated():any{
    return {
      subscribe: () => pubSub.asyncIterator('userCreated'),
    };
  }
}
