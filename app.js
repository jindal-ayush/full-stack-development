const cart = ["shirt", "trouser", "t-shirt"];

// const promise = createOrder(cart)
// .then(function(orderId){
//  return  proceedToPayment(orderId)
// })
// .then(function(paymentInfo){
// return showOrderSummary(paymentInfo)
// })

//0createOrder(cart)
// .then(orderId=> proceedToPayment(orderId))
// .then(paymentInfo=> showOrderSummary(paymentInfo));




// const promise = createOrder(cart);

// promise
//   .then(function (orderId) {
//     console.log(orderId);
//     return proceedToPayment(orderId);
//   })
//   .then(function (proceedToPayment) {
//     console.log(proceedToPayment);

//     //return paymentInfo(proceedToPayment);
//   })
//   .then(function (paymentInfo) {
//    // console.log(paymentInfo);
//   })
//   .catch(function (err) {
//     console.log(err.message);
//   });

// function createOrder() {
//   const pr = new Promise(function (resolve, reject) {
//     if (!validate()) {
//       const err = new Error("cart is not valid");
//       reject(err);
//     }
//     const orderId = "12344";
//     if (orderId) {
//       // setTimeout(()=>{
//       //     resolve(orderId);
//       // },5000)
//       setTimeout(function () {
//         resolve(orderId);
//       }, 5000);
//     }
//   });
//   return pr;
// }
// function proceedToPayment(orderId) {
//   const payment = new Promise(function (resolve, reject) {
//     resolve("payment success");
//   });
//   return payment;
// }
// function validate() {
//   return true;
// }


//************************PRACTICE**************************************
// createOrder,
// proceedToPayment,
// showOrderSummary,
// updateWallet
 
// createOrder(cart)
// .then(function(orderId){
//   console.log(orderId)
//   return proceedToPayment(orderId);
// })
// .catch(function(err){
//     console.log(err);
// })
// .then(function(proceedToPayment){
//    console.log(proceedToPayment);
//    return showOrderSummary(proceedToPayment);
// })
// .then(function(showOrderSummary){
//     console.log(showOrderSummary);
// })

// function createOrder(cart)
// {
//     let pr = new Promise(function(resolve, reject){
//     if(!validate())
//     {
//       const err = new Error("cart is not valid");
//        reject(err);
//     }
//        const orderId = "1234567"
//        if(orderId)
//        {
//         resolve(orderId)
//        }
//     });
//     return pr;
// }
// function proceedToPayment(orderId)
// {
//    const p = new Promise(function(resolve , reject){
//       resolve("payment success");
//    })
//    return p;
// }
// function showOrderSummary()
// {
//     const p = new Promise(function(resolve, reject){
//         resolve("headphones");
//     })
//     return p;
// }

// function validate()
// {
//     return true;
// }





//**********************Promise API**************************** */
    // const p1 = new Promise((resolve, reject)=>{
    //     setTimeout(()=>{
    //     //  resolve("p1 success")
    //         reject("p1 reject")
    //     }, 3000)
    // })
    // const p2 = new Promise((resolve, reject)=>{
    //     setTimeout(()=>{
    //     // resolve("p2 success")
    //     reject("p2 reject")
    //     },1000)
    // })
    // const p3 = new Promise((resolve, reject)=>{
    //     setTimeout(()=>{
    //     // resolve("p3 success")
    //     reject("p3 reject")
    //     },2000)
    // })
    // Promise.any  ([p1, p2, p3]).then((res)=>{
    //     console.log(res);   
    // }).catch((err)=>{
    // // console.error(err)
    //  console.log(err);     
    // console.log(err.errors)
    // })



// const p = new Promise((resolve, reject)=>{
//     resolve("promise resolved");
// })
// async function getData()
// {
//     return p;
// }
// const dataPromise = getData();

// p.then((res)=>{
//     console.log(res);
// })


const p = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("promise resolved value");
    },5000)
});

// async function handlePromise()
// {
//  hello world is print quickly  
    console.log("hello world ") 
    //suspend the excecution      contiune promise is resolved 
//   const val = await p;
//   //js engine was waiting for promise to resolve  and ayush and val both print after5 second
//   console.log("ayush")
//   console.log(val)
// }

//handlePromise();

p.then((res)=>{
    console.log(res);
    // js engine will not wait for promise to be resolved and print ayush
    console.log("ayush")
})

const URL = "https://jnj.com/";

async function handlefetch()
{
   try{
      const data = await fetch(URL);
   const jsonValue = await data.json();
  console.log(jsonValue)
   }
   catch(err){
    console.log(err);
   }
}
//async function return a promise
handlefetch();