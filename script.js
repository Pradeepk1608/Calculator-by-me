let string= "";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e)=>{
        if (e.target.innerHTML == "="){
            try{
                document.querySelector("input").value = eval(string);
            }
            catch(SyntaxError){
                document.querySelector("input").value = "ERROR";
            }
        }
        else if(e.target.innerHTML == "RESET"){
            string = "";
            document.querySelector("input").value = string;
        }
        else if(e.target.innerHTML == "DEL"){
            string = string.split("")
            string = string.slice(0, string.length-1);
            string = string.join("");
            console.log(string);
            document.querySelector("input").value = string;
        }

        else{
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector("input").value = string;
        }
    })
})