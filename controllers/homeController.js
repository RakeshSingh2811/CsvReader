const csvtojson = require('csvtojson');
//controller for home 
module.exports.home = async function(req,res){
    return res.render('home',{title:"Csv Parser | Home"})
}
//controller for parsing the csv and converting it to json
module.exports.upload = async function(req,res){
    const csvData = req.files.csv.data.toString('utf8');
    const jsonData = await csvtojson().fromString(csvData);
    console.log(jsonData);
    return res.render('output',{title:"Csv Parser | Output",data:jsonData}); 
}