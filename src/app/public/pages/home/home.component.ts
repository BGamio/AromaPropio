import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Perfumes} from "../../../AromaPropio/model/perfumes";
import {PerfumeService} from "../../../AromaPropio/services/perfumes.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  perfumes: Perfumes[] = [
    {
      id: 1,
      name: 'Floral Breeze',
      description: 'Un aroma floral con notas suaves y frescas.',
      price: { value: 120, currency: 'S/.' },
      photoUrl: { url: 'https://example.com/floral-breeze.jpg' },
      olfactoryFamilies: { id: 1, name: 'Floral', description: 'yeh', price: { value: 15, currency: 'S/.' } },
      perfumesClassification: { id: 1, name: 'Eau de Parfum', description: 'Alta concentración de esencias', price: { value: 15, currency: 'S/.' } },
      notes: ['Rosa', 'Jazmín', 'Vainilla']
    },
    {
      id: 2,
      name: 'Citrus Splash',
      description: 'Un perfume fresco con toques cítricos vibrantes.',
      price: { value: 95, currency: 'S/.' },
      photoUrl: { url: 'https://example.com/citrus-splash.jpg' },
      olfactoryFamilies: { id: 2, name: 'Cítrico', description: 'yeh', price: { value: 15, currency: 'S/.' } },
      perfumesClassification: { id: 2, name: 'Eau de Toilette', description: 'Ligero y refrescante', price: { value: 15, currency: 'S/.' } },
      notes: ['Limón', 'Bergamota', 'Pomelo']
    },
    {
      id: 3,
      name: 'Woody Elegance',
      description: 'Una fragancia amaderada con notas profundas y cálidas.',
      price: { value: 150, currency: 'S/.' },
      photoUrl: { url: 'https://example.com/woody-elegance.jpg' },
      olfactoryFamilies: { id: 3, name: 'Amaderado', description: 'yeh', price: { value: 15, currency: 'S/.' } },
      perfumesClassification: { id: 3, name: 'Parfum', description: 'Concentración intensa y duradera', price: { value: 15, currency: 'S/.' } },
      notes: ['Sándalo', 'Cedro', 'Ámbar']
    }
  ];

  constructor(private perfumeService: PerfumeService) { }

  ngOnInit(): void {
    this.perfumeService.getPerfumes().subscribe(perfumes => {
      this.perfumes = perfumes;
    });
  }
}
