import {Price} from "./perfumes";

export class OlfactoryFamilies {
  id: number;
  name: string;
  description: string;
  price: Price;

  constructor(id: number = 0, name: string = '') {
    this.id = id;
    this.name = name;
    this.description = '';
    this.price = new Price();
  }
}
