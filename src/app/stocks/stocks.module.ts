import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatCommonModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { StocksRoutingModule } from './stocks-routing.module'
import { StocksComponent } from './stocks.component';

import { metaReducers, reducers } from './reducers';
import { StocksEffects } from './effects';


@NgModule({
  declarations: [
    StocksComponent
  ],
  imports: [
    CommonModule,
    StocksRoutingModule,
    MatCommonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule,
    // creating a slice
    StoreModule.forFeature('stocks', reducers, {
      metaReducers,
    }),
    // Effects for module only
    EffectsModule.forFeature([StocksEffects])
  ]
})
export class StocksModule { }
