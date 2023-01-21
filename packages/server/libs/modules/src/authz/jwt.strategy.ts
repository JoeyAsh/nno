import {Injectable, Logger} from '@nestjs/common';
import {PassportStrategy} from '@nestjs/passport';
import {UserEntity, UsersService} from '@nno-server/modules';
import * as dotenv from 'dotenv';
import {passportJwtSecret} from 'jwks-rsa';
import {ExtractJwt, Strategy} from 'passport-jwt';

dotenv.config();

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    private readonly logger: Logger = new Logger(JwtStrategy.name);

    constructor(private readonly usersService: UsersService) {
        super({
            secretOrKeyProvider: passportJwtSecret({
                cache: true,
                rateLimit: true,
                jwksRequestsPerMinute: 5,
                jwksUri: `${process.env.AUTH0_ISSUER_URL}.well-known/jwks.json`,
            }),

            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            audience: process.env.AUTH0_AUDIENCE,
            issuer: `${process.env.AUTH0_ISSUER_URL}`,
            algorithms: ['RS256'],
        });
    }

    async validate(payload: any): Promise<UserEntity> {
        const userID: string = payload.sub;
        this.logger.log(`Searching user with userID: ${userID}`);
        const user = await this.usersService.findOneByUserID(userID);
        this.logger.log(`Found user with id: ${user.id}`);
        return user;
    }
}
