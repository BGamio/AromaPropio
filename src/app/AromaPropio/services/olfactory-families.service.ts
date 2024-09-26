import { Injectable } from '@angular/core';
import {OlfactoryFamilies} from "../model/olfactory-families";

@Injectable({
  providedIn: 'root'
})
export class OlfactoryFamiliesService {

  olfactoryFamilyData: Array<OlfactoryFamilies>;

  constructor() {
    this.olfactoryFamilyData = new Array<OlfactoryFamilies>();
  }

  getOlfactoryFamilyData() { return this.olfactoryFamilyData; }
}
