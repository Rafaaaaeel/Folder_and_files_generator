const fs = require('fs')

const assets = ['css', 'js', 'lib', 'fonts'];


function make(dir){
	dir.forEach((item)=>{
		fs.mkdirSync(`assets/${item}`, { recursive : true }, (err)=>{
			if(err) throw err;

			console.log('Created', item)
		})
	})
}

make(assets)

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

fs.writeFile(`${cssCreate}`, "*{\n margin:0%; \n padding:0%; \n box-sizing: border-box; \n} \n html,body{\n width: 100%; \n height:100%; \n }", err =>{
    if(err) throw err;

    console.log(`File ${cssCreate} created `);
})

fs.writeFile(`${htmlCreate}`, `<!DOCTYPE html> \n <html lang="en"> \n <head> \n <meta charset="UTF-8"> \n <meta name="viewport" content="width=devicec-width, initial-scale=1.0"> \n <title>Document</title> \n </head> \n <body> \n </body> \n </html>`, err => {
    if(err) throw err;

    console.log(`file ${htmlCreate} created`)
})

fs.writeFile(`${jsCreate}`, `window.onload(function(){\n\n\n})`, err =>{
    if(err) throw err;

    console.log(`file ${jsCreate} Created`)
})


fs.rename(`${htmlCreate}` , `project/assets/${htmlCreate}`, err =>{
    if(err) throw err
})

fs.rename(`${jsCreate}` , `project/assets/js/${jsCreate}`, err =>{
    if(err) throw err
})

fs.rename(`${cssCreate}` , `project/assets/css/${cssCreate}`, err =>{
    if(err) throw err
})

fs.rename(`style.css` , `project/assets/css/Style.css`, err =>{
    if(err) throw err
})


