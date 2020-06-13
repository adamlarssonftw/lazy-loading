import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TreComponent } from './tre/tre.component';

export const ROUTES = [{ path: '', component: TreComponent }];

@NgModule({
	exports: [TreComponent],
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  declarations: [TreComponent]
})
export class TreModule { }
