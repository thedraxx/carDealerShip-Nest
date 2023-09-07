import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Patch,
  Delete,
  Body,
} from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly CarsService: CarsService) {}

  @Get()
  getAllCars() {
    return this.CarsService.findAll();
  }

  @Get(':id')
  getCarById(@Param('id') id: string) {
    return this.CarsService.findOneById(id);
  }

  @Post()
  createCar(@Body() body: any) {
    return body;
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
