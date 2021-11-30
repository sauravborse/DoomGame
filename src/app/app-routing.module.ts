import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { TeammembersComponent } from './teammembers/teammembers.component';

const routes: Routes = [
  {path:'team', component:TeammembersComponent},
  {path:'main', component:MainpageComponent},
  {path:'', component:MainpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
