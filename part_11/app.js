// let h1 = document.querySelector("h1");

// setTimeout(()=>{
// h1.style.color = "red";
// },2000)

// function savetoDb(data)
// {
//     return new Promise((resolve , reject )=>{
//         let internetSpeed  = Math.floor(Math.random()*10)+1;
//         if(internetSpeed>4)
//         {
//             resolve("success data was saved")
//         }
//         else{
//             reject("failure: weak connection");
//         }
//     })
// }
// savetoDb()


function savetoDb(data){
    return new Promise((resolve, reject)=>{
        let random = Math.floor(Math.random()*10)+1;
       if(random>4)
       {
        console.log("success data was saved");
        resolve();
       }
       else{
        console.log("faliure  weak connection");
        reject();
       }
    })
}
savetoDb("ayush").then(()=>{
    console.log("data 1 saved");
    return savetoDb("hello world");
}).then(()=>{
    console.log("data 2 saved")
})
.catch(()=>{
    console.log("promise was rejected")
})
