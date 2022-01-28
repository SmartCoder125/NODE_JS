// // IIFE


// (function(name) {
//     console.log(name) // accessed
//     var age = 10;     // not accesed!
// })('JAY')

// console.log(age);



// //  IIFE IN NODE JS

// (function(exports, require, module, __dirname, __filename) {

//     code to be executed here

// })()



// // CLI-COLOR MODULE VIA INTERNET AND DOWNLOAD NPM MODULE


// const color = require('cli-color');

// console.log(color.red('Hello Node Js'));

// console.log(color.yellow("NODE JS-"));

// console.log(color.green("NODEMON"));



// LOCAL MODULE


// // const register = require('./auth.js')

// register('codersGyan')

// const login = require('./auth.js')


// const auth  = require('./auth.js')

// auth.register('CODERSGYAN')

// auth.login('JAY WAGHODE')




// // CORE MODULE

// **PATH MODULE **
 
// // const { FILE } = require('dns')

// const path =  require('path')


// // dirname 

// // console.log(__filename)

// console.log('Folder Name : ', path.dirname(__filename))


// // filename

// console.log('File Name : ', path.basename(__filename))

// // Extension

// console.log("Ext Name : ", path.extname(__filename))


// // Parse

// console.log('Parse : ', path.parse(__filename))


// // join

// console.log('join : ', path.join(__dirname,'order','app.js'))



// **FS MODULE**

// const { error } = require('console')
// const fs =  require('fs')
// const path = require('path')

// Make a dir

// fs.mkdir(path.join(__dirname,'/Test'), (err)=> {

//     if(err) {
//         console.log('Something Went Wrong...')
//         console.log(err)
//         return
//     } 
//     console.log('Folder Created!!!')

// })


// create a file

// fs.writeFile(path.join(__dirname, 'Test','Test.txt'), 'Hello,Node HOW ARE YOU!!!\n', (err)=> {
//     if(err) {
//        throw err 
//     }
    
//     fs.appendFile(path.join(__dirname, 'Test','Test.txt'), 'More Data\n', (err)=> {
//         if(err) {
//             throw err
//         }
//         console.log('Data Added!!!')
//     })

//     console.log('File Created!!!')
// })


// Read a File


// fs.readFile(path.join(__dirname,'Test','Test.txt'),'utf-8', (err,data)=> {
//         if(err) {
//             throw err
//         }

//         // const content = Buffer.from(data)

//         // console.log(content.toString())

//         // console.log(data.toString())

//         console.log(data)
// })



// // **OS MODULE**

// const os = require('os')

// // Type

// console.log('Os type : ',os.type())

// // Platform

// console.log('Os Platform : ',os.platform())

// // CPU Arch.

// console.log('CPU Arch : ', os.arch())

// // CPU 

// // console.log('Cpus details: ',os.cpus())

// // Memory

// console.log('Free Memory : ',os.freemem())

// // TOTAL Memory

// console.log('Total Memory : ',os.totalmem())

// // UpTime
 
// console.log('UPTime : ',os.uptime()) // Server Monitaring.



// // **Events Module**

// const Emitter =  require('events')
// const { connect } = require('http2')
// const { emit } = require('process')
// const { clearScreenDown } = require('readline')

// // const myEmitter = new Emitter()

// // myEmitter.on('SomeName', (data)=> {
// //     console.log(data)
// // })

// // myEmitter.emit('SomeName', {
// //     name : 'Rakesh'
// // })

// class Auth extends Emitter {
//     register(userName) {
//         console.log('Registerd Sucessfully!!!')
//         this.emit('registered', userName)
//     }
// }

// const auth = new Auth()

// // Listen
// // Verify Email

// auth.on('registered',(data) =>{
//     console.log(`Verify Email to ${data}`)
// })

// // Welcome Email 

// auth.on('registered',(data)=> {
//     console.log(`Sending Email to ${data}`)
// })

// // reset password

// auth.on('registered',(data)=> {
//     console.log(`reser Password to ${data}`)
// })

// auth.register('CodersGyan...')



// **HTTP MODULE**

// ON index.JS






















