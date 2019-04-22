import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";
class GoogleAuth extends React.Component {
  componentDidMount() {
    //load up the gapi client:auth2 library.
    window.gapi.load("client:auth2", () => {
      //library is loaded up successfully.
      //initialize the library.
      window.gapi.client
        .init({
          clientId:
            "530995356834-4ruj6khbmt57ektbcs2jseoecordoo74.apps.googleusercontent.com",
          scope: "email" //ask user to authorize email access
        })
        .then(() => {
          //library is initialized.
          this.auth = window.gapi.auth2.getAuthInstance();
          //for first time
          this.onAuthChange(this.auth.isSignedIn.get());
          //add listener on auth for sign in/out
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }
  /**
   * listen for user signIn or signOut event
   */
  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      //user signed in
      //update redux store by
      //calling signIn action creator.
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      //user is signed out.
      //call for signOut action creator to update redux store.
      this.props.signOut();
    }
  };

  /**
   * listen for click event on sign in button.
   */
  onSignInClick = () => {
    //update redux store
    //call for action creator
    this.auth.signIn();
  };

  /**
   * listen for click event on sign out btn.
   */
  onSignOutClick = () => {
    //update redux store.
    //call for action creator.
    this.auth.signOut();
  };

  /**
   * @return {button for signIn or signOut}
   */
  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return <div>null</div>;
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className="ui red google button">
          <i className="google icon">Sign Out</i>
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignInClick} className="ui green google button">
          <i className="google icon">Sign in with google</i>
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

/**
 * passed redux state as props to GoogleAuth component.
 * @param {pre redux store} state
 */
const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn }; //update redux store.
};
//connect to
export default connect(
  mapStateToProps,
  { signIn, signOut } /* action creator as props to GoogleAuth component*/
)(GoogleAuth);
