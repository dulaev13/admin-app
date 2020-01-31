import { DefaultComponent } from './shared/views/default/default.component';
import { MainComponent } from './shared/layouts/main/main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


const routes: Routes = [
  {
    path:'', component: MainComponent, children: [
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: '', component: DefaultComponent }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
