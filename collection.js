var productContainer = document.getElementById("products");
var search = document.getElementById("search");
var prodcutlist = productContainer.querySelectorAll("div");

search.addEventListener("keyup",function(event){
    var enteredValue = event.target.value.toUpperCase()
     
    for (count=0; count<prodcutlist.length; count=count+1)
    {
        var productname = prodcutlist[count].querySelector("p").textContent

        if(productname.toUpperCase().indexOf(enteredValue)<0)
        {
            prodcutlist[count].style.display = "none"
        }
        else
        {
            prodcutlist[count].style.display = "block"
        }
    }
})


var sidenav = document.querySelector(".side-navbar")

function shownav()
{
    sidenav.style.left="0"
}

function closenav()
{
    sidenav.style.left="-50%"
}