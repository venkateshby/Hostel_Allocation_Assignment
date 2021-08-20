import React, { Component } from "react"
import './App.css';
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

class App extends Component {
  state = { isSignedIn: false }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("user", user);
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hostel Allocation</h1>
          <p>Please Sign-in</p>
        {this.state.isSignedIn ? (
          <span>
            <div>Signed In!</div>
            <button onClick={() => firebase.auth().signOut()}>Sign out</button>
            <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
            <h3>You have already booked a room</h3>
            <h2>Your room details as follows:</h2>
            <h4>Hostel No. <span class="red">B4</span></h4>
            <h4>Room No. <span class="red">8</span></h4>
          </span>
        ) : (
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
      </div>
    )
  }
}

export default App
