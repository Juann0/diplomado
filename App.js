// Nuestras librerias
import { enableScreens } from "react-native-screens";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
// Nuestras librerias

//Nuestras vistas
import RegistroUserScreen from "./app/RegistroUserScreen";
import LoginScreen from "./app/LoginScreen";
//Nuestras vistas

enableScreens(); //Habilitar nuestras pantallas o screens

const Stack = createStackNavigator(); //Creamos un stack navigator

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>

          <Stack.Screen name="RegistroUserScreen"
            component={RegistroUserScreen}
            options={{ headerShown: true, headerTitle: 'Registro de usuario' }} />

          <Stack.Screen name="LoginScreen"
            component={LoginScreen}
            options={{ headerShown: true, headerTitle: 'Inicio de sesión' }} />

        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}