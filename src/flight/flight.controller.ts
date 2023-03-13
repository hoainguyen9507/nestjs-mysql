import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { FlightEntity } from 'src/flight/entities/flight.entity';
import { FlightService } from 'src/flight/flight.service';


@Controller('flights')
export class FlightController {
  constructor(private readonly flightService: FlightService) { }
  @Get()
  getAll(): Promise<FlightEntity[]> {
    return this.flightService.findAll();
  }
  @Get('/flight')
  getById2(@Query() query) {
    return this.flightService.findOne2(query.id);
  }

  @Get(':id')
  getById(@Param() params) {
    return this.flightService.findOne(params.id);
  }

  @Post('/create')
  create(@Body() flight: FlightEntity) {
    return this.flightService.create(flight);
  }

  @Put('/update')
  update(@Body() flight: FlightEntity) {
    return this.flightService.update(flight);
  }

  @Delete(':id')
  deleteUser(@Param() params) {
    return this.flightService.delete(params.id);
  }
}
