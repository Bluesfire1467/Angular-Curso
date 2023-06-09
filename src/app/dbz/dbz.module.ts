import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './componets/list/list.component';
import { CharacterComponent } from './componets/character/character.component';


@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [MainPageComponent],
  declarations: [MainPageComponent,ListComponent, CharacterComponent],
  providers: [],
})
export class DbzModule { }
