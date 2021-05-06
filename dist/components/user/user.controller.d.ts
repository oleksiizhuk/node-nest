import { UserDto } from './dto/userDto';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getUser(): any;
    createUser(data: UserDto): any;
}
