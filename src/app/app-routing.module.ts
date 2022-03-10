import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: 'search', component:SearchComponent },
  { path: 'shows/:id', component:DetailsComponent },
  { path: 'shows/:id/cast', component:DetailsComponent },
  { path: '', redirectTo:'search', pathMatch:'full' },
  { path: '**', redirectTo: 'search', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
