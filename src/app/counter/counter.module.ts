import { NgModule } from '@angular/core';
import { CounterComponent } from './components/components/countercomponent';

@NgModule({
  declarations: [
    CounterComponent
  ],
  exports: [
    CounterComponent
  ]
})

export class CounterModule {}
