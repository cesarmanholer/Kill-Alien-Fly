var showCredits = 0;

function credits(){
    if(showCredits == 0){
        document.getElementById('credits').style.display = "flex";
        showCredits++;
    }else if(showCredits == 1){
        document.getElementById('credits').style.display = "none";
        showCredits--;
    }
}