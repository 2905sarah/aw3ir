window.onload = function () {
    console.log("DOM ready!");
    var myModal = new bootstrap.Modal(document.getElementById('myModal'));

    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault();
        console.log("form submitted!");
        const date = document.querySelector("#date").value;

        
      
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

        else if (document.getElementById("email").value.length < 5) {
            document.querySelector(".modal-title").textContent = "Erreur"
            document.querySelector(".modal-body").innerHTML = "Votre Email doit contenir plus de 5 caractères !";
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



function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

