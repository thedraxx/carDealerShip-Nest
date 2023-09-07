import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    {
      id: 1,
      brand: 'BMW',
      color: 'red',
      model: 'M3',
    },
    {
      id: 2,
      brand: 'Audi',
      color: 'white',
      model: 'A4',
    },
    {
      id: 3,
      brand: 'Volkswagen',
      color: 'black',
      model: 'Golf',
    },
  ];

  public findAll() {
    return this.cars;
  }

  public findOneById(id: number) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) throw new NotFoundException(`Car with id ${id} not found!!!!`);
    return car;
  }
}
