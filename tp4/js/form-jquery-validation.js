window.onload = function () {   


    document.querySelector("#Nom").addEventListener("keyup", function (event) {
        document.getElementById("nameCounter").textContent = `${event.target.value.length} car.`; 
      });
  
  
      document.querySelector("#Prenom").addEventListener("keyup", function (event) {
          document.getElementById("surnameCounter").textContent = `${event.target.value.length} car.`; 
      });
  
      document.querySelector("#date").addEventListener("keyup", function (event) {
          document.getElementById("dateCounter").textContent = `${event.target.value.length} car.`; 
      });
  
      document.querySelector("#Adresse").addEventListener("keyup", function (event) {
          document.getElementById("addCounter").textContent = `${event.target.value.length} car.`; 
      });
  
      document.querySelector("#mail").addEventListener("keyup", function (event) {
          document.getElementById("mailCounter").textContent = `${event.target.value.length} car.`; 
      });




    console.log("DOM ready!");
    var myModal = new bootstrap.Modal(document.getElementById('myModal'));
    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault();
        console.log("form submitted!");
        const date = document.querySelector("#date").value;
        
        if (document.getElementById("Nom").value.length < 5) {
            document.querySelector(".modal-title").textContent = "Erreur"
            document.querySelector(".modal-body").innerHTML = "Votre Nom doit contenir au moins 5 caractères ";
            myModal.show();
        }

        else if (document.getElementById("Prenom").value.length < 5) {
            document.querySelector(".modal-title").textContent = "Erreur"
            document.querySelector(".modal-body").innerHTML = "Votre Prenom doit contenir au moins  5 caractères";
            myModal.show();
        }

        else if (document.getElementById("Adresse").value.length < 5){
            document.querySelector(".modal-title").textContent = "Erreur"
            document.querySelector(".modal-body").innerHTML = "Votre Adresse doit contenir au moins 5 caractères";
            myModal.show();
        }
        
        else if (document.getElementById("mail").value.length < 5) {
            document.querySelector(".modal-title").textContent = "Erreur"
            document.querySelector(".modal-body").innerHTML = "Votre Mail doit contenir au moins 5 caractères ";
        myModal.show();
        }
    
        else if (validateDate(date) == false) {
            document.querySelector(".modal-title").textContent = "Erreur"
            document.querySelector(".modal-body").innerHTML = "Entrez votre Date De Naissance";
            myModal.show();
        }
  
        else {
            console.log('OK');
            document.querySelector(".modal-title").textContent = " Bienvenue  " + document.getElementById("Prenom").value;
            document.querySelector(".modal-body").innerHTML = "Vous êtes né(e) le " + document.getElementById("date").value + " et vous habitez à " + document.getElementById("Adresse").value;
            document.querySelector(".modal-body2").innerHTML = '<br> <a href="http://maps.google.com/maps?"><img src="https://maps.googleapis.com/maps/api/staticmap?markers=Paris&zoom=9&size=200x100&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg"/> </a>';


           
            
            contactStore.add(document.getElementById("Nom").value, document.getElementById("Prenom").value, document.getElementById("date").value, document.getElementById("Adresse").value, document.getElementById("mail").value);
		    localStorage.setItem('contactList', JSON.stringify(contactStore.getList()));
            document.querySelector('#gps').addEventListener("click", function (event) {
                getLocation();
            });
            AfficherList();
            myModal.show();
            
        }// demande de la localisation à l'utilisateur
function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      document.querySelector("#map").innerHTML =
        "Geolocation is not supported by this browser.";
    }
  }
  
  // Si l"utilisateur l'autorise, on récupère les coordonnées dans l'objet "position"
  function showPosition(position) {
    var latlon = position.coords.latitude + "," + position.coords.longitude;
    var img_url = `https://maps.googleapis.com/maps/api/staticmap?center=${latlon}&zoom=14&size=400x300&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg`;
  
    document.querySelector("#map").innerHTML = `<img src='${img_url}'>`;
  }
  
  // Au cas ou l'utilisateur refuse
  // Ou si une erreur arrive
  function showError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        document.querySelector("#map").innerHTML =
          "User denied the request for Geolocation.";
        break;
      case error.POSITION_UNAVAILABLE:
        document.querySelector("#map").innerHTML =
          "Location information is unavailable.";
        break;
      case error.TIMEOUT:
        document.querySelector("#map").innerHTML =
          "The request to get user location timed out.";
        break;
      case error.UNKNOWN_ERROR:
        document.querySelector("#map").innerHTML = "An unknown error occurred.";
        break;
    }
  }
    }
    )
    
  }
  
function validateEmail(mail) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(mail).toLowerCase());
}
  
function validateDate() {
    const inputDate = document.getElementById('date').value;
    let dateNaissance = new Date(inputDate);
    let dateNaissanceTimestamp = dateNaissance.getTime();
    let nowTimestamp = Date.now();
    return (dateNaissanceTimestamp < nowTimestamp)
}
  

function AfficherList() {
    
        var contactList = JSON.parse(localStorage.getItem("contactList"));
        for (var index in contactList) {
          document.querySelector("table tbody").innerHTML = document.querySelector("table tbody").innerHTML +
            
            '<tr>'+
            '<td>'+ contactList[index].Nom +'</td>'+
            '<td>'+ contactList[index].Prenom +'</td>'+
            '<td>'+ contactList[index].date +'</td>'+
            '<td>'+ contactList[index].Adresse +'</td>'+
            '<td><a href=mailto:>'+ contactList[index].mail +'</a></td>'+
          '</tr>'
        }
 };

