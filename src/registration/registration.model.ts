export class User {
    constructor(
      public user_id: number,
      public first_name: string,
      public last_name: string,
      public email: string,
      public pass: string,
    ) {}
  }