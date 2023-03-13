import { Injectable } from "@nestjs/common";
import { InjectDataSource, InjectRepository } from "@nestjs/typeorm";
import { DataSource, Repository } from "typeorm";
import { FlightEntity } from "./entities/flight.entity";

@Injectable()
export class FlightRepository extends Repository<FlightEntity> {
    constructor(
        @InjectRepository(FlightEntity)
        private readonly flightRepo: Repository<FlightEntity>,
        @InjectDataSource() private dataSource: DataSource
    ) { super(flightRepo.target, flightRepo.manager, flightRepo.queryRunner); }

    async findOneById(flightId: string): Promise<FlightEntity> {
        const flight = this.dataSource.getRepository(FlightEntity).findOne({
            relations: {
                departureAirport: true,
                arrivalAirport: true
            }, where: {
                id: flightId
            }
        });

        return await flight;
    }
}