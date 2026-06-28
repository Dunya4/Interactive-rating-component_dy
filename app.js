const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");

const cardSubmit = document.getElementById("card_submit");

const cardVisible = document.getElementById("card_visible");
const cardHidden = document.getElementById("card_hidden");

const hiddenChange = document.getElementById("hidden_change");

let buttonChange = 0;

button1.addEventListener("click", function(){
    buttonChange = 1;
    activeSituation(1);
});

button2.addEventListener("click", function(){
buttonChange = 2;
activeSituation(2);
});

button3.addEventListener("click", function(){
buttonChange = 3;
activeSituation(3);
});

button4.addEventListener("click", function(){
buttonChange = 4;
activeSituation(4);
});

button5.addEventListener("click", function(){
buttonChange =5;
activeSituation(5);
}
);

cardSubmit.addEventListener("click", function() {

if(buttonChange!==0){
cardHidden.classList.add("show");
cardVisible.classList.add("ntshow");
hiddenChange.textContent = buttonChange ;

}else{
 cardHidden.classList.remove("show");
cardVisible.classList.remove("ntshow");   
}

});

function activeSituation(){
    switch (buttonChange) {
        case 1:           
            button1.classList.add("active");
            button2.classList.remove("active");
            button3.classList.remove("active");
            button4.classList.remove("active");
            button5.classList.remove("active"); 
            break;

        case 2:           
            button1.classList.remove("active");
            button2.classList.add("active");
            button3.classList.remove("active");
            button4.classList.remove("active");
            button5.classList.remove("active"); 
            break;
        case 3:           
            button1.classList.remove("active");
            button2.classList.remove("active");
            button3.classList.add("active");
            button4.classList.remove("active");
            button5.classList.remove("active"); 
            break;
        case 4:           
            button1.classList.remove("active");
            button2.classList.remove("active");
            button3.classList.remove("active");
            button4.classList.add("active");
            button5.classList.remove("active"); 
            break;
        case 5:           
            button1.classList.remove("active");
            button2.classList.remove("active");
            button3.classList.remove("active");
            button4.classList.remove("active");
            button5.classList.add("active"); 
            break;
    
        default:
            break;
    }
}
