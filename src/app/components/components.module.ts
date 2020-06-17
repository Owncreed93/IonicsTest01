import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // * WORKS WITH *ng directives
import { ListasComponent } from './listas/listas.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [
    ListasComponent // * COMPONETS ARE PART OF THIS MODULE
  ],
  exports: [
    ListasComponent // * ALLOWS YOU TO USE IT IN OTHER COMPONENTS
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ]
})
export class ComponentsModule { }
