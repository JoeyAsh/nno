import {Injectable, Logger, NotFoundException} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import * as crypto from 'crypto';
import {Repository} from 'typeorm';
import {CreateUserDto} from './dto/create-user.dto';
import {UpdateUserDto} from './dto/update-user.dto';
import {UserEntity} from './entities/user.entity';

@Injectable()
export class UsersService {
    private readonly logger: Logger = new Logger(UsersService.name);

    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
    ) {}

    public async create(createUserDto: CreateUserDto) {
        this.logger.log('Creating new user.');

        const id: string = crypto.randomUUID();

        const user = await this.userRepository.findOneBy({
            userID: createUserDto.userID,
            email: createUserDto.email,
        });

        if (user) {
            return user;
        }

        const newUser: UserEntity = {
            ...createUserDto,
            id,
        };

        await this.userRepository.save(newUser);

        return newUser;
    }

    public async findAll(): Promise<Array<UserEntity>> {
        this.logger.log(`Return all users.`);
        return this.userRepository.find();
    }

    public async findOneByUserID(id: string): Promise<UserEntity> {
        this.logger.log(`Return user with userID: ${id}.`);
        return this.userRepository.findOneBy({userID: id});
    }

    public async findOne(id: string): Promise<UserEntity> {
        this.logger.log(`Return user with id: ${id}.`);
        return this.userRepository.findOneBy({id});
    }

    public async update(
        id: string,
        updateUserDto: UpdateUserDto,
    ): Promise<UserEntity> {
        this.logger.log(`Updating user with id: ${id}.`);

        const user: UserEntity = await this.userRepository.findOneBy({id});

        if (!user) {
            throw new NotFoundException('User not found.');
        }

        const updatedUser: UserEntity = {
            ...user,
            ...updateUserDto,
        };

        await this.userRepository.save(updatedUser);

        return updatedUser;
    }

    public async remove(id: string): Promise<void> {
        await this.userRepository.delete(id);
    }

    public async getFirstFoundUser(): Promise<UserEntity> {
        const users = await this.userRepository.find();
        return users[users.length - 1];
    }
}
