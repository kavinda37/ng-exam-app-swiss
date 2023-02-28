import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { select, Store } from '@ngrx/store';
import { map, Observable, startWith, switchMap } from 'rxjs';
import { loadStocks, selectStock } from './store/actions';
import { selecStockById, selectAllStockEntries, selectSelectedStock } from './store/selectors';
import { Stock } from './types/stock';
import { AppState } from "../app-state.interface";

@Component({
  selector: 'stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.scss'],
})
export class StocksComponent{
  autocomplete = new FormControl();
  filteredOptions$: Observable<Stock[]>;
  objects: Stock[] = []
  stock: Stock | undefined;

  stock$: Observable<Stock | undefined>;

  constructor(readonly client: HttpClient, readonly store: Store<AppState>) {

    // removed subscription and used stream.
    this.filteredOptions$ = this.autocomplete.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
     )

     this.stock$ = this.store.pipe(
      select(selectSelectedStock),
      switchMap(s => this.store.select(selecStockById(s.symbol)))
    )

    this.store.pipe(
      select(selectAllStockEntries))
      .subscribe(arr => {
        this.objects = arr;
      });

    this.store.dispatch(loadStocks());
  }

  private _filter(value: string): Stock[] {
    const filterValue = value?.toLowerCase();

    if (!filterValue || filterValue.length < 2) {
      return [];
    }

    return this.objects.filter(objects => objects.displaySymbol.toLowerCase().includes(filterValue));
  }

  public callApi() {
    this.store.dispatch(loadStocks());
  }

  public selectSymbol(item: MatAutocompleteSelectedEvent) {
    let found = this.objects.find(element => element.symbol == item.option.value);

    if (!found) {
      return;
    }

    this.store.dispatch(selectStock({ stock: found }));
    this.autocomplete.reset();
  }
}
