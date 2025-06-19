import { Alert, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { validEmail } from '../utils/validation';
import user from '../user.json'

const LoginScreen = () => {

  //states declare
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [hidePass, sethidePass] = useState(true);


  //Login BTN FUNCTION
  const handleLogin = () => {

    //email validation
    if(!validEmail(email)){
        Alert.alert('Invalid Email', 'Please enter a valid email.')
        return;
    }

    //password validation [only length]
    if(password.length < 6){
        Alert.alert('Invalid Password Length', 'Password must be 6 characters long.')
        return;
    }

    //local .JSON file user details check
    if(email === user.email && password === user.password){
        Alert.alert('Login Successful', `Email: ${email} \nPassword: ${password}`)
        setemail('')
        setpassword('')
    }else{
        Alert.alert('User Not Found!', `Email: ${email} \nPassword: ${password} \n\n👉 Click 'Forget Password' to show login details.`)
        return
    }
  }


  //Forget password shows .JSON file user details
  const handleForget = () => {
    Alert.alert(
    'Recovery Info',
    `Email: ${user.email}\nPassword: ${user.password}`
  );
  }


  //Sign UP btn for future Update
  const handleSignUp = () => {
    Alert.alert(
    'Unavailable Feature',
    `This Button Currently not using for sign up because of local hardcoded dataset`
  );
  }


  //Main app
  return (
    <SafeAreaView style={styles.container}>
        <Image source={require('../assets/logoApp.png')} style={styles.image} />
      <Text style={styles.title}>Login</Text>

      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setemail}
        keyboardType="email-address"
        placeholderTextColor={'gray'}
        color='black'
      />

      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Password"
          style={styles.inputPassword}
          secureTextEntry={hidePass}
          value={password}
          onChangeText={setpassword}
          placeholderTextColor={'gray'}
          color='black'
        />
        <Pressable onPress={() => sethidePass(!hidePass)}>
          <Icon
            name={hidePass ? 'visibility-off' : 'visibility'}
            size={24}
            color="#555"
          />
        </Pressable>
      </View>

      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>

      <View style={styles.links}>
        <Pressable onPress={handleForget}>
        <Text style={styles.link}>Forgot Password?</Text>
        </Pressable>
        <Pressable onPress={handleSignUp}>
        <Text style={styles.link}>Sign Up</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white'
  },
  image:{
    width: 165,
    height: 130,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    borderWidth: 2,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    width: '100%',
  },
  inputPassword: {
    flex: 1,
    paddingVertical: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  links: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  link: {
    color: '#007AFF',
  },
});
