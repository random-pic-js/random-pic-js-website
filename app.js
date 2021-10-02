const path = require('path'),
  express = require("express"),
  expressIp = require('express-ip'),
  compression = require("compression"),
  websiteRouter = require('./routes/website.routing'),

  app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(express.json({ limit: '10kb' }));

app.use(compression());
app.use(expressIp().getIpInfoMiddleware);

app.use((req, res, next) =>
{
  req.requestTime = new Date().toISOString();
  next();
});

app.use('/', websiteRouter);
app.use(require("./controllers/error.controller").get404);

module.exports = app;
