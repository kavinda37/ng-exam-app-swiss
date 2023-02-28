import { EntityState } from "@ngrx/entity";
import { StocksState } from "./stocks/state";

export interface AppState {
    stocks: StocksState
}
