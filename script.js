'use strict';
const fs = require('fs');
const readline = require("readline");
const asciiMap = require('./ascii-map');
const WIDTH = 8;
startProgram();

function startProgram() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Enter the phrase to be converted to ASCII art: ', (answer) => {
        convertToAsciiArt(answer.toUpperCase());
        rl.close();
    });
}

function convertToAsciiArt(input) {
    let asciiArtBanner = [];
    readAsciiFile()
        .then(response => {
            asciiArtBanner = response;

            for (let j = 0; j < asciiArtBanner.length; j++) {
                let asciiArtText = '';

                for (let i = 0; i < input.length; i++) {
                    let asciiIndex = input.charCodeAt(i).toString();
                    let asciiArtSymbolIndex = 0;
                    if (asciiMap.hasOwnProperty(asciiIndex)) {
                        asciiArtSymbolIndex = asciiMap[asciiIndex];
                    } else {
                        asciiArtSymbolIndex = 36;
                    }
                    asciiArtText += asciiArtBanner[j].substr(WIDTH * asciiArtSymbolIndex, WIDTH);
                }
                console.log(asciiArtText);
            }
        })
        .catch(err => {
            console.error(err);
        })
}

async function readAsciiFile() {
    let fileLineArr = [];

    const readInterface = readline.createInterface({
        input: fs.createReadStream('./banner.txt'),
        crlfDelay: Infinity
    });

    for await (let line of readInterface) {
        fileLineArr.push(line);
    }
    readInterface.close();
    return fileLineArr;
}
