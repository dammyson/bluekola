

import {
  Alert,
  AsyncStorage,
} from 'react-native';

var url = "http://bluekollar.4wallsdev.com";
var result = '';

module.exports = {
  url: "http://bluekollar.4wallsdev.com",
  bgcolor: "#01215B",
  homelinkcolor: "#F15B2D",


  showMessage: function (message, cb = null) {
    Alert.alert('', message,
      [
        {
          text: 'OK', onPress: () => {
            var func = (typeof cb == 'function') ?
              cb : eval(cb);

          }
        },
      ],
    )
  },

 

}

export function processLogin(username, password) {

  fetch(url+ '/api/login', {
    method: 'POST', headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }, body: JSON.stringify({
      username: username,
      password: password
    }),
  })
    .then(res => res.json())
    .then(res => {
      if (res.status) {

        AsyncStorage.setItem('auth', res.token.toString());
        AsyncStorage.setItem('rem', "login");

       // this.setState({ loginButtonState: 'success' })
       // Actions.home();

      } else {

        Alert.alert('Operation failed', "Pleas check you details and try again", [{ text: 'Okay' }])
       /* this.setState({ loginButtonState: 'error' })
        setTimeout(() => {
          this.setState({ loginButtonState: 'idle' })
        }, 2000);
        */
      
      }
    }).catch((error) => {
      alert(error.message);
    /*  this.setState({ loginButtonState: 'error' })
      setTimeout(() => {
        this.setState({ loginButtonState: 'idle' })
      }, 2000);*/
    });

    return result;
}







