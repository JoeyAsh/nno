import {NestFactory} from '@nestjs/core';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';
import {RiotModule} from './riot.module';

async function bootstrap() {
    const app = await NestFactory.create(RiotModule);

    const config = new DocumentBuilder()
        .setTitle('Riot API')
        .setDescription('Delivers data from League of Legends')
        .setVersion('1.0')
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    await app.listen(5001);
}
bootstrap();
