#!/usr/bin/env node
'use strict';

const program = require('commander')
const p = require('../package.json')
const ngrokServer = require('./actions/ngrok')
const webhook = require('./actions/webhook')

// バージョン情報
program
  .version(p.version, '-v, --version')

// webhookコマンド
// program.command(`webhook`)
//     .description('Change the LINE BOT webhook URL')
//     .option('-t, --token <Access Token>', 'Access Token')
//     .option('-u, --url <Webhook URL>', 'Webhook URL')
//     // .option('-d, --debug', 'display some debugging')
//     .action((name, options, command) => {
//         const params = {
//             token: name.token,
//             url: name.url
//         }
//         return webhook(params);
//     })
//     .action(res => console.log(`\n Webhook URLを「${res.url}」に変更しました。`))

program.command(`http`)
    .description('ngrok tonnneling & Change the LINE BOT webhook URL')
    .argument('<PORT>', 'integer argument')
    .option('-t, --token <Access Token>', 'Access Token')
    .option('-p, --path <PATH>', 'PATH')
    // .description('Change the LINE BOT webhook URL')
    // .option('-t, --token <Access Token>', 'Access Token')
    // .option('-h, --http <HTTP>', 'HTTP')
    // .option('-p, --path <PATH>', 'PATH')
    // .argument('<username>', 'user to login')
    .action(async (port, options, command) => {
        const path = options.path || `/webhook`;
        const params = {
            token: options.token,
            port: port
        }
        const res = await ngrokServer(params);
        const params2 = {
            token: options.token,
            url: res.url + path 
        }
        await webhook(params2);

        console.log(`\n\n Forwarding ${res.url} -> http://localhost:${params.port}`);
        console.log(`Webhook URLを「${params2.url}」に変更しました。\n トンネリングサーバーを起動しました。`);
        console.log(`...`);

    })

program.parse(process.argv)