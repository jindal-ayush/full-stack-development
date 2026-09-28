let btn = document.querySelector("button");

btn.addEventListener("click" , async()=>{
    console.log("btn was clicked");
    let fact =await  getFacts();
    let p = document.querySelector("#result");
    p.innerHTML = fact;
})


let url = "https://catfact.ninja/fact";

async function getFacts()
{
    try{
        let res = await axios.get(url);
        console.log(res.data.fact);
        return res.data.fact;
        
    }catch(e)
    {
      console.log("error ", e);
      return " fact not found"
    }
} 