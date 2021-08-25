import { UserDto } from "./dto/user.dto";
import { UserService } from "./user.service";
import { IUser } from "./interfaces/user.interfaces";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getUser(): any;
    createUser(data: UserDto): any;
    getUserById(id: string): Promise<IUser>;
    getUserByEmail(email: string): Promise<IUser>;
}
