// vyskakovaci banner
const id = document.getElementById('banner');
function timmerFadeOut() {
    setTimeout(()=>{
    id.className="animate__animated animate__fadeInDown banner"
},2500);
}
timmerFadeOut()

// prepinac cen
const button = document.getElementById('yearlyBtn');
let toggle=0;
function togglePrice(){
    if (toggle==0) {
        
        document.getElementById('oneYear').className="card center wow animate__animated animate__flipInY animate__slow"
        document.getElementById('montly').style.display="none";
        toggle=1
        console.log("yearly");
    }else{
        document.getElementById('oneYear').style.display="none"
        document.getElementById('montly').style.display="flex";
        toggle=0
        console.log("montly");
    }
    
    console.log("click");
}
// FAQ zobrazeni odpovedi
let btnId
function btnPlus(button){
    btnId=document.getElementById(button)
    console.log(button);
    
}
let toggleBtn=true;
function toggleListener(){
    
    // toggleBtn?document.getElementById("btnPlusOne").addEventListener("click",toggleOpenAnswer) :document.getElementById("btnPlusOne").addEventListener("click",toggleCloseAnswer);
if (toggleBtn) {
    document.getElementById("btnPlusOne").addEventListener("click",toggleOpenAnswer);
    toggleBtn=!toggleBtn;
}else{
    document.getElementById("btnPlusOne").addEventListener("click",toggleCloseAnswer);
    toggleBtn=!toggleBtn;
}
}

function toggleOpenAnswer(){
    document.getElementById("one").style.display="block";
    console.log("click");
   
    
}
function toggleCloseAnswer(){
    document.getElementById("one").style.display="none";
    console.log("click close");
    
}
toggleListener()