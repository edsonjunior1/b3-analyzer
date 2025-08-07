import { Component, inject, signal, computed } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, switchMap, tap, of, map, from } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import {
  BrapiService,
  Stock,
  QuoteResponse,
} from '@b3-analyzer/core-data-access';
import { grahamNumber, debtNetEbitda } from '@b3-analyzer/core-util-finance';

@Component({
  selector: 'lib-features-analyser',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatCardModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './features-analyser.html',
  styleUrls: ['./features-analyser.scss'],
})
export class FeaturesAnalyser {
  private _api = inject(BrapiService);

  /* ---------------- controls & signals ---------------- */
  tickerCtrl = new FormControl('', { nonNullable: true });

  suggestions = signal<Stock[]>([]);
  quote = signal<QuoteResponse | null>(null);
  loading = signal(false);

  async search() {
    const q = this.tickerCtrl.value.trim();
    if (q.length < 2) {             // pequeno guard-clause
      this.suggestions.set([]);
      return;
    }
    this.loading.set(true);
    try {
      this.suggestions.set(await this._api.searchTickers(q));
    } finally {
      this.loading.set(false);
    }
  }

  async load(ticker: string) {
    if (!ticker) return;
    this.loading.set(true);
    try {
      this.quote.set(await this._api.quote(ticker));
    } finally {
      this.loading.set(false);
    }
  }

  /* ---------------- derived metrics ---------------- */
  private latest = computed(() => this.quote()?.results[0]);

  roe = computed(() => this.latest()?.financialData.returnOnEquity ?? NaN);
  dy = computed(() => this.latest()?.defaultKeyStatistics.dividendYield ?? NaN);
  graham = computed(() =>
    grahamNumber(
      this.latest()?.defaultKeyStatistics.trailingEps ?? 0,
      this.latest()?.defaultKeyStatistics.bookValue ?? 0
    )
  );
  dlEbitda = computed(() =>
    debtNetEbitda(
      this.latest()?.financialData.totalDebt ?? 0,
      this.latest()?.financialData.totalCash ?? 0,
      this.latest()?.financialData.ebitda ?? 0
    )
  );
}
