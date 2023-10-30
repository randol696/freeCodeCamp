function tokebab(str){

    const fs = require('fs') //for the file creation

    let output =str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map(x => x.toLowerCase()).join('-');
    output+=".js"; //adding the extention 
    let data = "/* This Code has been create by: Randol */" //the header of the code in javascript file
    fs.writeFile(output, data, (err) => {
        if (err) throw err;
       });

    return "the file "+ output+" has been created";

}
console.log(tokebab(process.argv[2]));