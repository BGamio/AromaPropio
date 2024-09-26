import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-footer-content',
  templateUrl: './footer-content.component.html',
  styleUrl: './footer-content.component.css'
})
export class FooterContentComponent {

  constructor(private router: Router) {
  }

  navigateToFAQ(){
    this.router.navigate(['help-center']).then();
  }
}
