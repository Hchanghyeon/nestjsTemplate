import { IsString, MaxLength, MinLength, Matches, IsEmail, IsDate, Length } from "class-validator";

export class CreateUserDto {
    @IsString()
    @MinLength(2)
    @MaxLength(20)
    readonly name:string; // 계정 이름

    @IsString()
    @IsEmail()
    @MaxLength(60)
    readonly email: string; // 이메일 

    @IsString()
    @MinLength(10)
    @MaxLength(10)
    readonly birth: Date; // 생년 월일

    @IsString()
    @Matches(/^[A-Za-z\d!@#$%^&*()]{8,30}$/)
    readonly password:string; // 패스워드
}
