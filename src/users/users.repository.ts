import { Repository, EntityRepository } from 'typeorm';
import { Injectable } from '@nestjs/common';

import { User } from './entities/user.entity';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

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
    const user = await this.create(payload);

    await this.save(user);

    return user;
  }

  public async updateUser(user: User, payload: UpdateUserDto): Promise<User> {
    const updatedUser = await this.save({ ...user, ...payload });

    return updatedUser;
  }

  public async deleteUser(userId: string): Promise<void> {
    await this.softDelete(userId);
  }
}
