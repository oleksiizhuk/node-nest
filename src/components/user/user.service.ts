import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import {Model, Types} from "mongoose";
import { InjectModel } from '@nestjs/mongoose';
import { UserEntity } from "./entities/user.entities";
import { IUser } from './interfaces/user.interfaces';

@Injectable()
export class UserService {
  constructor(
      @InjectModel('User') private UserDB: Model<UserEntity>,
  ) {}

  async getUser(): Promise<IUser[]> {
    return this.UserDB
        .find()
        .limit(20)
        .lean();
  }

  async createUser(user: UserDto): Promise<IUser> {
    return await this.UserDB.create(user);
  }

  async getUserByEmail(email: string): Promise<IUser> {
    return this.UserDB.findOne({ email }).lean();
  }

  async getUserById(id: string): Promise<IUser> {
    return this.UserDB.findById(Types.ObjectId(id))
  }

}
