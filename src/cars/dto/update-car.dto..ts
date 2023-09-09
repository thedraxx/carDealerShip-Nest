import { IsOptional, IsString, IsUUID } from 'class-validator';

export class updateCardDto {
  @IsString()
  @IsUUID()
  @IsOptional()
  readonly id?: string;

  @IsString()
  @IsOptional()
  readonly brand?: string;

  @IsString()
  @IsOptional()
  readonly model?: string;
  
  @IsString()
  @IsOptional()
  readonly color?: string;
}


