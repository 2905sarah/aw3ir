function validation(){
  
    var nom = document.getElementById("Nom").value;
    
  
    document.getElementById("error").innerHTML = "";
  
    for(let item of document.querySelectorAll('.inputAW')){
      if(item.value.length < 5){
        // recuperation du label
        var label =   document.querySelector("label[for="+item.id+"]").textContent;
        // ajout du message d'erreur
        document.getElementById("error").innerHTML += `La saisie de ${label} est obligatoire <br/>`;
        
        // ajout de la classe CSS "display"
        document.getElementById("error").classList.add("display");
        document.getElementById("Resultat").classList.remove("display")
    
      }
        
    }
      if(document.getElementById("error").innerHTML == ""){
        var nom = document.querySelector("#Nom").value;
        document.getElementById("Resultat").innerHTML = `Bienvenue à ${nom}`;
        document.getElementById("error").classList.remove("display")
        document.getElementById("Resultat").classList.add("display")
      }

      
    
}