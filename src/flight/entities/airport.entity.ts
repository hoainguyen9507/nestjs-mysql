import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { FlightEntity } from './flight.entity';

@Entity('airport')
export class AirportEntity {
    @PrimaryColumn({name: 'id'})
    id: string;

    @Column({name: 'airport_name'})
    airportName: string;

    @Column({name: 'province'})
    province: string;

    @OneToMany(() => FlightEntity, (flights) => flights)
    flights: FlightEntity[] 
}
