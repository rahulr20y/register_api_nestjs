import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';
import {Contains, IsInt, Length, IsEmail, IsFQDN, IsDate, Min, Max, IsNotEmpty} from "class-validator"

@Entity('Usersnest')
//@Unique(['email'])
export class Usersnest {
    @PrimaryGeneratedColumn()
    user_id: number;
 
    // @Column('int')
    // user_id: number;

    @Column({ length: 500 })
    @IsNotEmpty()
    first_name: string;

    @Column({ length: 500 })
    last_name: string;

    @Column({ unique:true})
    @IsEmail({}, { message: 'Incorrect email' })
    @IsNotEmpty({message:"email cannot be empty"})
    email: string;

    @Column({ length: 500 })
    @IsNotEmpty({message:"email cannot be empty"})
    pass: string;


}