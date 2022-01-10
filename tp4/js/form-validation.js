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

    document.querySelector("#email").addEventListener("keyup", function (event) {
        document.getElementById("emailCounter").textContent = `${event.target.value.length} char.`; 
    });

    document.querySelector("#gps").addEventListener("click", function (event) {
      event.preventDefault();
      getLocation();
    });
  
    document.querySelector("form").addEventListener("submit", function (event) {
      event.preventDefault();
      contactStore.add(
        document.querySelector("#Nom").value,
        document.querySelector("#Prenom").value,
        document.querySelector("#date").value,
        document.querySelector("#Adresse").value,
        document.querySelector("#email").value,
        
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
              <td> <a href="emailto:${contact.email}">${contact.email}</a></td>
          <tr>`;
      }
    });
  };
  