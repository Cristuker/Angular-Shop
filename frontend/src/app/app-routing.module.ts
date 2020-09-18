import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent,ProductCrudComponent } from './views'

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "products", component: ProductCrudComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
