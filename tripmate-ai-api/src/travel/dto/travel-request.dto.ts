import { IsNotEmpty, IsString } from 'class-validator';

export class TravelRequestDto {
  @IsString()
  @IsNotEmpty()
  message: string;
}