import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('airport')
export class AirportEntity {
    @PrimaryColumn({name: 'id'})
    id: string;

    @Column({name: 'airport_name'})
    airportName: string;

    @Column({name: 'province'})
    province: string;
}
