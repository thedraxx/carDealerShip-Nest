import {
  Controller,
  Get,
  Param,
  Post,
  Patch,
  Delete,
  Body,
  ParseUUIDPipe,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { createCarDto } from './dto/create-car.dto';
import { updateCardDto } from './dto/update-car.dto.';

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
    return this.CarsService.createCarDto(createCarDto);
  }

  @Patch(':id')
  updateCar(@Param('id', ParseUUIDPipe) id: string, 
  @Body() updateCarDto: updateCardDto) 
  {
    return this.CarsService.updateCarDto(id, updateCarDto);
  }

  @Delete(':id')
  removeCar(@Param('id', ParseUUIDPipe) id: string) {
    return this.CarsService.removeCar(id);
  }
}
