import React from 'react';
import { GestureHandlerRootView} from 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Index from './pages/Index';
import Ganancia from './pages/Ganancia';
import Competencia from './pages/Competencia';
import Consejos from './pages/Consejos';
import Inventario from './pages/Inventario';
import Menu from './pages/Menu';
 
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="Index"
          component={Index}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Ganancia"
          component={Ganancia}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Competencia"
          component={Competencia}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name="Consejos"
          component={Consejos}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name="Inventario"
          component={Inventario}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{headerShown:false}}
        />
      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default App;