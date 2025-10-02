function CanviarNom(){
    let nom = prompt("Com me vols dir-te?")
document.getElementById("Nom").innerHTML = "NOM: "+nom

}

function CanviFoto(){
    let foto = prompt("Que vols ser?")
    document.getElementById("foto").src = foto
}

function HarryPotter(){
    if(document.getElementById("foto").hidden == true){
        document.getElementById("foto").hidden = false
    }else{
        document.getElementById("foto").hidden = true
    }
}