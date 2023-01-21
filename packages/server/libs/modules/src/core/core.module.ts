import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {TypeOrmModule} from '@nestjs/typeorm';
import {AuthzModule} from '@nno-server/modules';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: process.env.DATABASE_HOST,
            port: parseInt(process.env.DATABASE_PORT, 10) || 6655,
            username: process.env.DATABASE_USERNAME,
            password: process.env.DATABASE_PASSWORD,
            database: process.env.DATABASE_NAME,
            autoLoadEntities: true,
            synchronize: true,
        }),
        AuthzModule,
    ],
})
export class CoreModule {}
