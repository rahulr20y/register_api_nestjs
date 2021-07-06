import { Injectable , NotFoundException} from "@nestjs/common";

//import {User} from './registration.model';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usersnest } from "src/database/entity/user.entity";

import {validate} from "class-validator";


@Injectable()
export class RegistrationService {
    //private users: User[] = [];

    constructor(
        @InjectRepository(Usersnest)
        private usersRepository: Repository<Usersnest>,
    ) {}


    findAll(): Promise<Usersnest[]> {
        return this.usersRepository.find();
    }

    findOne(id: number): Promise<Usersnest> {
        return this.usersRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.usersRepository.delete(id);
    }
    async insertUser(user_id:number, first_name:string, last_name:string, email:string, pass:string):Promise<number>{
        const currUser = await this.usersRepository.create({first_name:first_name,last_name:last_name,email:email,pass:pass});
        //console.log(currUser);
        const errors = await validate(currUser);
        if (errors.length > 0) {
            throw new Error(`Validation failed!`); 
        } else {
            const result = await this.usersRepository.save(currUser);
            //console.log(result);
            return result.user_id;
        }
    }


}






/*

//with array as database model

@Injectable()
export class RegistrationService {
    private users: User[] = [];

    insertUser(user_id: number,first_name: string, last_name: string, email: string, pass:string) : number{
        const newUser = new User(user_id, first_name, last_name, email,pass);

        this.users.push(newUser);

        return user_id;
    }

    getAllUser(){
        return {status:"success", data:[...this.users]};
    }
    getSingleUser(userId:number){
        const userIndex = this.users.findIndex(user => user.user_id === userId);
        const currUser = this.users[userIndex];
        if (!currUser) {
        throw new NotFoundException('Could not find product.');
        }
        return currUser;
    }
    
    updateUser(userId:number,first_name: string, last_name: string, email: string, pass:string){
        const userIndex = this.users.findIndex(user => user.user_id === userId);
        const currUser = this.users[userIndex];
        if(first_name){
            currUser.first_name=first_name;
        }
        if(last_name){
            currUser.last_name=last_name;
        }
        if(email){
            currUser.email=email
        }
        if(pass){
            currUser.pass=pass
        }
        this.users[userIndex] = currUser; 
    }

}
*/