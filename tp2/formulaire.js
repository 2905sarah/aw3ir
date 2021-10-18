function validation(){
  
    var nom = document.getElementById("Nom").value;
    
  
    document.getElementById("error").innerHTML = "";
  
    for(let item of document.querySelectorAll('.inputAW')){
      if(item.value.length < 5){
        
        var label =   document.querySelector("label[for="+item.id+"]").textContent;
        
        document.getElementById("error").innerHTML += `La saisie de ${label} est obligatoire <br/>`;
        
       
        document.getElementById("error").classList.add("display");
        document.getElementById("resultat").classList.remove("display")
    
      }
        
    }
      if(document.getElementById("error").innerHTML == ""){
        var nom = document.querySelector("#Nom").value;
        document.getElementById("resultat").innerHTML = `Bienvenue à ${nom}`;
        document.getElementById("error").classList.remove("display")
        document.getElementById("resultat").classList.add("display")
      }

      
    
}