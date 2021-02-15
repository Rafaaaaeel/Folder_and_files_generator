const fs = require('fs');

const assets = ['css', 'js', 'lib', 'fonts', 'Routes'] //folders for create

//Using a function to create the folders in the array
function makeDir(dir){
    "use strict";

	dir.forEach((item)=>{
        //assets will go a be a sub directory, and inside he goes a create the folders
        //Using sync to rest of the files not be a create before the folders
		fs.mkdirSync(`assets/${item}`, { recursive : true }, (err)=>{
			if(err) throw err; //callback error
            
			console.log('Created', item); //callback success
		});
	});
}

makeDir(assets); //call the function passing the array "assets" content the folders and your names

const files = ['style.css', 'reset.css', 'index.html', 'index.js', 'app.js'];//files for create

//Using for create the files,  the samething "makeDir" bout this time create files
function makeFile(dir){
    "use strict";
    
    dir.forEach((item)=>{
        fs.writeFile(`${item}`, '', (err)=>{
            if(err) throw err; //callback error

            console.log('files created'); //callback success
        });
    });
}

makeFile(files); //call the function passing the array "files"

//Create the variables to use to write your content and passing the way to go

const cssCreate = "reset.css";
const htmlCreate = "index.html";
const jsCreate = "index.js";
const jsAppCreate = "app.js";

//Reset.css value
fs.writeFile(`${cssCreate}`, "*{\n  margin:0%; \n  padding:0%; \n  box-sizing: border-box; \n} \nhtml,body{\n  width: 100%; \n  height:100%; \n}", err =>{
    if(err) throw err; // callback error

    console.log(`File ${cssCreate} created `); // callback succes
});

//index.html value
fs.writeFile(`${htmlCreate}`, `<!DOCTYPE html> \n<html lang="en"> \n<head> \n    <meta charset="UTF-8"> \n    <meta name="viewport" content="width=devicec-width, initial-scale=1.0"> \n    <link rel="stylesheet" href="css/reset.css"> \n    <link rel="stylesheet" href="css/Style.css">\n<title>Document</title> \n</head> \n<body>\n    <script src="js/index.js"></script> \n</body> \n</html>`, err => {
    if(err) throw err;

    console.log(`file ${htmlCreate} created`);
});

//index.js value
fs.writeFile(`${jsCreate}`, `window.onload(function(){\n\n\n})`, err =>{
    if(err) throw err;

    console.log(`file ${jsCreate} Created`);
})


// Saying where the files need to go passing you directorys

fs.rename(`${htmlCreate}` , `assets/${htmlCreate}`, err =>{
    if(err) throw err;
});

fs.rename(`${jsCreate}` , `assets/js/${jsCreate}`, err =>{
    if(err) throw err;
});
fs.rename(`${jsAppCreate}` , `assets/js/${jsAppCreate}`, err =>{
    if(err) throw err;
});

fs.rename(`${cssCreate}` , `assets/css/${cssCreate}`, err =>{
    if(err) throw err;
});

fs.rename(`style.css` , `assets/css/Style.css`, err =>{
    if(err) throw err;
});

