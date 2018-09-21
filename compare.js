const compareImages = require("resemblejs/compareImages");
const fs = require("mz/fs");

module.exports = async (screenA, screenB) => {
    const options = {
        output: {
            errorColor: {
                red: 255,
                green: 0,
                blue: 255
            },
            errorType: "movement",
            transparency: 0.3,
            largeImageThreshold: 1200,
            useCrossOrigin: false,
            outputDiff: true
        },
        scaleToSameSize: true,
        ignore: "antialiasing"
    };

    // The parameters can be Node Buffers
    // data is the same as usual with an additional getBuffer() function
    const data = await compareImages(
        await fs.readFile(`./screenshots/${screenA}.png`),
        await fs.readFile(`./screenshots/${screenB}.png`),
        options
    );

    const fileName = `comparison-${screenA}-${screenB}-*${ (new Date()).getTime()}.png`;

    await fs.writeFile('./' + fileName, data.getBuffer());

    data.screenA = screenA;
    data.screenB = screenB;
    data.fileName = fileName;

    return data;
}