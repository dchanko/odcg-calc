import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';
import historyApiFallback from 'connect-history-api-fallback';

/* eslint-disable no-console */
const port = 3000;
const app = express();
const root = 'dist';

app.use(compression());
app.use(express.static(root));
app.use(historyApiFallback({
  verbose: false
}));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
