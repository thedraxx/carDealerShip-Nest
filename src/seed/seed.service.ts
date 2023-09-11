import { Injectable } from '@nestjs/common';
import { CARS_SEED } from './data/cars.seed';
import { CarsService } from 'src/cars/cars.service';
import { BrandsService } from '../brands/brands.service';
import { BRANDS_SEED } from './data/brands.seed';

@Injectable()
export class SeedService {
  constructor(
    private readonly carsService: CarsService,
    private readonly brandsService: BrandsService,
  ) {}

  public runSeed() {
    // CARS_SEED
    this.carsService.fillCarsWithSeedData(CARS_SEED);

    // BRANDS_SEED
    this.brandsService.fillBrandsWithSeedData(BRANDS_SEED);

    return 'Seed has been run!';
  }
}
