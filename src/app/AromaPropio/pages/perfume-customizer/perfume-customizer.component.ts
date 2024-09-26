import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {PerfumesClassification} from "../../model/perfumes-classification";
import {Price} from "../../model/perfumes";
import {OlfactoryFamilies} from "../../model/olfactory-families";
import {join} from "@angular/compiler-cli";

@Component({
  selector: 'app-perfume-customizer',
  templateUrl: './perfume-customizer.component.html',
  styleUrls: ['./perfume-customizer.component.css']
})
export class PerfumeCustomizerComponent implements OnInit {
  perfumeForm: FormGroup;

  // Variables para mostrar en la plantilla
  selectedClassification: string = 'No seleccionada';
  selectedFamily: string = 'No seleccionada';
  selectedScents: string = 'Ninguno seleccionado';

  perfumeClassifications = [
    { value: "eauDeCologne", label: "Eau de Cologne", price: 50 },
    { value: "eauDeToilette", label: "Eau de Toilette", price: 70 },
    { value: "eauDeParfum", label: "Eau de Parfum", price: 90 },
    { value: "parfum", label: "Parfum", price: 120 },
  ];

  olfactoryFamilies = [
    { value: "floral", label: "Floral", description: "Aromas de flores como rosa, jazmín, etc.", price: 20 },
    { value: "citrico", label: "Cítrico", description: "Notas frescas de limón, naranja, bergamota, etc.", price: 15 },
    { value: "amaderado", label: "Amaderado", description: "Aromas cálidos de madera como sándalo, cedro, etc.", price: 25 },
    { value: "oriental", label: "Oriental", description: "Notas especiadas y dulces como vainilla, ámbar, etc.", price: 30 },
  ];

  scents = [
    { value: "rosa", label: "Rosa", icon: "flower", price: 5 },
    { value: "limon", label: "Limón", icon: "lemon", price: 3 },
    { value: "sandalo", label: "Sándalo", icon: "tree", price: 7 },
    { value: "vainilla", label: "Vainilla", icon: "coffee", price: 6 },
    { value: "lavanda", label: "Lavanda", icon: "flower", price: 4 },
    { value: "bergamota", label: "Bergamota", icon: "lemon", price: 5 },
    { value: "jazmin", label: "Jazmín", icon: "flower", price: 6 },
    { value: "ambar", label: "Ámbar", icon: "candy", price: 8 },
  ];

  constructor(private fb: FormBuilder) {
    this.perfumeForm = this.fb.group({
      classification: ['', Validators.required],
      family: ['', Validators.required],
      scents: [[], Validators.required]  // Aquí es importante que sea un array vacío []
    });
  }

  ngOnInit() {
    // Suscribirnos a los cambios en el formulario
    this.perfumeForm.valueChanges.subscribe(values => {
      this.updateSelections();
    });

    // Inicializar los valores seleccionados
    this.updateSelections();
  }

  toggleScent(scent: string): void {
    const currentScents = this.perfumeForm.get('scents')?.value as string[];
    const index = currentScents.indexOf(scent);
    if (index > -1) {
      currentScents.splice(index, 1);
    } else {
      currentScents.push(scent);
    }
    this.perfumeForm.patchValue({ scents: currentScents });
  }

  updateSelections() {
    const classificationControl = this.perfumeForm.get('classification');
    const familyControl = this.perfumeForm.get('family');
    const scentsControl = this.perfumeForm.get('scents');

    // Asegurar que los valores existen
    const classificationValue = classificationControl ? classificationControl.value : null;
    const familyValue = familyControl ? familyControl.value : null;
    const scentsValue = scentsControl ? (scentsControl.value || []) : [];

    // Manejar las selecciones
    this.selectedClassification = this.perfumeClassifications.find(cls => cls.value === classificationValue)?.label || 'No seleccionada';
    this.selectedFamily = this.olfactoryFamilies.find(fam => fam.value === familyValue)?.label || 'No seleccionada';
    this.selectedScents = scentsValue.length > 0
      ? scentsValue.map((scentValue: string) => this.scents.find(scent => scent.value === scentValue)?.label || 'Desconocido').join(', ')
      : 'Ninguno seleccionado';
  }

  getTotalPrice(): number {
    let total = 0;
    const values = this.perfumeForm.value;

    if (values.classification) {
      total += this.perfumeClassifications.find(c => c.value === values.classification)?.price || 0;
    }

    if (values.family) {
      total += this.olfactoryFamilies.find(f => f.value === values.family)?.price || 0;
    }

    if (values.scents) {
      values.scents.forEach((scent: string) => {
        total += this.scents.find(s => s.value === scent)?.price || 0;
      });
    }

    return total;
  }

  onSubmit(): void {
    console.log('Form values:', this.perfumeForm.value);
    console.log('Total price:', this.getTotalPrice());
  }

  onPay(): void {
    if (this.perfumeForm.valid) {
      console.log('Processing payment for:', this.getTotalPrice());
    } else {
      alert('Please complete all fields before paying.');
    }
  }

  trackByFn(index: number, item: any): any {
    return item.value;
  }
}
