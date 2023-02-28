import { EntityState } from "@ngrx/entity";
import { StocksState } from "./stocks/types/state";

export interface AppState {
    stocks: StocksState
}
