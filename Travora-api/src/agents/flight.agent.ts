import { Injectable, Logger } from '@nestjs/common';
import { TravelState } from '../graph/travel.state';
import { Flight } from '../models/flight.model';
import { AirportService } from 'src/tools/airport.service';
import { SerpApiService } from 'src/tools/serpapi.service';

@Injectable()
export class FlightAgent {
  private readonly logger = new Logger(FlightAgent.name);

  constructor(
    private readonly serpApiService: SerpApiService,
    private readonly airportService: AirportService,
  ) { }

  async invoke(state: TravelState) {
    this.logger.log('✈️ Flight Agent Started');

    this.logger.log({
      origin: state.origin,
      originIata: state.originIata,
      destination: state.destination,
    });

    if (!state.originIata || !state.destination) {
      this.logger.warn('Missing origin or destination');

      return {
        flights: [],
      };
    }

    const destinationIata = this.airportService.getIata(
      state.destination,
    );

    if (!destinationIata) {
      this.logger.warn(
        `No airport mapping found for ${state.destination}`,
      );

      return {
        flights: [],
      };
    }

    this.logger.log(
      `Searching flights: ${state.originIata} -> ${destinationIata}`,
    );

    // Temporary departure date.
    // We'll replace this later with a parsed date from the user's prompt.
    const offers = await this.serpApiService.searchFlights(
      state.originIata,
      destinationIata,
      '2026-08-01',
    );

    const formattedFlights: Flight[] = offers.map((offer: any) => {
      const firstLeg = offer.flights[0];
      const lastLeg = offer.flights[offer.flights.length - 1];

      return {
        airline: firstLeg.airline ?? 'Unknown',
        flightNumber: firstLeg.flight_number ?? 'N/A',

        departure: firstLeg.departure_airport.id,
        arrival: lastLeg.arrival_airport.id,

        departureTime: firstLeg.departure_airport.time,
        arrivalTime: lastLeg.arrival_airport.time,

        price: `${offer.price} USD`,

        duration: offer.total_duration,
        travelClass: firstLeg.travel_class,
      };
    });

    return {
      flights: formattedFlights,
    };
  }
}