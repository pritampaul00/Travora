import { Injectable } from '@nestjs/common';

@Injectable()
export class AirportService {
  private readonly airports = new Map<string, string>([
    ['tokyo', 'NRT'],
    ['osaka', 'KIX'],
    ['kyoto', 'UKY'],
    ['seoul', 'ICN'],
    ['bangkok', 'BKK'],
    ['singapore', 'SIN'],
    ['paris', 'CDG'],
    ['london', 'LHR'],
    ['new york', 'JFK'],
    ['dubai', 'DXB'],
    ['bali', 'DPS'],
    ['delhi', 'DEL'],
    ['mumbai', 'BOM'],
    ['sydney', 'SYD'],
    ['melbourne', 'MEL'],
    ['brisbane', 'BNE'],
    ['los angeles', 'LAX'],
    ['kolkata', 'CCU'],
  ]);

  getIata(city: string): string | undefined {
    return this.airports.get(city.toLowerCase());
  }
}