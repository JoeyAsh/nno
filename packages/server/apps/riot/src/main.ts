import {NestFactory} from '@nestjs/core';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';
import * as process from 'process';
import {RiotModule} from './riot.module';

const port = process.env.RIOT_API_PORT || 5001;

async function bootstrap() {
    const app = await NestFactory.create(RiotModule);
    app.setGlobalPrefix('api');

    const config = new DocumentBuilder()
        .setTitle('NNO Riot API')
        .setVersion('1.0')
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('swagger', app, document);

    await app.listen(port);
    console.log(`Riot API is running on: ${await app.getUrl()}`);
}
bootstrap();
