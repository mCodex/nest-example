import { Repository, EntityRepository } from 'typeorm';
import { Injectable } from '@nestjs/common';

import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
@EntityRepository(User)
export class UserRepository extends Repository<User> {
  public async findAll(): Promise<User[]> {
    return await this.find();
  }

  public async findById(userId: string): Promise<User> {
    return await this.findOne(userId);
  }

  public async createUser(payload: CreateUserDto): Promise<User> {
    const { firstName, lastName } = payload;

    const userData = new User();

    userData.firstName = firstName;
    userData.lastName = lastName;

    const user = await this.save(userData);

    return user;
  }
}
