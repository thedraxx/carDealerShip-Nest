import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Patch,
  Delete,
  Body,
  ParseUUIDPipe,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { createCarDto } from './dto/create-car.dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly CarsService: CarsService) {}

  @Get()
  getAllCars() {
    return this.CarsService.findAll();
  }

  @Get(':id')
  getCarById(@Param('id', ParseUUIDPipe) id: string) {
    return this.CarsService.findOneById(id);
  }

  @Post()
  createCar(@Body() createCarDto: createCarDto) {
    return createCarDto;
  }

  @Patch(':id')
  updateCar(@Param('id', ParseIntPipe) id: number, @Body() body: any) {
    return `This action updates a #${id} car with ${JSON.stringify(body)}`;
  }

  @Delete(':id')
  removeCar(@Param('id', ParseIntPipe) id: number) {
    return `This action removes a #${id} car`;
  }
}
