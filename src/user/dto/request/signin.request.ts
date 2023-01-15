import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import {
  IsEmail,
  IsEnum,
  IsOptional,
  IsNumber,
  IsPhoneNumber,
  ValidateNested,
  IsString,
  Length,
  Matches,
  ValidateIf,
  IsArray,
} from 'class-validator';

export class SignInRequestDTO {
  @ApiProperty()
  @IsEmail()
  Email: string;

  @ApiProperty()
  @Length(6, 128)
  Password: string;
}
