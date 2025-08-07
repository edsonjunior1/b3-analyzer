import 'dotenv/config';
import express from 'express';
import axios from 'axios';

const app = express();
const { BRAPI_TOKEN } = process.env;
const BRAPI_URL = 'https://brapi.dev/api';

app.get('/quote/:ticker', async (req, res) => {
  try {
    const url = `${BRAPI_URL}/quote/${req.params.ticker}?modules=financialData,defaultKeyStatistics,financialDataHistory,defaultKeyStatisticsHistory,dividends`;
    const { data } = await axios.get(url, {
      headers: { Authorization: `Bearer ${BRAPI_TOKEN}` },
    });
    res.json(data);
  } catch (error: any) {
    res.status(500).json({ error: true, message: error.message });
  }
});

app.get('/stocks', async (req, res) => {
  try {
    // ?search=PETR
    const search = String(req.query.search ?? '').toUpperCase();
    if (!search || search.length < 2) {
      return res.status(400).json({ error: true, message: 'search param required' });
    }

    const url = `${BRAPI_URL}/quote/list?search=${encodeURIComponent(search)}`;
    const { data } = await axios.get(url, {
      headers: { Authorization: `Bearer ${BRAPI_TOKEN}` },
    });

    /** A API já devolve um array [{ stock, name }] */
    res.json(data);
    console.log(data);

  } catch (err: any) {
    res.status(500).json({ error: true, message: err.message });
  }
});

app.listen(process.env.PORT ?? 3333, () =>
  console.log('API ✅ http://localhost:3333'),
);
