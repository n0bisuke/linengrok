const ngrok = require('ngrok');

const main = async (params) => {
    try {

        const url = await ngrok.connect(params.port);
        // console.log(url, params.port)
        return {
            url: url,
            port: params.port,
            token: params.token
        }

    } catch (error) {
        console.log(error);
    }

}

module.exports = main;