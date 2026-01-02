//My button
let enter_button = document.getElementById("enter")
//My info
let my_api;

//If the user clicks on the button
enter_button.addEventListener("click", async ()=>{
    //Gets the api
    my_api = await get_api(document.getElementById("info").value)
    
    document.getElementById("enter_text").innerHTML = JSON.stringify(my_api)
    
})

//Async function
async function get_api(url)
{
    let my_info = await fetch(url);
    //Checks if it is a valid url
    if(my_info.ok)
    {
        //Says that it is valid
        return my_info.json()
    }
    else
    {
        //Not a valid url
        return null
    }
}