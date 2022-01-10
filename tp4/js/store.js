/*
store.js
Script pour gérer la liste de contact en JSON

Pour ajouter un contact:  contactStore.add(_name, _firsname, _date, _adress, _mail);
Pour récuper la liste:    contactStore.getList();
*/
var contactStore = (function () {
    // variable privée
    var contactList = [];
  
    // Expose these functions via an interface while hiding
    // the implementation of the module within the function() block
  
    return {
      add: function (_Nom, _Prenom, _date, _Adresse, _email) {
        var contact = { Nom: _Nom, Prenom: _Prenom, Date: _date, Adresse: _Adresse, email: _email };
        // ajout du contact à la liste
        contactList.push(contact);
  
        return contactList;
      },
  
      getList: function () {
        return contactList;
      },
    };
  })();
