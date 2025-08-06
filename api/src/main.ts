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

app.listen(process.env.PORT ?? 3333, () =>
  console.log('API ✅ http://localhost:3333'),
);
