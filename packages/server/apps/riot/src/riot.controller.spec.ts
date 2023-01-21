import { Test, TestingModule } from '@nestjs/testing';
import { RiotController } from './riot.controller';
import { RiotService } from './riot.service';

describe('RiotController', () => {
  let riotController: RiotController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [RiotController],
      providers: [RiotService],
    }).compile();

    riotController = app.get<RiotController>(RiotController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(riotController.getHello()).toBe('Hello World!');
    });
  });
});
