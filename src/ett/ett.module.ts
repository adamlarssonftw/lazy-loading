import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EttComponent } from './ett/ett.component';

export const ROUTES = [{ path: '', component: EttComponent }];

@NgModule({
  exports: [EttComponent],
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  declarations: [EttComponent]
})
export class EttModule { }
