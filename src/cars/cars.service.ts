import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { InterfaceCar } from './interface/car.interface';
import { createCarDto,updateCardDto } from './dto/';
@Injectable()
export class CarsService {
  private cars: InterfaceCar[] = [
    // {
    //   id: uuidv4(),
    //   brand: 'BMW',
    //   color: 'red',
    //   model: 'M3',
    // },
  ];

  public findAll() {
    return this.cars;
  }

  public findOneById(id: string) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) throw new NotFoundException(`Car with id ${id} not found!!!!`);
    return car;
  }


  public createCarDto(createCarDto: createCarDto) {
    this.cars.push({
      id: uuidv4(),
      ...createCarDto,
    });
    return {
      message: 'Car has been created successfully',
      cars: this.cars,
    }
  }

  public updateCarDto(id: string, updateCarDto: updateCardDto) {
    let cardDB = this.findOneById(id);

    if(updateCarDto.id && updateCarDto.id !== id) {
      throw new NotFoundException(`Car with id ${id} not found!!!!`);
    }

    this.cars = this.cars.map((car) => {
      if (car.id === id) {
       cardDB = {...cardDB, ...updateCarDto, id};
      }
      return car;
    });

    return cardDB;
  }

  public removeCar(id: string) {

    let cardDB = this.findOneById(id);

    if(!cardDB) {
      throw new NotFoundException(`Car with id ${id} not found!!!!`);
    }

    // Remove car from array
   this.cars = this.cars.filter((car) => car.id !== id);

    return {
      message: `Car with id ${id} has been removed`,
      cars: this.cars,
    }
  }
}
