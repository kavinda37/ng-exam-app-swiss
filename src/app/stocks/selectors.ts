import { createSelector, DefaultProjectorFn, MemoizedSelector } from "@ngrx/store";
import { stockEntryAdapter } from "./reducers";
import { AppState } from "../app-state.interface";
import { StocksState } from "./state";
import { Stock } from "./stock";

type StockEntrySelector =
    MemoizedSelector<
        AppState,
        Stock | undefined,
        DefaultProjectorFn<Stock | undefined>
    >;

const { selectEntities, selectAll } = stockEntryAdapter.getSelectors();    

export const selectStocksState = (state: AppState) => state.stocks.entries;
export const selectSelectedStock = (state: AppState) => state.stocks.selectedEntry;

export const selectAllStockEntries = createSelector(selectStocksState, selectAll);
export const selectAllStockEntities = createSelector(selectStocksState, selectEntities);

export const selecStockById = (id: string): StockEntrySelector => createSelector(
    selectAllStockEntities,
    entities => entities[id],
);