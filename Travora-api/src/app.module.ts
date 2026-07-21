import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TravelModule } from './travel/travel.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TravelModule,
  ],
})
export class AppModule {}