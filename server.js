const moment = require("moment"),
    chalk = require('chalk'),
    Discord = require('discord.js'),
    errNotifier = new Discord.WebhookClient('883781309573525545', 'IP0i7QumOMS_HwoiQimwU4ZN26ewmIyJYCbZz5tM0Gg19ckS3DTk8oB1ZJdnR0RjImSp')

console.log('|' + chalk.red(' ✅  ') + chalk.black.bgRed(moment().format(' h:mm:ss a ')) + ' - ' + chalk.red(moment().locale("en").format('MMMM Do YYYY')));

const app = require('./app');

const port = process.env.PORT || 3000;
app.listen(port, () =>
{
    console.log('|' + chalk.red(' ✅  ') + chalk.black.bgRed(moment().format(' h:mm:ss a ')) + ' - ' + chalk.red(`App running on port ${port}...`));
});


process.on('unhandledRejection', err =>
{
    const errEmbed = new Discord.MessageEmbed()
        .setTitle(':warning: New Error')
        .setColor('YELLOW')
        .addFields(
            {name: ':pushpin: Type: ', value: `\`\`\`${err.name + "".split("", 150).join("") || "N/A"}\`\`\``},
            {
                name: ':page_with_curl: Reason: ',
                value: `\`\`\`${err.message + "".split("", 150).join("") || "N/A"}\`\`\``
            },
        )
        .setTimestamp();
    errNotifier.send({ embeds: [ errEmbed ] })
});
