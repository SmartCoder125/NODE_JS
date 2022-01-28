// HELLO WORLD PROGRAM

// console.log("Hello NodeJs & #JAVASCRIPT");


// **HTTP MODULE**


const http = require('http')

const fs =require('fs')

const path = require('path')


const app = http.createServer((req,res)=> {
    // res.end('<h1>Hello Node Js</h1>')

    // console.log(req.url)

    res.writeHead(200, {
        'Content-Type' : 'text/html'
    })

    // if(req.url === '/') {
    //     fs.readFile(path.join(__dirname, 'public' ,'index.html'), (err,content)=> {
    //         if(err) {
    //             throw err
    //         }
    //         res.end(content)
    //     })

    // }
    // else if(req.url === '/about') {
    //     fs.readFile(path.join(__dirname,'public','about.html'), (err,content)=> {
    //         if(err) {
    //             throw err
    //         }
    //         res.end(content)
    //     })
    // }

    let filePath  = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url) //. html

    let contentType = 'text/html'

    let ext = path.extname(filePath)
    if(!ext) {
        filePath += '.html' 
    }


    switch(ext) {
        case '.css' :
            contentType = 'text/css'
            break

        case '.js' : 
        contentType = 'text/js'
        break

        default:
            contentType : 'text/html'
        
    }

    fs.readFile(filePath, (err,content)=> {

       if(err) {
           fs.readFile(path.join(__dirname,'public','error.html'),(err, data)=> {
            if(err) { 
            res.writeHead(500)
            res.end('Error!!!')
            } else {
                res.writeHead(404, {
                    'Content-Type' : contentType
                })
                res.end(data)
            }
           
           })
       } 

       else {
           res.writeHead(200, {
               'Content-Type' : contentType
           })
        res.end(content)   
       }


    //     if(err) {
    //         res.writeHead(500)
    //         res.end('Error!!!')
    //     }

    })

})

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=> {
    console.log(`Listening on port ${PORT}`)
})

