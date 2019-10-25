import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Firebase import 

import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig); //Firebase Bağlantısı

class App extends Component {
  render() {
    const {
      user,
      signOut,
      signInWithGoogle,
    } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {
            user
              ? <p>Hello, {user.displayName}</p>
              : <p>Please sign in.</p>
          }

          {
            user
              ? <button onClick={signOut}>Sign out</button>
              : <button onClick={signInWithGoogle}>Sign in with Google</button>
          }
        </header>
      </div>
    );
  }
}

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(), //Hangi girişi sağlanmasını istiyorsanız onu seçtim. (Google)
};

export default withFirebaseAuth({ //Uygulama içinden hangi Firebase komutları çekilecek.
  providers,
  firebaseAppAuth,
})(App);