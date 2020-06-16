import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // * WORKS WITH *ng directives
import { ListasComponent } from './listas/listas.component';



@NgModule({
  declarations: [
    ListasComponent // * COMPONETS ARE PART OF THIS MODULE
  ],
  exports: [
    ListasComponent // * ALLOWS YOU TO USE IT IN OTHER COMPONENTS
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
