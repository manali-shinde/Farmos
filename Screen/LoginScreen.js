// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, {useState, createRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

import AsyncStorage from '@react-native-async-storage/async-storage'

import Loader from './Components/Loader';

const LoginScreen = ({navigation}) => {
  const [userPhone, setUserPhone] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');

  const phoneInputRef = createRef();
  const passwordInputRef = createRef();

  const handleSubmitPress = () => {
    setErrortext('');
    if (!userPhone) {
      alert('Please fill Mobile No.');
      return;
    }
    if (!userPassword) {
      alert('Please fill Password');
      return;
    }
    if(userPhone){
      if(userPhone.length == 10)
      {
        navigation.replace('DrawerNavigationRoutes');
      }
      else{
        console.warn("Please provide proper Mobile No. ")
      }
    }
  }


  return (
    <View style={styles.mainBody}>
      <Loader loading={loading} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <View>
          <KeyboardAvoidingView enabled>
            <View style={{alignItems: 'center'}}>
                <Text style={styles.logo}>FARMOS</Text>
                <Text  style={styles.head}>Social Media For Farmers</Text>
            </View>
            <View style={styles.inputView}>
              <TextInput
                style={styles.inputText}
                onChangeText={(UserEmail) =>
                  setUserEmail(UserEmail)
                }
              onChangeText={(UserPhone) => setUserPhone(UserPhone)}
              underlineColorAndroid="#f000"
              placeholder="Enter Mobile No."
              placeholderTextColor="#8b9cb5"
              keyboardType= "number-pad"
              ref={phoneInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordInputRef.current &&
                passwordInputRef.current.focus()
              }
              blurOnSubmit={false}
              underlineColorAndroid="#f000"
              />
            </View>
            <View style={styles.inputView}>
              <TextInput
                style={styles.inputText}
                onChangeText={(UserPassword) =>
                  setUserPassword(UserPassword)
                }
                placeholder="Enter Password" //12345
                placeholderTextColor="#8b9cb5"
                keyboardType="default"
                ref={passwordInputRef}
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
                underlineColorAndroid="#f000"
                returnKeyType="next"
              />
            </View>
            {errortext != '' ? (
              <Text style={styles.errorTextStyle}>
                {errortext}
              </Text>
            ) : null}
            <TouchableOpacity
              style={styles.loginBtn}
              activeOpacity={0.5}
              onPress={handleSubmitPress}>
              <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
            <View style={styles.parent}>
              <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
               <Text style={styles.forgot}>Forgot Password?</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('RegisterFirstScreen')}>
                <Text style={styles.signup}>Create an Account</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: "#2DD0F3",
    alignContent: 'center',
    fontFamily:'Roboto'
  },
  logo:{
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 60,
    fontWeight: "bold",
    fontFamily:'Roboto',
    marginBottom:5
  },
  head: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 20,
    fontFamily:'Roboto',
    marginBottom:40
  },
  inputView:{
    marginLeft: 40,
    width:"80%",
    backgroundColor:"#ffff",
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"#000"
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#00FF85",
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginLeft: 40,
    marginBottom:20
  },
  loginText:{
    color:"white",
    justifyContent:"center",
    fontWeight: "bold",
    fontSize:20
  },
  forgot:{
    color:"white",
    fontSize:15,
    marginBottom:5,
    marginLeft:145,
    alignItems:"center",
  },
  signup:{
    color:"white",
    fontWeight: "bold",
    fontSize:20,
    justifyContent:"center",
    alignItems:"center",
    marginLeft:125,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
});