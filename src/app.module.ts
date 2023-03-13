import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfig } from './config/typeorm.config';
import { FlightModule } from './flight/flight.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    FlightModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
