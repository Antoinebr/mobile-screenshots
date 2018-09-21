const Nightmare = require('nightmare');

const useragent = `Mozilla/5.0 (Linux; Android 8.0; Pixel 2 Build/OPD3.170816.012) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.92 Mobile Safari/537.36`;


module.exports = async function createScrenshot(url) {

    try {

        const nightmare = new Nightmare({
            show: false,
            frame: false,
            maxHeight: 16384,
            maxWidth: 16384,
            width: 411,
            height: null,
        });

        await nightmare.useragent(useragent);

        await nightmare.goto(url);

        await nightmare.wait(8000);

        const dimensions = await nightmare.evaluate(() => {

            const body = document.querySelector('body');

            return {
                width: body.scrollWidth,
                height: body.scrollHeight
            }

        })

        const imgFileName = `${ url.replace(/\//g,"-").replace(':','_') }-*${ (new Date()).getTime() }`;

        await nightmare.viewport(dimensions.width, dimensions.height)
            .wait(1000)
            .screenshot(`./screenshots/${imgFileName}.png`);

        await nightmare.end();

        return {
            msg: 'OK',
            url,
            filename : `screen-${imgFileName}.png`,
        };


    } catch (err) {
        throw new Error(err)
    }

}