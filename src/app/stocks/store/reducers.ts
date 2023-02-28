import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { ActionReducerMap, createReducer, MetaReducer, on } from "@ngrx/store";
import { selectStock, updateStock, updateStocks } from "./actions";
import { StocksState } from "../types/state";
import { Stock } from "../types/stock";


export const stockEntryAdapter: EntityAdapter<Stock> = createEntityAdapter<Stock>({
    sortComparer: (a, b) => a.displaySymbol.localeCompare(b.displaySymbol)
});

export const estockEntryInitialState: EntityState<Stock> = stockEntryAdapter.getInitialState({
    ids: [],
    entities: {}
});

const stockEntriesReducer = createReducer<EntityState<Stock>>(
    estockEntryInitialState,
    on(updateStocks, (state:EntityState<Stock>, { stocks }) =>
        stockEntryAdapter.setAll(stocks, state),
    ),
    on(updateStock, (state: EntityState<Stock>, { stock }) => stock ? stockEntryAdapter.upsertOne(stock, state) : state),
);

const selectStockEntriesReducer = createReducer<Stock>(
    new Stock(),
    on(selectStock, (state: Stock, { stock }) => stock ? stock : state),
);

export const reducers: ActionReducerMap<StocksState> = {
    entries: stockEntriesReducer,
    selectedEntry: selectStockEntriesReducer,
};

export const metaReducers: MetaReducer<StocksState>[] = [];
