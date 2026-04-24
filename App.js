import React from 'react';
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