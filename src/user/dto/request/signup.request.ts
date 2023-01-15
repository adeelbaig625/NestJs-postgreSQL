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

export class SignupRequestDTO {
  @ApiProperty()
  @IsEmail()
  Email: string;

  @ApiPropertyOptional()
  @Length(6, 128)
  Password: string;

  @ApiProperty()
  @Length(1, 255)
  FullName: string;

  @ApiProperty()
  @Length(1, 255)
  DisplayName: string;

  @ApiProperty()
  @Length(6, 128)
  PhoneNumber: string;
}
