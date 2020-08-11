import { UseGuards } from '@nestjs/common';
import {
  Args,
  Mutation,
  Query,
  Resolver,
  Subscription,
 
} from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard';
import { UserService } from './user.service';
// import { IUser } from './interfaces/user.interface';
// import { root } from 'rxjs/internal/util/root';
import { User } from '../entities/user.entity';
import { CreateUserDto, UpdateUserDto } from './dto/user.input';
// import { IToken } from 'src/auth/interfaces/token.interface';

const pubSub = new PubSub();

@Resolver()
export class UserResolvers {
  constructor(private readonly userService: UserService) {}

  @Query(()=>[User])
  // @UseGuards(GqlAuthGuard)
  async getUsers(): Promise <User[]> {
    return await this.userService.findAll();
  }

  @Query(()=>User)
  async user(
    @Args('id') id: number,
  ): Promise<User> {
    // console.log('userkey:' + _key);
    return await this.userService.findOneById(id);
  }

  @Mutation(()=>User)
  async updateUser(@Args('id') id:number,@Args('data') data:UpdateUserDto):Promise<User>{
    return await this.userService.update(id,data);
  }
  @Mutation(()=>User)
  async patchUser(@Args('id') id:number,@Args('data') data:UpdateUserDto):Promise<User>{
    return await this.userService.patch(id,data);
  }
  @Mutation(()=>Number)
  async deleteUser(@Args('id') id:number):Promise<number>{
    return await this.userService.delete(id);
  }
  
  @Mutation(()=>User)
  async createUser( @Args('data') data: CreateUserDto ): Promise<User> {
    // console.log('create');
    const createdUser = await this.userService.create(data);
    pubSub.publish('userCreated', { userCreated: createdUser });
    return createdUser;
  }
  @Subscription(()=>User)
  userCreated():any{
    return {
      subscribe: () => pubSub.asyncIterator('userCreated'),
    };
  }
}
