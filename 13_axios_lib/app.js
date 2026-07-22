// //axios -> library to make http request

// let btn = document.querySelector("button");
// btn.addEventListener("click", async () => {
//     let fact = await getFacts();
//     // console.log(fact);
//     let p = document.querySelector("#result");
//     p.innerText = fact;
// });

// let url = "https://catfact.ninja/fact";

// async function getFacts() {
//     try {
//         let res = await axios.get(url);
//         return res.data.fact;
//     } catch (e) {
//         console.log("error - ", e);
//         return "No fact found";
//     }
// }



//-----------------------------------------------
//sending headers with api request
const url = "https://icanhazdadjoke.com/";

async function getJokes() {
    try {
        const config = { headers: {Accept : "Application/json"} };
        let res = await axios.get(url, config);
        console.log(res.data);
    } catch(err) {
        console.log(err);
    }
}