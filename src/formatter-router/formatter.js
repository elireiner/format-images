const path = require('path');
const express = require('express');
//const xss = require('xss');
const fs = require('fs');
const fetch = require('node-fetch');
//const debug = require('debug')('express:view')
//const FoldersService = require('./formatter-service');

const formatRouter = express.Router()
//const jsonParser = express.json()

formatRouter
    .route('/')
    .get((req, res, next) => {

        // const content = 'Some content!!!!'

        const url = 'http://assets.aosmith.com.s3.amazonaws.com/damrootDEV/Original\10001\State_ProLine_Lowboy_Side_Connect_and_Top_T_&_P_Electric_Water_Heater.tif'; // link to file you want to download
        const path = '/Users/eliriner/24hours/formate-images/src/formatter-router/images.png' // where to save a file

        fetch(url)
            .then((res) => {
                fs.writeFile(path, res, (err) => {
                    if (err) {
                        console.error(err)
                    }
                    res.status(200).end()
                })
            })
            .catch(next)
    })


module.exports = formatRouter