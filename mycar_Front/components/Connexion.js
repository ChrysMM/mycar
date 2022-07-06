// import React from "react";
 
// import { TextInput, View, Text, StyleSheet} from 'react-native'
// import { useNavigation } from '@react-navigation/native';
// import axios from 'axios';

// const URL = "http://localhost:8080/api/auth/signin"

// export default function Connexion() {
//     const [post, setPost] = React.useState(null);

//     React.useEffect(() => {
//     axios({method:'post', url:URL, data:{username: "Legrant", password:"234mlkj"}}).then((response) => {
//         setPost(response.data);
//         // console.log(response);
//         // console.log("connexion ok")
//     }).catch((err)=>{
//         console.log("error", err);
//     });
//   }, []);
//   if (!post) return null;

//     const navigation = useNavigation();
//     function navigateConnexion() {
//         navigation.navigate("date");
//     }
//     function navigateOublie() {
//         navigation.navigate("Oublie");
//     }
//         return(
// <View style={style.view}>
//     <Text style={style.titleid} >Renseignez vos identifiants</Text>
//     <TextInput style={style.title} placeholder="UserName"></TextInput>

//     <TextInput style={style.title} placeholder="Mot de passe" secureTextEntry={true}></TextInput>
//     <Text style={style.oublie} onPress={() => navigateOublie()}>Mot de passe oublié? </Text>

//     <View>
//     <Text style={style.connexion}  onPress= {()=>navigateConnexion()}> Connexion</Text>
//     </View>
// </View>
//             ); 
//         }
    
// const style = StyleSheet.create({
//   view: {
//     alignItems: "center",
//   },
//   titleid: {
//     fontSize: 22,
//     fontWeight: "bold",
//     textAlign: "center",
//     marginTop: 70,
//     marginBottom: 70,
//   },
//   title: {
//     fontSize: 14,
//     marginBottom: 3,
//     marginTop: 10,
//     backgroundColor: "#F5F5F5",
//     height: 55,
//     borderRadius: 10,
//     fontWeight: "bold",
//     width: 350,
//     marginLeft: 7,
//     fontStyle: "italic",
//     alignItems: "center",
//   },

//   oublie: {
//     color: "#A2273C",
//     fontStyle: "italic",
//     marginTop: 10,
//     marginLeft: 10,
//   },

//   connexion: {
//     backgroundColor: "#A2273C",
//     textAlign: "center",
//     width: 120,
//     height: 30,
//     borderRadius: 7,
//     elevation: 3,
//     marginTop: 58,
//     color: "white",
//     fontWeight: "bold",
//     paddingTop: 4,
//     paddingRight: 3,
//     alignItems: "center",
//   },
// });
   
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

const initialState = {
  username: '',
  password: '',
  errors: {},
  isAuthorized: false,
  isLoading: false,
};

class Connexion extends Component {
  state = initialState;

  componentWillUnmount() {}

  onUsernameChange = username => {
    this.setState({username});
  };

  onPasswordChange = password => {
    this.setState({password});
  };

  onPressLogin() {
    const {username, password} = this.state;
    const payload = {username, password};
    console.log(payload);

    const onSuccess = ({data}) => {
      //   Token   success
      setClientToken(data.token);
      this.setState({isLoading: false, isAuthorized: true});
    };

    const onFailure = error => {
      console.log(error && error.response);
      this.setState({errors: error.response.data, isLoading: false});
    };

    // SPINER
    this.setState({isLoading: true});

    APIKit.post('/api/auth/signup', payload)
      .then(onSuccess)
      .catch(onFailure);
  }

  getNonFieldErrorMessage() {
    // ERREURS
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
    //   message r backend
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

  render() {
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

          <TextInput
            style={styles.input}
            value={this.state.username}
            maxLength={256}
            placeholder="Enter username..."
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
            placeholder="Enter password..."
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
            <Text style={styles.loginButtonText}>LOGIN</Text>
          </TouchableOpacity>
        </View> : <View><Text>Successfully authorized!</Text></View>}
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
  errorMessageTextStyle: {
    color: '#db2828',
    textAlign: 'center',
    fontSize: 12,
  },
};

export default Connexion;