import {Module} from '@nestjs/common';
import {PassportModule} from '@nestjs/passport';
import {TypeOrmModule} from '@nestjs/typeorm';
import {UserEntity, UsersService} from '@nno-server/modules';
import {JwtStrategy} from './jwt.strategy';

@Module({
    imports: [
        PassportModule.register({defaultStrategy: 'jwt'}),
        TypeOrmModule.forFeature([UserEntity]),
    ],
    providers: [JwtStrategy, UsersService],
    exports: [PassportModule],
})
export class AuthzModule {}
