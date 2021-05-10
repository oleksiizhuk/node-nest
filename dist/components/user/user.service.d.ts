import { UserDto } from './dto/userDto';
export declare class UserService {
    private users;
    getUser(): UserDto;
    createUser(user: UserDto): any;
}
