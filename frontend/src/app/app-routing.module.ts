import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent, ProductCrudComponent } from './views'
import { ProductCreateComponent } from './components'

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "products", component: ProductCrudComponent },
  { path: "products/create", component: ProductCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
