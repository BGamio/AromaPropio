import {Price} from "./perfumes";

export class PerfumesClassification {
  id: number;
  name: string;
  description: string;
  price: Price

  constructor(id: number = 0, name: string = '', description: string = '') {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = new Price();
  }
}
