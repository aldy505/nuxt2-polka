import polka from 'polka';
import helmet from 'helmet';
import { errorHandler } from './errorHandler';

const app = polka({
  onError: errorHandler,
});

app.use(helmet());

app.get('/', (req, res) => {
  const data = JSON.stringify({ msg: 'What\'s up, world?' })
  res.writeHead(200, { 'Content-Type': 'application/json', 'Content-Length': data.length }).end(data);
})

app.get('/error', async (req, res) => {
  return Promise.reject('this is meant to be an error')
})

if (require.main === module) {
  const port = process.env.PORT || 8000;
  app.listen(port, () => {
    console.log(`API server listening on port ${port}`);
  });
}

export default (req, res) => app.handler(req, res)