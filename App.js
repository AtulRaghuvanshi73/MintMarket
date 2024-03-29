
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { User } from 'firebase/auth'
import Home from './screens/Home';
import Details from './screens/Details';
import Login from './screens/Login';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from './FirebaseConfig';
import Mint from './components/Mint';

const Stack = createStackNavigator();



const theme ={
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent"
  }
}

// const projectId = '090ef6025b76598905f0f585acd29251'

// // 2. Create config
// const metadata = {
//   name: 'Web3Modal RN',
//   description: 'Web3Modal RN Example',
//   url: 'https://web3modal.com',
//   icons: ['https://avatars.githubusercontent.com/u/37784886'],
//   redirect: {
//     native: 'YOUR_APP_SCHEME://',
//     universal: 'YOUR_APP_UNIVERSAL_LINK.com'
//   }
// }



export default function App() {

  const [loaded] = useFonts({ 
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),

  });

  if(!loaded) return null;

  // const [user, setUser] = useState< User | null>(null);

  // useEffect(() => {
  //   onAuthStateChanged(FIREBASE_AUTH, (user) =>  {
  //     console.log('user', user);
  //   })
  // }, [])

  return (
  
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
        <Stack.Screen name="Home" component={Mint} options={{headerShown: false}} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

