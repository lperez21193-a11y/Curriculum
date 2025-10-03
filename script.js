function CanviarNom(){
    let nom = prompt("Com me vols dir-te?")
document.getElementById("Nom").innerHTML = "NOM: "+nom

}

function CanviFoto(){
    let foto = prompt("Que vols ser?")
    document.getElementById("foto").src = foto
}

function HarryPotter(){
document.getElementById("foto").style = "display: none"
}
function afegir(){
    let llista = document.getElementById("EXPL");
    let element = document.createElement("li");
    element.innerHTML = prompt("Que vols afeguir?")
   llista.appendChild(element)
}

function canviafons(){
     let body = document.getElementsByTagName("body")[0]
     let foto = prompt("On vols viatjar?")
     body.style = "background-image: url('"+foto+"'); background-size: cover;"
   

}
function tradueix(){
   let body = document.getElementsByTagName("body")[0]
      body.style = "font-family: 'Kanit', sans-serif;"

  
}