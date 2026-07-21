import { Module } from '@nestjs/common';

import { TravelController } from './travel.controller';
import { TravelService } from './travel.service';

import { TravelGraph } from '../graph/travel.graph';

import { FlightAgent } from '../agents/flight.agent';
import { HotelAgent } from '../agents/hotel.agent';
//import {ReportAgent} from '../agents/report.agent';

//import { AviationService } from '../tools/aviation.service';
import { TavilyService } from '../tools/tavily.service';

import { TravelRequestParser } from '../common/travel-request.parser';
//import { RequestParserAgent } from 'src/agents/request-parser.agent';
import { AirportService } from 'src/tools/airport.service';
// import { AirportResolverAgent } from 'src/agents/airport-resolver.agent';
import { ItineraryAgent } from 'src/agents/itinerary.agent';
import { SerpApiService } from 'src/tools/serpapi.service';
import { ResponseAgent } from 'src/agents/response.agent';
import { SerpHotelService } from 'src/tools/serp-hotel.service';
import { RecommendationAgent } from 'src/agents/recommendation.agent';

@Module({
  controllers: [TravelController],
  providers: [
    TravelService,
    TravelGraph,

    // RequestParserAgent,
    ResponseAgent,
    // AirportResolverAgent,

    FlightAgent,
    HotelAgent,
    ItineraryAgent,
    // ReportAgent,
    RecommendationAgent,  

    AirportService,
    //AviationService,
    SerpApiService,
    SerpHotelService,
    //TavilyService,

    TravelRequestParser,
  ],
})
export class TravelModule {}