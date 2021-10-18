function validation(){
  
    var nom = document.getElementById("Nom").value;
    
  
    document.getElementById("error").innerHTML = "";
  
    for(let item of document.querySelectorAll('.form-control')){

      if(item.value.length < 5) {       
        var label =   document.querySelector("label[for="+item.id+"]").textContent;       
        document.getElementById("error").innerHTML += `${label} doit contenir au moins 5 caratères <br/>`;       
        document.getElementById("error").classList.add("display");
        document.getElementById("Resultat").classList.remove("display")
    
      }
        
    }
      if(document.getElementById("error").innerHTML == "") {
        var nom = document.querySelector("#Nom").value;
        document.getElementById("Resultat").innerHTML = `Bienvenue ${nom}`;
        document.getElementById("error").classList.remove("display")
        document.getElementById("Resultat").classList.add("display")
      }

      
    
}