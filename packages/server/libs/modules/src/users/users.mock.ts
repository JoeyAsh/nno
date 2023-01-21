import * as crypto from 'crypto';
import {UserEntity} from './entities/user.entity';

export const userMock: UserEntity = {
    id: crypto.randomUUID(),
    userID: crypto.randomUUID(),
    email: 'johannes@aschenbrenner.de',
    firstName: 'Johannes',
    lastName: 'Aschenbrenner',
    birthDate: new Date('1989-10-31'),
};
