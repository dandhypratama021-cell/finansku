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
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Handle login logic
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title="Login" onPress={handleLogin} />
            <Text style={styles.registerLink} onPress={() => navigation.navigate('Register')}> 
                Don't have an account? Register
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
    },
    registerLink: {
        marginTop: 15,
        textAlign: 'center',
        color: '#007BFF',
    },
});
cd finansku
npm install
npx expo start
export default LoginScreen;import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function RegisterScreen({ navigation }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = () => {
        if (!name || !email || !password || !confirmPassword) {
            Alert.alert('Error', 'Semua field harus diisi!');
            return;
        }
        if (password !== confirmPassword) {
            Alert.alert('Error', 'Password tidak cocok!');
            return;
        }
        Alert.alert('Berhasil', 'Akun berhasil dibuat! Silakan login.');
        navigation.navigate('Login');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Buat Akun Baru</Text>
            <TextInput style={styles.input} placeholder="Nama Lengkap" value={name} onChangeText={setName} />
            <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
            <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
            <TextInput style={styles.input} placeholder="Konfirmasi Password" value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry />
            <TouchableOpacity style={styles.button} onPress={handleRegister}>
                <Text style={styles.buttonText}>Daftar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.link}>Sudah punya akun? Login di sini</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30,
        color: '#2E7D32',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 15,
        marginBottom: 15,
        borderRadius: 8,
        backgroundColor: '#f9f9f9',
    },
    button: {
        backgroundColor: '#2E7D32',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    link: {
        color: '#2E7D32',
        textAlign: 'center',
        marginTop: 20,
        textDecorationLine: 'underline',
    },
});
