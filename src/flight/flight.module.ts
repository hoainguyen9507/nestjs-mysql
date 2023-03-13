import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FlightController } from 'src/flight/flight.controller';
import { FlightEntity } from 'src/flight/entities/flight.entity';
import { FlightService } from 'src/flight/flight.service';
import { AirportEntity } from './entities/airport.entity';
import { FlightRepository } from './flight.repository';

@Module({
  providers: [FlightService, FlightRepository],
  controllers: [FlightController],
  imports: [TypeOrmModule.forFeature([FlightEntity, AirportEntity])],
})
export class FlightModule { }
