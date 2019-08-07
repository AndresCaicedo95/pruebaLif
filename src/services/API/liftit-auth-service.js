import Configuration from '../../Configuracion/Configuration';
import * as firebase from 'firebase'

class LiftitService {

  constructor() {
    this.config = new Configuration();
  }

  async crearUsuario(email, password) {

	  firebase.auth().createUserWithEmailAndPassword(email, password)
	  .then(function (user) {
      alert('Se creó el usuario correctamente con email ' + email);
	  })
	  .catch(function (error) {
		  console.error(error)
	  });
  }

  async loginUser(email, password) {
	  return firebase.auth().signInWithEmailAndPassword(email, password)
	  .then(function (user) {
      alert('Bienvenido ' + email);
      return true;
	  })
	  .catch(function (error) {
      console.log(error);
      return false;
    });
  }

}

export default LiftitService;