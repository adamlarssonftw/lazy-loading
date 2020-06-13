import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EttModule } from '../ett/ett.module';
import { TvaModule } from '../tva/tva.module';
import { TreModule } from '../tre/tre.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const appRoutes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'ett', loadChildren: '../ett/ett.module#EttModule' },
  { path: 'tva', loadChildren: '../tva/tva.module#TvaModule' },
  { path: 'tre', loadChildren: '../tre/tre.module#TreModule' },
];

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    RouterModule.forRoot(appRoutes), // <-- debugging purposes only
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
