var istatus =  document.querySelector("h5")

var btn = document.querySelector("#add")

var check = 0

btn.addEventListener("click", function(){
    if(check == 0){
        istatus.innerHTML = "Friends"
        istatus.style.color = "green"
        btn.innerHTML = "Unfriend"
        check = 1 //updating check
    }
    else{
        istatus.innerHTML = "Stranger"
        istatus.style.color = "red"
        btn.innerHTML = "Add Friend"
        check = 0
    }
})


