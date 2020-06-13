import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TvaComponent } from './tva/tva.component';

export const ROUTES = [{ path: '', component: TvaComponent }];

@NgModule({
	exports: [TvaComponent],
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  declarations: [TvaComponent]
})
export class TvaModule { }
