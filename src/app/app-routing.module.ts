import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { UpsComponent } from './pages/ups/ups.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '**', component: UpsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
