import {NestFactory} from '@nestjs/core';
import {TwitchModule} from './twitch.module';

async function bootstrap() {
    const app = await NestFactory.create(TwitchModule);
    await app.listen(5002);
}
bootstrap();
