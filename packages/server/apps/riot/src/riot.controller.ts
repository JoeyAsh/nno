import { Controller, Get } from '@nestjs/common';
import { RiotService } from './riot.service';

@Controller()
export class RiotController {
  constructor(private readonly riotService: RiotService) {}

  @Get()
  getHello(): string {
    return this.riotService.getHello();
  }
}
