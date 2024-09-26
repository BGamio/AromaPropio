import { Injectable } from '@angular/core';
import {PerfumesClassification} from "../model/perfumes-classification";

@Injectable({
  providedIn: 'root'
})
export class PerfumesClassificationService {

  perfumeClassificationData: Array<PerfumesClassification>;

  constructor() {
    this.perfumeClassificationData = new Array<PerfumesClassification>();
  }

  getPerfumesClassificationData() { return this.perfumeClassificationData; }
}
