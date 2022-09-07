import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput
} from 'react-native';

import Spinner from 'react-native-loading-spinner-overlay';

import APIKit, {setClientToken} from '../APIKit';
   
// Etats de User
const initialState = {
  username: '',
  password: '',
  email: '',
  prenomUser: '',
  errors: {},
  isAuthorized: false,
  isLoading: false,
};





class LoginView extends Component {
  
 constructor(props){
   super(props)
  this.route = props.route;
  // this.navigation = props.navigation
  this.state = initialState;
 }

 _changeVersuneAutreVue(){
   this.props.navigation.navigate("date", this.state);
 }
 //state = initialState;
  // componentDidMount(){
  //   console.log(this.state);
  // }
  componentWillUnmount() {}

  onUsernameChange = username => {
    this.setState({username});
  };

  onPasswordChange = password => {
    this.setState({password});
  };

  onPressLogin() {
    const {username, password, email, prenomUser} = this.state;
    const payload = {username, password, email, prenomUser};
    


    const onSuccess =  (data) => {

      //console.log(data.data);
      const {email, prenomUser} = data.data;
      // Le   Token   success
      setClientToken(data.data.accessToken);
      console.log(data.data)
      //console.log("user", user);
      this.setState({email, prenomUser, username, password})
      this._changeVersuneAutreVue();
      // this.setState({prenomUser})
//Props a ajouter et redirection!!!
// const {email, prenomUser, username, password} = this.props; 
//  this.navigation.navigate("date", {email, prenomUser, username, password})

    }; 

    const onFailure = (error) => {
      console.log(error, error.response);
      this.setState({errors: error.response.data, isLoading: false})
    };
     

    // SPINER
    this.setState({isLoading: true});
//Axios appel dans APKit.js
      APIKit.post('', payload)
      .then(onSuccess)
      .then(()=>console.log(this.state))
      .catch(onFailure);

  }

  getNonFieldErrorMessage() {
    // Gestion des ERREURS
    let message = null;
    const {errors} = this.state;
    if (errors.non_field_errors) {
      message = (
        <View style={styles.errorMessageContainerStyle}>
          {errors.non_field_errors.map(item => (
            <Text style={styles.errorMessageTextStyle} key={item}>
              {item}
            </Text>
            
          ))}
        
        </View>
      );
    }
    return message;
  }

  getErrorMessageByField(field) {
    //  Check erreurs
    //   message erreur du backend
    let message = null;
    if (this.state.errors[field]) {
      message = (
        <View style={styles.errorMessageContainerStyle}>
          {this.state.errors[field].map(item => (
            <Text style={styles.errorMessageTextStyle} key={item}>
              {item}
            </Text>
          ))}
        </View>
      );
    }
    return message;
  }
// Rendu page de connexion

  render() {
    const { navigation } = this.props;
    const {isLoading} = this.state;

    return (
      <View style={styles.containerStyle}>
        <Spinner visible={isLoading} />

        {!this.state.isAuthorized ? <View>
          <View style={styles.logotypeContainer}>
            <Image
              source={require('../assets/My_Car.png')}
              style={styles.logotype}
            />
          </View>
          <Text style={styles.titleid} >Renseignez vos identifiants</Text>
          <TextInput
            style={styles.input}
            value={this.state.username}
            maxLength={256}
            placeholder= "Identifiant"
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="next"
            onSubmitEditing={event =>
              this.passwordInput.wrappedInstance.focus()
            }
            onChangeText={this.onUsernameChange}
            underlineColorAndroid="transparent"
            placeholderTextColor="#999"
          />

          {this.getErrorMessageByField('username')}

          <TextInput
            ref={node => {
              this.passwordInput = node;
            }}
            style={styles.input}
            value={this.state.password}
            maxLength={40}
            placeholder="Mot de passe"
            onChangeText={this.onPasswordChange}
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="done"
            blurOnSubmit
            onSubmitEditing={this.onPressLogin.bind(this)}
            secureTextEntry
            underlineColorAndroid="transparent"
            placeholderTextColor="#999"
          />

          {this.getErrorMessageByField('password')}

          {this.getNonFieldErrorMessage()}

          

          <TouchableOpacity
            style={styles.loginButton}
            onPress={this.onPressLogin.bind(this)}>
            <Text style={styles.loginButtonText}  >CONNEXION</Text>
          </TouchableOpacity>
          </View> : <View><Text>{}</Text></View>}
      </View>
    );
  }
}




const utils = {
  colors: {primaryColor: '#af0e66'},
  dimensions: {defaultPadding: 12},
  fonts: {largeFontSize: 18, mediumFontSize: 16, smallFontSize: 12},
};

//STYLE
const styles = {
  innerContainer: {
    marginBottom: 32,
  },
  logotypeContainer: {
    alignItems: 'center',
  },
  logotype: {
    maxWidth: 280,
    maxHeight: 100,
    resizeMode: 'contain',
    alignItems: 'center',
  },
  containerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f6f6f6',
  },
  input: {
    height: 50,
    padding: 12,
    backgroundColor: 'white',
    borderRadius: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    marginBottom: utils.dimensions.defaultPadding,
  },
  loginButton: {
    borderColor: utils.colors.primaryColor,
    borderWidth: 2,
    padding: utils.dimensions.defaultPadding,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  loginButtonText: {
    color: utils.colors.primaryColor,
    fontSize: utils.fonts.mediumFontSize,
    fontWeight: 'bold',
  },
  errorMessageContainerStyle: {
    marginBottom: 8,
    backgroundColor: '#fee8e6',
    padding: 8,
    borderRadius: 4,
  },
  oublie: {
    color: "#A2273C",
    fontStyle: "italic",
    marginTop: 10,
    marginLeft: 10,
  },
  errorMessageTextStyle: {
    color: '#db2828',
    textAlign: 'center',
    fontSize: 12,
  },
  titleid: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 70,
    marginBottom: 70,
  },

};

export default LoginView;