import {INestApplication} from '@nestjs/common';
import {Test, TestingModule} from '@nestjs/testing';
import * as request from 'supertest';
import {RiotModule} from '../src/riot.module';

describe('RiotController (e2e)', () => {
    let app: INestApplication;

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [RiotModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

    it('/ (GET)', () => {
        return request(app.getHttpServer())
            .get('/')
            .expect(200)
            .expect('Hello World!');
    });
});
