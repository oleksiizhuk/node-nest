import { UserDto } from "./dto/user.dto";
import { UserService } from "./user.service";
import { IUser } from "./interfaces/user.interfaces";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getUsers(): any;
    createUser(user: UserDto): any;
    getUserById(id: string): Promise<IUser>;
    getUserByEmail(email: string): Promise<IUser>;
    patchUser(id: string, user: UserDto): Promise<IUser>;
    delete(id: string): Promise<IUser>;
}
