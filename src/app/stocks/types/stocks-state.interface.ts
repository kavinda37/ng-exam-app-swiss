import { EntityState } from "@ngrx/entity";
import { Stock } from "./stock";

export interface StocksState {
    entries: EntityState<Stock>,
    selectedEntry: Stock
}
