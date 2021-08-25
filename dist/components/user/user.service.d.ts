import { UserDto } from "./dto/user.dto";
import { Model } from "mongoose";
import { UserEntity } from "./entities/user.entities";
import { IUser } from "./interfaces/user.interfaces";
export declare class UserService {
    private UserDB;
    constructor(UserDB: Model<UserEntity>);
    getUser(): Promise<IUser[]>;
    createUser(user: UserDto): Promise<IUser>;
    getUserByEmail(email: string): Promise<IUser>;
    getUserById(id: string): Promise<IUser>;
}
