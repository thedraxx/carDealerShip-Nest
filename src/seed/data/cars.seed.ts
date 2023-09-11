import { InterfaceCar } from 'src/cars/interface/car.interface';
import { v4 as uuid } from 'uuid';

export const CARS_SEED: InterfaceCar[] = [
  {
    id: uuid(),
    brand: 'BMW',
    color: 'red',
    model: 'X5',
  },
  {
    id: uuid(),
    brand: 'Mercedes',
    color: 'black',
    model: 'C',
  },
  {
    id: uuid(),
    brand: 'Mercedes',
    color: 'black',
    model: 'E',
  },
];
