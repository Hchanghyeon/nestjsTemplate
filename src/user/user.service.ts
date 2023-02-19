import { Injectable } from '@nestjs/common';
import { InjectRepository} from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepository:Repository<User>){};

  async createUser(createUserDto: CreateUserDto) {
    const user = new User(); // 유저 엔티티 생성
    user.name = createUserDto.name;
    user.birth = createUserDto.birth;
    user.email = createUserDto.email;
    user.password = createUserDto.password;
    user.signupVerifyToken = 'testSignupVerifyToken';
    return await this.userRepository.save(user);
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async deleteUser(email: string) {
    return await this.userRepository.delete({email})
  }
}
