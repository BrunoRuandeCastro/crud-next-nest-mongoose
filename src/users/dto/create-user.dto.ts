import { Address } from "../entities/addres.entity";

export class CreateUserDto {
    readonly username: string;
    readonly email: string;
    readonly addresses: Address[];
  
    constructor(partial: Partial<CreateUserDto>) {
      Object.assign(this, partial);
    }
  }


   
  