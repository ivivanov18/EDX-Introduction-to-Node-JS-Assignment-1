const csv=require('csvtojson');
const path = require('path');
const fs = require('fs');

const convertCSVToJSON = (csvFilePath = './customer-data.csv') => {
    let jsonArray = [];

    csv().fromFile(csvFilePath)
     .on('json',(jsonObj) => {
         counter ++;
        jsonArray.push(jsonObj);
     })
     .on('done',(error) => {
        fs.writeFileSync(path.join(__dirname, "./", 'customer-data.json'), JSON.stringify(jsonArray,null,2));
    })

}

convertCSVToJSON(process.argv[2]);
console.log(process.argv[2]);

