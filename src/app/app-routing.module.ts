import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FooterContentComponent} from "./public/components/footer-content/footer-content.component";
import {HomeComponent} from "./public/pages/home/home.component";
import {PerfumeCustomizerComponent} from "./AromaPropio/pages/perfume-customizer/perfume-customizer.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'perfume-customizer', component: PerfumeCustomizerComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
