import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { AirportEntity } from './airport.entity';

@Entity('flight')
export class FlightEntity {
    @PrimaryGeneratedColumn('uuid', {name: 'id'})
    id: string;

    @OneToOne(() => AirportEntity,{
        eager: true,
    })
    @JoinColumn({name: 'departure_airport', referencedColumnName: 'id'})
    departureAirport: AirportEntity

    @OneToOne(() => AirportEntity, {
        eager: true,
    })
    @JoinColumn({name: 'arrival_airport', referencedColumnName: 'id'})
    arrivalAirport: AirportEntity

    @Column({ type: 'timestamp' , name: 'departure_date_time'})
    departureDateTime: Date;

    @Column({ type: 'timestamp' , name: 'arrival_date_time'})
    arrivalDateTime: Date;

    @Column({name:'price', precision: 10, scale: 2, type:'decimal'})
    price: number;
}
