$.validator.setDefaults({
		submitHandler: function() {
			alert("submitted!");
		}
	});
$().ready(function() {
  $("#mainForm").validate({
  rules : {
    firstName : {
      required : true,
      minlength : 3,
    },
    lastName : {
      minlength : 3,
      required : true
    },
    userName : {
      required : true,
      notEqual : 'root|admin|dieu'
    },
    email : {
      required : true,
      email : true,
      notEqual : 'root@paca.happy-dev.fr|admin@paca.happy-dev.fr|dieu@paca.happy-dev.fr'
    },
    password : {
      required : true
    },
    confirm : {
      required : true,
      equalTo : "#mainForm input[name='password']"
    },
    sex : {
      required : true
    },
    age : {
      required : true,
      minAge : 18
    }
  },
  messages : {
    firstName : "Veuillez fournir un Nom",
    lastName : "Veuillez fournir un Prénom",
    userName : {
      required : "Veuillez fournir un User Name",
      notEqual : "Les noms dieu, admin, root sont interdit"
    },
    email : {
      required : "Veuillez fournir un email",
      email : "Votre email n'est pas valide",
      notEqual : "Ce mail est interdit"
    },
    password : {
      required : "Veuillez entrer un mot de passe"
    },
    confirm : {
      required : "Merci de confirmer votre mot de passe"
    },
    sex : {
      required : "Quel est votre sex ?"
    },
    age : {
      required : "Veuillez entrer votre date de naissance",
      minAge : "Vous devez avoir plus de 18 ans"
    }
  }
  });
});
$.validator.addMethod("notEqual", function(value, element, param) {
  return this.optional(element) ||      param.toLowerCase().split('|').indexOf(value.toLowerCase()) < 0;
});
$.validator.addMethod("minAge", function(value, element, min) {
    var today = new Date();
    var birthDate = new Date(value);
    var age = today.getFullYear() - birthDate.getFullYear();
 
    if (age > min+1) {
        return true;
    }
 
    var m = today.getMonth() - birthDate.getMonth();
 
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
 
    return age >= min;
});



	