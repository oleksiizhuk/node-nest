import { UserDto } from "./dto/user.dto";
import { IUser } from "./interfaces/user.interfaces";
import { UserRepository } from "./user.repository";
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    getUsers(): Promise<IUser[]>;
    createUser(user: UserDto): Promise<IUser>;
    getUserById(id: string): Promise<IUser>;
    getUserByEmail(email: string): Promise<IUser>;
    update(id: string, user: UserDto): Promise<IUser>;
    delete(id: string): Promise<IUser>;
}
