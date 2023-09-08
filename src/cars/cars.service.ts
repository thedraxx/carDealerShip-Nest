import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { InterfaceCar } from './interface/car.interface';

@Injectable()
export class CarsService {
  private cars: InterfaceCar[] = [
    {
      id: uuidv4(),
      brand: 'BMW',
      color: 'red',
      model: 'M3',
    },
    {
      id: uuidv4(),
      brand: 'Audi',
      color: 'white',
      model: 'A4',
    },
    {
      id: uuidv4(),
      brand: 'Volkswagen',
      color: 'black',
      model: 'Golf',
    },
  ];

  public findAll() {
    return this.cars;
  }

  public findOneById(id: string) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) throw new NotFoundException(`Car with id ${id} not found!!!!`);
    return car;
  }
}
