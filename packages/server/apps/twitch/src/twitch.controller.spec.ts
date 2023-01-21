import { Test, TestingModule } from '@nestjs/testing';
import { TwitchController } from './twitch.controller';
import { TwitchService } from './twitch.service';

describe('TwitchController', () => {
  let twitchController: TwitchController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TwitchController],
      providers: [TwitchService],
    }).compile();

    twitchController = app.get<TwitchController>(TwitchController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(twitchController.getHello()).toBe('Hello World!');
    });
  });
});
