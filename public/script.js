//My button
let enter_button = document.getElementById("enter")
//My info
let my_api;

//If the user clicks on the button
enter_button.addEventListener("click", ()=>{
    document.getElementById("title").value = "OK"
    //my_api = document.getElementById("info").value
    //get_info(my_api);    
})

//Async function
async function get_info(url)
{
    let my_info = await fetch(url);
    //Checks if it is a valid url
    if(my_info.ok)
    {
        //Says that it is valid
        return "OK!"
    }
    else
    {
        //Not a valid url
        return "This is not a url"
    }
}