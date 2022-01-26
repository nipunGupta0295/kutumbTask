
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Users from './components/Users';



const App = () => {
  return (
    <ScrollView>
      <Users />
    </ScrollView>

  )
}

export default App;
