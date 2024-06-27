import { RouterModule, Routes } from '@angular/router';
import { WeddingpageComponent } from './weddingpage/weddingpage.component';
import { LovestoryComponent } from './lovestory/lovestory.component';
import { NgModule } from '@angular/core';
import { GroomlovestoryComponent } from './groomlovestory/groomlovestory.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: WeddingpageComponent },
  { path: 'lovestory', component: LovestoryComponent },
  { path: 'groomstory', component: GroomlovestoryComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
