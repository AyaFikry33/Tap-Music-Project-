window.addEventListener("load", function(){
    const sounds = document.querySelectorAll(".sound");
    const divs = document.querySelectorAll(".pods div")
    const colors = [ "#60d394", "#d36060", "#c060d3", "#d3d160", "#6860d3", "#60b2d3"]

    divs.forEach(function (pad, index){
        pad.addEventListener("click", function(){
            sounds[index].play();
            animat(index);
        })
    })
    
    const animat = function(index){
        const newDiv = document.createElement("div")
        document.querySelector(".visual").appendChild(newDiv)
        newDiv.style.backgroundColor = colors[index];
        newDiv.style.animation = "jumb 1s ease";
        newDiv.addEventListener("animationend", function(){
            document.querySelector(".visual").removeChild(this) 
        })
    }
});