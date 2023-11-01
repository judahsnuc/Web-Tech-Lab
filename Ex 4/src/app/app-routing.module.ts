import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewScreenComponent } from './new-screen/new-screen.component';

const routes: Routes = [
  // ... other routes ...
  { path: 'new-screen', component: NewScreenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
