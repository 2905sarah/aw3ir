window.onload = function () {

    document.querySelector("#Nom").addEventListener("keyup", function (event) {
        document.getElementById("nameCounter").textContent = `${event.target.value.length} char.`; 
      });
  
  
      document.querySelector("#Prenom").addEventListener("keyup", function (event) {
          document.getElementById("surnameCounter").textContent = `${event.target.value.length} char.`; 
      });
  
      document.querySelector("#date").addEventListener("keyup", function (event) {
          document.getElementById("dateCounter").textContent = `${event.target.value.length} char.`; 
      });
  
      document.querySelector("#Adresse").addEventListener("keyup", function (event) {
          document.getElementById("addCounter").textContent = `${event.target.value.length} char.`; 
      });
  
      document.querySelector("#mail").addEventListener("keyup", function (event) {
          document.getElementById("mailCounter").textContent = `${event.target.value.length} char.`; 
      });
  
      document.querySelector("#gps").addEventListener("click", function (event) {
        event.preventDefault();
        getLocation();
      });
  


    console.log("DOM ready!");
    var myModal = new bootstrap.Modal(document.getElementById('myModal'));

    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault();
        console.log("form submitted!");
        const date = document.querySelector("#date").value;

        contactStore.add(
            document.querySelector("#Nom").value,
            document.querySelector("#Prenom").value,
            document.querySelector("#date").value,
            document.querySelector("#Adresse").value,
            document.querySelector("#mail").value,
            
          );
      
          const contactList = contactStore.getList();
      
          document.querySelector("table tbody").innerHTML = "";
      
          for (var contact of contactList) {
            document.querySelector("table tbody").innerHTML += `
              <tr>
                  <td> ${contact.Nom}</td>
                  <td> ${contact.Prenom}</td>
                  <td> ${contact.date}</td>
                  <td> <a href="https://maps.google.com/?q=${contact.Adresse}">${contact.Adresse}</a></td>
                  <td> <a href="mailto:${contact.mail}">${contact.mail}</a></td>
              <tr>`;
          }


      
        if (document.getElementById("Nom").value.length < 5) {
            document.querySelector(".modal-title").textContent = "Erreur"
            document.querySelector(".modal-body").innerHTML = "Votre Nom doit contenir plus de 5 caractères ! ";
            myModal.show();
        }

        else if (document.getElementById("Prenom").value.length < 5) {
            document.querySelector(".modal-title").textContent = "Erreur"
            document.querySelector(".modal-body").innerHTML = "Votre Prénom doit contenir plus de 5 caractères !";
            myModal.show();
        }

        else if (document.getElementById("Adresse").value.length < 5) {
            document.querySelector(".modal-title").textContent = "Erreur"
            document.querySelector(".modal-body").innerHTML = "Votre Adresse doit contenir plus de 5 caractères !";
            myModal.show();
        }

        else if (document.getElementById("mail").value.length < 5) {
            document.querySelector(".modal-title").textContent = "Erreur"
            document.querySelector(".modal-body").innerHTML = "Votre Mail doit contenir plus de 5 caractères !";
            myModal.show();
        }

        else if (validateDate(date) == false) {
            document.querySelector(".modal-title").textContent = "Erreur"
            document.querySelector(".modal-body").innerHTML = "Entrez votre date de naissance";
            myModal.show();
        }

        else {
            console.log('OK');
            document.querySelector(".modal-title").textContent = " Bienvenue " + document.getElementById("Prenom").value;
            document.querySelector(".modal-body").innerHTML = " Vous êtes né(e) le " + document.getElementById("date").value + " et vous habitez à ";
            document.querySelector(".modal-body2").innerHTML = '<a href="http://maps.google.com/maps?q=Paris"><img src="https://maps.googleapis.com/maps/api/staticmap?markers=Paris&zoom=9&size=200x100&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg"/> </a>';
            myModal.show();

        }
    }
    )
}


function validateDate() {
    const inputDate = document.getElementById('date').value;
    let dateNaissance = new Date(inputDate);
    let dateNaissanceTimestamp = dateNaissance.getTime();
    let nowTimestamp = Date.now();
    return (dateNaissanceTimestamp < nowTimestamp)
}



function validateEmail(mail) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(mail).toLowerCase());
}


