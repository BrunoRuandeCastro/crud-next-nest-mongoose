import { Address } from './addres.entity';

export class User {
  private id: string;
  private username: string;
  private email: string;
  private password: string;
  private addresses: Address[];
}
