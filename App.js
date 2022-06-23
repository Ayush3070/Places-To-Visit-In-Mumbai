import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./screens/Home";
import marinedrive from "./screens/marinedrive";
import worliseaface from "./screens/worliseaface";
import JuhuBeach from "./screens/JuhuBeach";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="marinedrive" component={marinedrive} />
        <Stack.Screen name="worliseaface" component={worliseaface} />
          <Stack.Screen name="JuhuBeach" component={JuhuBeach} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;