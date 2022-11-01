import { Base } from "../base";
import { Balance } from "./types";

export class Balances extends Base {
  getTokenBalances(chainId: number, address: string): Promise<Balance> {
    return this.request(`/${chainId}/address/${address}/balances_v2`);
  }

  getHistoricalPortfolio(chainId: number, address: string): Promise<Balance> {
    return this.request(`/${chainId}/address/${address}/portfolio_v2`);
  }
}
