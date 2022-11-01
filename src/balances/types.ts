export declare interface Balance {
  address: string;
  updated_at: string;
  next_update_at: string;
  quote_currency: string;
  chain_id: number;
  items: TokenItem[] | PortfolioItem[];
  error: boolean;
  error_message?: string;
  error_code?: number;
}

export declare interface TokenItem extends BalanceItem {
  last_transferred_at: Date;
  native_token: boolean;
  type: string;
  balance: string;
  balance_24h: string;
  quote_rate: number;
  quote_rate_24h: number;
  quote: number;
  quote_24h: number;
  nft_data: any;
}

export declare interface BalanceItem {
  contract_decimals: number;
  contract_name: string;
  contract_ticker_symbol: string;
  contract_address: string;
  supports_erc: string[];
  logo_url: string;
}

export declare interface PortfolioItem extends BalanceItem {
  holdings: Holding[];
}

export declare interface Holding {
  timestamp: Date;
  quote_rate: number;
  open: BalanceQuote;
  high: BalanceQuote;
  low: BalanceQuote;
  close: BalanceQuote;
}

export declare interface BalanceQuote {
  balance: string;
  quote: number;
}
