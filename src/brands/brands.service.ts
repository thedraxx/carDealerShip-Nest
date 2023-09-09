import { Injectable } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class BrandsService {

  private brands:Brand[] = [
    // {
    //   id: uuid(),
    //   name: 'Toyota',
    //   createdAt: Date.now(),
    // },
  ];

  create(createBrandDto: CreateBrandDto) {
    const brand:Brand = {
      id: uuid(),
      name: createBrandDto.name,
      createdAt: Date.now(),
    };
    this.brands.push(brand);
    return this.brands;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find(brand => brand.id === id)
    if (!brand) throw new Error('Brand not found');
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brandDB = this.findOne(id);
    this.brands = this.brands.map(brand => {
      if (brand.id === id) {
        brandDB.updatedAt = new Date().getTime();
        brandDB = {...brandDB, ...updateBrandDto};
        return brandDB;
      }
      return brand;
    });
    return brandDB;
  }

  remove(id: string) {
    this.brands = this.brands.filter(brand => brand.id !== id);
    return this.brands;
  }
}
