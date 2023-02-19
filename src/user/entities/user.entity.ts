import { Entity,  PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity('User')
export class User {
    @PrimaryGeneratedColumn() // 식별자 ID
    id:number; 

    @Column({length:30}) // 이름
    name:string;

    @Column({length:60}) // 이메일 
    email:string;

    @Column({length:30}) // 패스워드
    password:string;
    
    @Column() // 생년월일
    birth:Date;

    @Column({length:60}) // 토근
    signupVerifyToken:string;

    @CreateDateColumn() // 계정 생성 시각
    createdAt:Date;
}
