# finansku# Clone repository
git clone https://github.com/dandhypratama021-cell/finansku.git
cd finansku

# Install dependencies
npm install

# Jalankan dengan Expo
npx expo start

# Atau dengan React Native CLI
npx react-native run-android  # atau run-ios{\n  "name": "finansku",\n  "version": "1.0.0",\n  "private": true,\n  "dependencies": {\n    "@react-navigation/native": "^6.0.0",\n    "@react-navigation/stack": "^6.0.0",\n    "react": "^17.0.2",\n    "react-native": "^0.64.0",\n    "react-native-gesture-handler": "^1.10.3",\n    "react-native-reanimated": "^2.3.1",\n    "react-native-safe-area-context": "^3.3.2",\n    "react-native-screens": "^3.9.0",\n    "react-native-vector-icons": "^9.0.0",\n    "axios": "^0.24.0"\n  },\n  "devDependencies": {\n    "@babel/core": "^7.14.3",\n    "@babel/preset-env": "^7.14.3",\n    "@babel/preset-react": "^7.14.3",\n    "babel-plugin-transform-remove-console": "^6.9.4"\n  }\n}import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import TransactionListScreen from './src/screens/TransactionListScreen';
import SearchScreen from './src/screens/SearchScreen';
import NotificationsScreen from './src/screens/NotificationsScreen';
import SettingsScreen from './src/screens/SettingsScreen';

const Stack = createStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          animationEnabled: true,
        }}
      >
        {!isLoggedIn ? (
          <>
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register"
              component={RegisterScreen}
              options={{ title: 'Daftar Akun' }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Dashboard"
              component={DashboardScreen}
              options={{ title: 'Dashboard' }}
            />
            <Stack.Screen
              name="TransactionList"
              component={TransactionListScreen}
              options={{ title: 'Daftar Transaksi' }}
            />
            <Stack.Screen
              name="Search"
              component={SearchScreen}
              options={{ title: 'Cari Transaksi' }}
            />
            <Stack.Screen
              name="Notifications"
              component={NotificationsScreen}
              options={{ title: 'Notifikasi' }}
            />
            <Stack.Screen
              name="Settings"
              component={SettingsScreen}
              options={{ title: 'Pengaturan' }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
