import { ApiProperty } from '@nestjs/swagger';

export class UserResponseModel {
  @ApiProperty()
  Id: number;

  @ApiProperty()
  FullName: string;

  @ApiProperty()
  DisplayName: string;

  @ApiProperty()
  Email: string;

  @ApiProperty()
  PhoneNumber: string;
}
export default class SignupResponseDTO {
  @ApiProperty()
  User: UserResponseModel;
  @ApiProperty()
  Token: string;
}
