const fs = require('fs')
const assets = ['css', 'js', 'lib', 'fonts']


function makeDir(dir){
	dir.forEach((item)=>{
		fs.mkdirSync(`assets/${item}`, { recursive : true }, (err)=>{
			if(err) throw err

			console.log('Created', item)
		})
	})
}

makeDir(assets)

const files = ['style.css', 'reset.css', 'index.html', 'index.js']

function makeFile(dir){
    dir.forEach((item)=>{
        fs.writeFile(`${item}`, '', (err)=>{
            if(err) throw err

            console.log('files created')
        })
    })
}

makeFile(files)

const cssCreate = "reset.css"
const htmlCreate = "index.html"
const jsCreate = "index.js"

fs.writeFile(`${cssCreate}`, "*{\n  margin:0%; \n  padding:0%; \n  box-sizing: border-box; \n} \nhtml,body{\n  width: 100%; \n  height:100%; \n}", err =>{
    if(err) throw err

    console.log(`File ${cssCreate} created `)
})

fs.writeFile(`${htmlCreate}`, `<!DOCTYPE html> \n<html lang="en"> \n<head> \n    <meta charset="UTF-8"> \n    <meta name="viewport" content="width=devicec-width, initial-scale=1.0"> \n    <link rel="stylesheet" href="css/reset.css"> \n    <link rel="stylesheet" href="css/Style.css">\n<title>Document</title> \n</head> \n<body>\n    <script src="js/index.js"></script> \n</body> \n</html>`, err => {
    if(err) throw err

    console.log(`file ${htmlCreate} created`)
})

fs.writeFile(`${jsCreate}`, `window.onload(function(){\n\n\n})`, err =>{
    if(err) throw err

    console.log(`file ${jsCreate} Created`)
})


fs.rename(`${htmlCreate}` , `assets/${htmlCreate}`, err =>{
    if(err) throw err
})

fs.rename(`${jsCreate}` , `assets/js/${jsCreate}`, err =>{
    if(err) throw err
})

fs.rename(`${cssCreate}` , `assets/css/${cssCreate}`, err =>{
    if(err) throw err
})

fs.rename(`style.css` , `assets/css/Style.css`, err =>{
    if(err) throw err
})


