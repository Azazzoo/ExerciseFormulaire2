function updateTextInput(valeur) {
    document.getElementById("textInput").innerText = valeur;
    chekpatate()
}

function chek(prov){
    let tel = document.getElementById("tel").value.substring(1,4);
    let fulltel = document.getElementById("tel").value;
    console.log(fulltel.length)
    if(fulltel.length === 14){
        if (prov === 'quebec'){
            let tel = document.getElementById("tel").value;
            let newtel = "(819) " + tel.substring(6,14);
            document.getElementById("tel").value = newtel;
        }
        else if (prov === 'ontario'){
            let tel = document.getElementById("tel").value;
            let newtel = "(613) " + tel.substring(6,14);
            document.getElementById("tel").value = newtel;
        }
        else {
            let tel = document.getElementById("tel").value;
            document.getElementById("tel").value = tel;
        }
    }
    else if (fulltel.length === 12){
        if (prov === 'quebec'){
            let tel = document.getElementById("tel").value;
            let newtel = "819-" + tel.substring(4,12);
            document.getElementById("tel").value = newtel;
        }
        else if (prov === 'ontario'){
            let tel = document.getElementById("tel").value;
            let newtel = "613-" + tel.substring(4,12);
            document.getElementById("tel").value = newtel;
        }
        else {
            let tel = document.getElementById("tel").value;
            document.getElementById("tel").value = tel;
        }
    }
    else{
        if (prov === 'quebec'){
            let tel = document.getElementById("tel").value;
            let newtel = "819" + tel.substring(3,12);
            document.getElementById("tel").value = newtel;
        }
        else if (prov === 'ontario'){
            let tel = document.getElementById("tel").value;
            let newtel = "613" + tel.substring(3,12);
            document.getElementById("tel").value = newtel;
        }
        else {
            let tel = document.getElementById("tel").value;
            document.getElementById("tel").value = tel;
        }
    }

}

function chekpatate(){
    let nbpatate = document.getElementById("nbpatate").value;
    let nbpomme = document.getElementById("nbpomme").value;
    console.log(nbpatate)
    console.log(nbpomme)
    if ( nbpatate < nbpomme){
        alert("le nombre de patate doit etre superieur au nombre de pomme")
        document.getElementById("nbpomme").value = (nbpatate -1);
    }
}
function erase(){
    document.getElementById("textInput").innerText = "0";
}

