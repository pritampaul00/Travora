import { Injectable, Logger } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class SerpApiService {
    private readonly logger = new Logger(SerpApiService.name);

    private readonly apiKey = process.env.SERP_API_KEY!;

    async searchFlights(
        departureId: string,
        arrivalId: string,
        outboundDate: string,
    ) {
        try {
            this.logger.log(
                `Searching Google Flights: ${departureId} -> ${arrivalId}`,
            );

            const { data } = await axios.get(
                'https://serpapi.com/search.json',
                {
                    params: {
                        engine: 'google_flights',

                        departure_id: departureId,
                        arrival_id: arrivalId,

                        outbound_date: outboundDate,

                        type: 2,          // One-way trip

                        adults: 1,
                        currency: 'USD',
                        hl: 'en',

                        api_key: this.apiKey,
                    },
                },
            );

            this.logger.debug(JSON.stringify(data, null, 2));

            return [
                ...(data.best_flights ?? []),
                ...(data.other_flights ?? []),
            ];
        } catch (error: any) {
            this.logger.error(
                error.response?.data ?? error.message,
            );

            return [];
        }
    }
}