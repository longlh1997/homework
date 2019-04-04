var fs = require('fs');
function wait(url)
{
    console.log('1');
    return new Promise((resolve,reject) =>{
        fs.readFile(url,'utf8',(err,data)=>
        {
            if(err) reject(err);
            else resolve(data);
        });
    })
}
function waittwo(url)
{
    return new Promise((resolve,reject) =>{
        fs.appendFile(url,"\n 123123",(err)=>{
            if(err) reject(err);
            else resolve("Save!");
        });
    })
}

waittwo('testrw.txt').then((val)=>{
    console.log(val);
    return waittwo('Untitled-1');
}).then((val)=>{
    console.log(val);
})

wait('./testrw.txt').then((value)=>{
    console.log(value);
})
