import { Injectable } from '@nestjs/common';
import { FlightEntity } from 'src/flight/entities/flight.entity';
import { DeleteResult, UpdateResult } from 'typeorm';
import { FlightDto } from './dtos/flight-detail.dto';
import { FlightRepository } from './flight.repository';


@Injectable()
export class FlightService {
  constructor(
    private readonly flightRepo: FlightRepository,
  ) { }
  async findAll(): Promise<FlightEntity[]> {
    return await this.flightRepo.find();
  }

  async findOne(id: string): Promise<FlightDto> {
    return await this.flightRepo.findOneById( id ).then(result => this.convertFlightDto(result));
  }

  async findOne2(id: string): Promise<FlightDto> {
    return await this.flightRepo.findOneBy({ id} ).then(result => this.convertFlightDto(result));
  }

  async create(flight: FlightEntity): Promise<FlightEntity> {
    return await this.flightRepo.save(flight);
  }

  async update(flight: FlightEntity): Promise<UpdateResult> {
    return await this.flightRepo.update(flight.id, flight);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.flightRepo.delete(id);
  }

  private convertFlightDto(flight: FlightEntity): FlightDto {
    let flightDto = new FlightDto();
    flightDto.id = flight.id;
    flightDto.arrivalAirport = flight.arrivalAirport.airportName;
    flightDto.arrivalDateTime = flight.arrivalDateTime;
    flightDto.departureAirport = flight.departureAirport.airportName;
    flightDto.departureDateTime = flight.departureDateTime;
    flightDto.price = flight.price;

    return flightDto;
  }
}
