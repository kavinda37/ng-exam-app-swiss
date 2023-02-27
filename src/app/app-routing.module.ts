import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/stocks', pathMatch: 'full' },
  // { path: 'stocks', component: StocksComponent },
  { path: 'stocks', loadChildren: () => import('./stocks/stocks.module').then(m => m.StocksModule)},
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
