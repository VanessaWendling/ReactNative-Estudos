import React from 'react';
import { Router } from './routes';
import 'react-native-gesture-handler';
import firebase from '@react-native-firebase/app';


export function App() {

  const credentials = {
    clientId: '',
    appId: '1083359105473',
    apiKey: 'AIzaSyDVl1sapge416onMij77nXW-1G7f7nDI78',
    databaseURL: '',
    storageBucket: '',
    messagingSenderId: '',
    projectId: '',
  };

  firebase.initializeApp(credentials);

  return (
    <Router />
  );
}