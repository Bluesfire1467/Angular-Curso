import { NgModule } from '@angular/core';

import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './componets/list/list.component';
import { CharacterComponent } from './componets/character/character.component';

@NgModule({
  imports: [],
  exports: [MainPageComponent],
  declarations: [MainPageComponent, ListComponent, CharacterComponent],
  providers: [],
})
export class DbzModule { }
