import {NestFactory} from '@nestjs/core';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';
import process from 'process';
import {TwitchModule} from './twitch.module';

const port = process.env.TWITCH_API_PORT || 5002;

async function bootstrap() {
    const app = await NestFactory.create(TwitchModule);
    app.setGlobalPrefix('api');

    const config = new DocumentBuilder()
        .setTitle('NNO Twitch API')
        .setVersion('1.0')
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('swagger', app, document);

    await app.listen(port);
    console.log(`Twitch API is running on: ${await app.getUrl()}`);
}
bootstrap();
