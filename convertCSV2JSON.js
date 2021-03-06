const csv=require('csvtojson');
const path = require('path');
const fs = require('fs');

/**
 * 
 * @param {*} csvFilePath 
 */
const convertCSVToJSON = (csvFilePath = './customer-data.csv') => {
    let jsonArray = [];

    csv().fromFile(csvFilePath)
     .on('json',(jsonObj) => {
        jsonArray.push(jsonObj);
     })
     .on('done',(error) => {
        fs.writeFileSync(path.join(__dirname, "./", 'customer-data.json'), JSON.stringify(jsonArray,null,2));
    })

}

convertCSVToJSON(process.argv[2]);

