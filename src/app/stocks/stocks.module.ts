import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatCommonModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { StocksRoutingModule } from './stocks-routing.module'
import { StocksComponent } from './stocks.component';

import { metaReducers, reducers } from './store/reducers';
import { StocksEffects } from './store/effects';

import { SharedModule } from '../_shared/shared.module'


@NgModule({
  declarations: [
    StocksComponent
  ],
  imports: [
    CommonModule,
    StocksRoutingModule,
    MatCommonModule,
    MatIconModule,
    MatListModule,
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
    EffectsModule.forFeature([StocksEffects]),
    SharedModule
  ]
})
export class StocksModule { }
