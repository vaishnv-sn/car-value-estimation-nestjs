import { IsEmail, IsString, IsOptional } from 'class-validator';

export class updateDto {
  @IsEmail()
  @IsOptional()
  email: string;

  @IsString()
  @IsOptional()
  password: string;
}
