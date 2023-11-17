 const os = require('os')
//  console.log(os.userInfo(),'os')


const path = require('path')
const pathname = path.format({
    dir: '/about/user/dir',
    base: 'file.html',
  });
//   console.log(pathname ,'pathname ')
  const isAbsolute = path.isAbsolute('/')
//   console.log(isAbsolute ,'isAbsolute ')


const file = require('fs')
// const fileProperty = file.readFile('file.txt','utf8',(err,data)=>{
//     console.log(data,'err')
// })

// const readFileSync = file.readFileSync('file.txt')
// console.log(readFileSync.toString(),'readFileSync want to stop buffer then used the to string()')
// console.log('asynchronous non-blocking i/o model , callback take acton after synchronous function has worked ')

// const writefile = file.writeFile('filewrite.txt','i am from writefile',()=>{
//     console.log('now i am going to learn file module in nodejs ')
// })

 writeFileSync = file.writeFileSync('file1.txt','awesome properly writefilesync') 
 console.log(writeFileSync,'writeFileSync')