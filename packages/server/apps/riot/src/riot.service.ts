import {Injectable} from '@nestjs/common';
import {Constants, LolApi} from 'twisted';

@Injectable()
export class RiotService {
    private static readonly RIOT_API_BASE_URL =
        'https://euw1.api.riotgames.com/lol/';

    private readonly api = new LolApi();

    async getByName(name: string) {
        const response = await this.api.Summoner.getByName(
            name,
            Constants.Regions.EU_WEST,
        );
        console.log(response);
        return this.api.Summoner.getById(
            response.response.id,
            Constants.Regions.EU_WEST,
        );
    }
}
