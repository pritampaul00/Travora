import { Injectable } from '@nestjs/common';
import { TravelState } from '../graph/travel.state';
import { AirportService } from '../tools/airport.service';

@Injectable()
export class TravelRequestParser {
  constructor(
    private readonly airportService: AirportService,
  ) { }

  parse(message: string): Partial<TravelState> {
    const state: Partial<TravelState> = {};

    // const destinationMatch =
    //   message.match(/trip to\s+([a-zA-Z\s]+?)(?=\s+with|\s+for|$)/i) ??
    //   message.match(/visit\s+([a-zA-Z\s]+?)(?=\s+with|\s+for|$)/i);

    const destinationMatch =
      message.match(
        /trip to\s+([a-zA-Z\s]+?)(?=\s+from|\s+with|\s+for|$)/i,
      ) ??
      message.match(
        /visit\s+([a-zA-Z\s]+?)(?=\s+from|\s+with|\s+for|$)/i,
      );

    if (destinationMatch) {
      state.destination = destinationMatch[1].trim();

      // state.destinationIata = this.airportService.getIata(
      //   state.destination,
      // );
    }

    const daysMatch = message.match(/(\d+)\s*day/i);

    if (daysMatch) {
      state.days = Number(daysMatch[1]);
    }

    // const budgetMatch = message.match(/\$?(\d+)/);
    const budgetMatch =
      message.match(/budget\s*(?:of)?\s*\$?(\d+)/i) ??
      message.match(/\$(\d+)/);

    if (budgetMatch) {
      state.budget = Number(budgetMatch[1]);
    }

    state.origin = 'Kolkata';
    state.originIata = 'CCU';

    return state;
  }
}