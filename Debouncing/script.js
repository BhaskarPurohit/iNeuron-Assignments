//Bhaskar Purohit Debouncing example

const input = document.querySelector("input")
let timeoutId;

const debounce = (callback)=>{
    clearTimeout(timeoutId) //clear the previously set timeout

    //execute callback after 1200 mili seconds
    timeoutId = setTimeout(()=> callback(),1200)

}

//Register the debounce function on input event
input.addEventListener("input", ()=>{
    debounce(()=>{
       console.log("Fetching data from database..");

    })



})