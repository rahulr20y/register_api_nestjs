import { Module } from "@nestjs/common";

import { RegistrationController } from "./registration.controller";
import { RegistrationService } from "./registration.service";

import { TypeOrmModule } from "@nestjs/typeorm";
import { Usersnest } from "src/database/entity/user.entity";

@Module({
    imports:[TypeOrmModule.forFeature([Usersnest])],
    controllers: [RegistrationController],
    providers: [RegistrationService],

})
 
export class RegistrationModule {}