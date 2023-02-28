import { createAction, props } from '@ngrx/store';
import { Stock } from './stock';

export const loadStocks = createAction(
    '[Stocks] Load'
);

export const updateStocks = createAction(
    '[Stocks] Update',
    props<{ stocks: Stock[] }>(),
);

export const updateStock = createAction(
    '[Stocks] Update one',
    props<{ stock: Stock | undefined }>(),
);

export const selectStock = createAction(
    '[Stocks] Select',
    props<{ stock: Stock }>(),
);

export const loadStockPrice = createAction(
    '[Stocks] Load price',
    props<{ symbol: string }>(),
);
