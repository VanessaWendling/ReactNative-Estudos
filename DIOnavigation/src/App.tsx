import React from 'react';
import { StatusBar, View } from 'react-native';
import Router from './router';

export function App() {
  return (
    <>
      <StatusBar barStyle="dark-content"  />
      <Router />
    </>
  );
}