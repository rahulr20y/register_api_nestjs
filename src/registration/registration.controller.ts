import { Controller, Post,Get, Patch, Body, Param } from "@nestjs/common";
import { RegistrationService } from "./registration.service";


@Controller('register')
export class RegistrationController{
    constructor(private readonly registrationService: RegistrationService){}


    @Get()
    getUsers(){
        return this.registrationService.findAll();
    }

    @Get(':id')
    getUser(@Param('id') userId: string) {
     return this.registrationService.findOne(Number(userId))
    }

    @Post()
    async addUser(@Body('user_id') user_id:number, @Body('first_name') first_name:string, @Body('last_name') last_name:string, @Body('email') email:string, @Body('pass') pass:string): Promise<any> {
        //console.log("callController");
       const generatedId = await this.registrationService.insertUser(user_id, first_name, last_name, email,pass);
       return {status:"success",id: generatedId};
    }

}





/*

//with array as as database model
@Controller('register')
export class RegistrationController{
    constructor(private readonly registrationService: RegistrationService){}

   //@Body() completeBody:{user_id:number, email:string}

    @Post()
    addUser(@Body('user_id') user_id:number, @Body('first_name') first_name:string, @Body('last_name') last_name:string, @Body('email') email:string, @Body('pass') pass:string): any {
       const generatedId = this.registrationService.insertUser(user_id, first_name, last_name, email,pass);
       return {id: generatedId};
    }

    @Get()
    getUsers(){
        return this.registrationService.getAllUser();
    }

    @Get(':id')
    getUser(@Param('id') userId: string) {
      const currUser = this.registrationService.getSingleUser(Number(userId));
      return {status:"success", data:currUser}
    }

    @Patch(':id')
    updateUser(@Param('id') userId:string, @Body('first_name') first_name:string, @Body('last_name') last_name:string, @Body('email') email:string, @Body('pass') pass:string){
       this.registrationService.updateUser(Number(userId),first_name,last_name,email,pass);
       return null;
    }


}
*/