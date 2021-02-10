const path = require('path');
const express = require('express');
const xss = require('xss');
const fs = require('fs');
const fetch = require('node-fetch');
//const debug = require('debug')('express:view')
const FoldersService = require('./formatter-service');

const formatRouter = express.Router()
const jsonParser = express.json()

const serialize = folder => ({
    id: folder.id,
    folder_name: folder.folder_name
})

formatRouter
    .route('/')
    .get((req, res, next) => {

        // const content = 'Some content!!!!'

        const url = 'http://assets.aosmith.com.s3.amazonaws.com/damrootDEV/Original\10001\State_ProLine_Lowboy_Side_Connect_and_Top_T_&_P_Electric_Water_Heater.tif'; // link to file you want to download
        const path = '/Users/eliriner/24hours/formate-images/src/local/images.png' // where to save a file

        fetch(url)
            .then((res) => {

                fs.writeFile(path, res, (err) => {
                    if (err) {
                      console.error(err)
                      return
                    }
                    //file written successfully
                  })
            })
            .catch(next)
        res.status(200).end()


    })


module.exports = formatRouter