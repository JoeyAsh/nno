import { Injectable } from '@nestjs/common';

@Injectable()
export class RiotService {
  getHello(): string {
    return 'Hello World!';
  }
}
