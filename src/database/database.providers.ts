// import { createConnection } from 'typeorm';

// import { User } from './entity/user.entity';

// export const databaseProviders = [
//   {
//     provide: 'DATABASE_CONNECTION',
//     useFactory: async () => await createConnection({
//       type: 'mysql',
//       host: 'localhost',
//       port: 3306,
//       username: 'root',
//       password: 'password',
//       database: 'practice',
//       entities: [
//           // __dirname + '/../**/*.entity{.ts,.js}',
//           User
//       ],
//       synchronize: true,
//     }),
//   },
// ];