import {OlfactoryFamilies} from "./olfactory-families";
import {PerfumesClassification} from "./perfumes-classification";

export class Perfumes {
  id: number;
  name: string;
  description: string;
  price: Price;
  photoUrl: PhotoUrl;
  olfactoryFamilies: OlfactoryFamilies;
  perfumesClassification: PerfumesClassification;
  notes: string[] = [];

  constructor() {
    this.id = 0;
    this.name = "";
    this.description = "";
    this.price = new Price();
    this.photoUrl = new PhotoUrl();
    this.olfactoryFamilies = new OlfactoryFamilies();
    this.perfumesClassification = new PerfumesClassification();
    this.notes = [];
  }
}

export class Price {
  value: number;
  currency: string;

  constructor(value: number = 0, currency: string = 'S/.') {
    this.value = value;
    this.currency = currency;
  }
}

export class PhotoUrl {
  url: string;

  constructor(url: string = '') {
    this.url = url;
  }
}
