import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import {useState} from 'react';
import { FIREBASE_AUTH } from '../FirebaseConfig';
import { TextInput } from 'react-native';
import { assets} from '../constants';
import { ActivityIndicator, Button } from 'react-native';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import Home from './Home';
import {useNavigation} from '@react-navigation/native'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const auth = FIREBASE_AUTH;
    const navigation = useNavigation();

    const signIn = async () => {
        setLoading(true);
        try{
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log(response);
        }catch(error){
            console.log(error);
            alert("Sign in failed " + error.message);
        }finally{
            setLoading(false);
        }
    }


    const signUp = async () => {
        setLoading(true);
        try{
            const response = await createUserWithEmailAndPassword(auth, email, password);
            console.log(response);
            alert('Check your emails!');
        }catch(error){
            console.log(error);
            alert('Sign in failed: ' + error.message);
        }finally{
            setLoading(false);
        }
    }

    const redirectHome = () => {
        navigation.navigate(Home);
    }

  return (
    <View style={styles.container}>
        <View style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems:'center',
            paddingBottom: 50
        }}>
        <Image 
            source={assets.logo}
            resizeMode='contain'
            style={{
                width: 100, 
                height:100,
                justifyContent: 'center',
                alignItems:'center'
            }}
        />
        </View>
        <TextInput 
        value={email}
       style={styles.input} placeholder='Email' autoCapitalize='none' onChangeText={(text) => setEmail(text)}></TextInput>
          <TextInput 
        value={password}
        style={styles.input} secureTextEntry={true} placeholder='password' autoCapitalize='none' onChangeText={(text) => setPassword(text)}></TextInput>
    
            {/* {loading ? <ActivityIndicator size="large" color="#0000ff"/> : <>
                <Button title="Login"/>
            </>} */}

            {loading ? (
                    <ActivityIndicator size="large" color="#0000ff"/>
                ) : (
                    <>
                        <Button style={{
                            marginVertical: 10
                        }}
                        title="Login" onPress={redirectHome}/>
                        <Button title="Create Account" onPress={signUp} />
                    </>
                )
            }
    </View>
  );
};

export default Login


const styles = StyleSheet.create(
    {
        container: {
            marginHorizontal: 20,
            flex: 1,
            justifyContent: 'center',
        },
        input:{
            marginVertical: 4,
            height: 50,
            borderWidth: 1,
            borderRadius: 4,
            padding: 10,
            backgroundColor: '#fff',
        }
    }
)