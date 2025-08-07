import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

interface SearchResponse {
  stocks: Stock[];
}
export interface Stock {
  stock: string;
  name: string;
}

export interface QuoteResponse {
  results: Array<{
    symbol: string;
    regularMarketPrice: number;

    financialData: {
      returnOnEquity: number;   // ROE
      returnOnAssets: number;   // ROA
      totalDebt: number;
      totalCash: number;
      ebitda: number;
      currentRatio: number;     // Liquidez Corrente
    };

    defaultKeyStatistics: {
      dividendYield: number;
      trailingEps: number;      // LPA
      bookValue: number;        // VPA
    };
  }>;
}

@Injectable({ providedIn: 'root' })
export class BrapiService {
  /** injecção simplificada usando Signals API */
  private http = inject(HttpClient);

  /** ---------------- Autocomplete ---------------- */
  searchTickers(query: string) {
    // endpoint público da Brapi
    return firstValueFrom(
      this.http.get<SearchResponse>(`/api/stocks?search=${query}`)
    ).then(r => r?.stocks)
  }

  /** ---------------- Dados fundamentalistas + cotação ---------------- */
  quote(ticker: string) {
    return firstValueFrom(
      this.http.get<QuoteResponse>(`/api/quote/${ticker}`)
    );
  }
}
