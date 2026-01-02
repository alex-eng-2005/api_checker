//My button
let enter_button = document.getElementById("enter")
//My info
let my_api;
//Checker
let check;
//Save the url
let save;

export {check}
//If the user clicks on the button
enter_button.addEventListener("click", async ()=>{
    //Gets the api
    my_api = await get_api(document.getElementById("info").value)
    check = my_api[0]
    document.getElementById("valid").style.visibility = "visible";
    if(check)
    {
        document.getElementById("valid").innerHTML = "This API does exists"
        document.getElementById("reveal").style.visibility = "visible"
        save = JSON.stringify(await my_api[1])
        
    }
    else
    {
        
        document.getElementById("valid").innerHTML = "This API does not exists"
        document.getElementById("reveal").style.visibility = "hidden"
    }
})

document.getElementById("reveal").addEventListener("click",()=>{
    sessionStorage.setItem("save", save);
    window.location.href="raw_data.html";
})

//Async function
async function get_api(url)
{
    let my_info = await fetch(url);
    //Checks if it is a valid url
    if(my_info.ok)
    {
        //Says that it is valid
        return [true, my_info.json()]
    }
    else
    {
        //Not a valid url
        return [false]
    }
}