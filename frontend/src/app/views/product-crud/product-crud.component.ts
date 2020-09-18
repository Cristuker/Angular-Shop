import { Component, OnInit } from '@angular/core';
import { Router  } from '@angular/router'

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

   // O router é instanciado automaticamente quando o componente é declarado via DI.
  constructor(private router: Router) { 
  }

  ngOnInit(): void {
  }

  navigateToProductCreate(): void {
    this.router.navigate(['/products/create'])
  }

}
