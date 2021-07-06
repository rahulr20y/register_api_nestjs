import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
//import { DatabaseModule } from './database/database.module';
import { Usersnest } from './database/entity/user.entity';

import { RegistrationModule } from './registration/registration.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'practice',
      entities: [Usersnest],
      synchronize: true,
    }),
    RegistrationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}



/*

   TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'practice',
      entities: [],
      synchronize: true,
    }),
 
*/