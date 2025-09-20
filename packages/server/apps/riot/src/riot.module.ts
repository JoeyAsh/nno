import {Module} from '@nestjs/common';
import {CoreModule} from '@nno-server/modules/core/core.module';
import {RiotController} from './riot.controller';
import {RiotService} from './riot.service';

@Module({
    imports: [CoreModule],
    controllers: [RiotController],
    providers: [RiotService],
})
export class RiotModule {}
