import {NestFactory} from '@nestjs/core';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';
import process from 'process';
import {AuthModule} from './auth.module';

const port = process.env.AUTH_API_PORT || 5003;

async function bootstrap() {
    const app = await NestFactory.create(AuthModule);
    app.setGlobalPrefix('api');

    const config = new DocumentBuilder()
        .setTitle('NNO Auth API')
        .setVersion('1.0')
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('swagger', app, document);

    await app.listen(port);
    console.log(`Auth API is running on: ${await app.getUrl()}`);
}
bootstrap();
