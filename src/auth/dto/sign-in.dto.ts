import { IsEmail, IsString } from 'class-validator';

export class SignInDTO {
  @IsString()
  @IsEmail()
  username: string;

  @IsString()
  password: string;
}
