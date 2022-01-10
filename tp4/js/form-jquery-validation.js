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
            document.querySelector(".modal-body").innerHTML = "Vous êtes né(e) le " + document.getElementById("date").value + " et vous habitez à ";
            document.querySelector(".modal-body2").innerHTML = '<a href="http://maps.google.com/maps?q=Paris"><img src="https://maps.googleapis.com/maps/api/staticmap?markers=Paris&zoom=9&size=200x100&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg"/> </a>';
            contactStore.add(document.getElementById("Nom").value, document.getElementById("Prenom").value, document.getElementById("date").value, document.getElementById("Adresse").value, document.getElementById("mail").value);
		    localStorage.setItem('contactList', JSON.stringify(contactStore.getList()));
            document.querySelector('#gps').addEventListener("click", function (event) {
                getLocation();
            });
            AfficherList();
            myModal.show();
            
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

