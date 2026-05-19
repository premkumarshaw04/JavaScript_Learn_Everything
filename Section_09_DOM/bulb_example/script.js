var bulb = document.querySelector("#bulb") 
//document.querySelector("bulb")//wrong // With classes and ids we need to add "#" and "."  

var btn = document.querySelector("button") //because button is a tag, so just write as it is

var flag = 0

btn.addEventListener("click", function(){
    if(flag == 0){
        bulb.style.backgroundColor = "yellow"
        flag = 1
    }
    else{
        bulb.style.backgroundColor = "transparent"
        flag = 0
    }
    
})