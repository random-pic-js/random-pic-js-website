const moment = require("moment"),
    chalk = require('chalk'),
    Discord = require('discord.js');

console.log('|' + chalk.red(' ✅  ') + chalk.black.bgRed(moment().format(' h:mm:ss a ')) + ' - ' + chalk.red(moment().locale("en").format('MMMM Do YYYY')));

const app = require('./app');

const port = process.env.PORT || 3000;
app.listen(port, () =>
{
    console.log('|' + chalk.red(' ✅  ') + chalk.black.bgRed(moment().format(' h:mm:ss a ')) + ' - ' + chalk.red(`App running on port ${port}...`));
});


process.on('unhandledRejection', err =>
{
    console.log(err)
});
