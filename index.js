import axios from "axios";
import { appendQuote, clearQuote } from "./ui";


(() =>{

    const handleRandomSearch = () => {

        clearQuote();
        axios.get("https://api.adviceslip.com/advice")
        .then((response) => {
            appendQuote(response.data.slip.advice);
            // console.log(response.data.slip.advice)
        })
        .catch((error) => {
            console.error(error);
        })
    }

    window.addEventListener("load", ()=>{
        document.getElementById("generate-random-quote")
        .addEventListener("click",handleRandomSearch)
    })
})();