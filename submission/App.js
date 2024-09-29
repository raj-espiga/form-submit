import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, TextInput, TouchableOpacity, Button, View } from 'react-native';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState('');

  const validateForm = () => {
    let errors = {};

    if (!username) errors.username = "Username is required";
    if (!password) errors.password = "Password is required";

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if(validateForm()) {
      console.log("Submitted", username, password);
      setUsername('');
      setPassword('');
      setErrors('');
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.signinName}>Sign In</Text>
      
      <View>
        <Text style={styles.nameTitle}>Username</Text>
        <TextInput 
        style={styles.input}
        placeholder='Username'
        onChangeText={setUsername}>
        </TextInput>
        {errors.username ? (
          <Text style={styles.errorText}>{errors.username}</Text>
        ) : null}
      </View>

      <View>
        <Text style={styles.nameTitle}>Password</Text>
        <TextInput 
        style={styles.input}
        placeholder='Enter your Password'
        onChangeText={setPassword} />
        {errors.password ? (
          <Text style={styles.errorText}>{errors.password}</Text>
        ) : null}
      </View>

      <View style={{width: '80%', marginLeft: '10%'}}>
        <Button title='Login' onPress={handleSubmit} />
      </View>

      <Text style={styles.textOR}>OR</Text>

      <TouchableOpacity style={styles.facebookLoginButton}>
        <Text style={styles.textButton}>Login with Facebook</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  nameTitle: {
    marginLeft: '18%',
    fontWeight: 'bold',
    fontSize: 20,
  },
  signinName: {
    padding: 20,
    fontSize: 40,
    fontWeight: 'bold',
    color: 'red',
    marginTop: 70
  },
  input: {
    height: 40,
    width: 290,
    marginLeft: 65,
    margin: 12,
    padding: 10,
    borderRadius: 20,
    borderWidth: 1
  },
  textButton: {
    color: 'white'
  },
  textOR: {
    display: 'flex',
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold'
  },
  facebookLoginButton: {
    backgroundColor: '#1877F2',
    borderRadius: 20,
    width: 220,
    display: 'flex',
    alignItems: 'center',
    marginLeft: 100,
    paddingVertical: 10,
    marginTop: 20
  },
  errorText: {
    color: 'red',
    marginLeft: '20%',
    marginBottom: 20,
  }
});