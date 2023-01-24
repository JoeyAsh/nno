import {Controller, Get, Param} from '@nestjs/common';
import {ApiTags} from '@nestjs/swagger';
import {RiotService} from './riot.service';

@Controller('summoner')
@ApiTags('Summoner')
export class RiotController {
    constructor(private readonly riotService: RiotService) {}

    @Get(':name')
    async getSummoner(@Param('name') name: string) {
        return this.riotService.getByName(name);
    }
}
