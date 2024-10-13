import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function RegistroUserScreen() {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    function notificar(titulo, msg) {
        if (Platform.OS === 'android') {
            Alert.alert(titulo, msg);
        } else {
            Alert.alert(titulo, msg);
        }
    }

    const handleRegistro = () => {
        notificar('Registro', nombre + '\n' + email + '\n' + password)
    }

    const verLogin = () => { 
        navigation.navigate('LoginScreen');
    }

    return (
        <View style={styles.container}>

            <View style={styles.inputContainer}>
                <TextInput
                    placeholder='Ingresa tu nombre'
                    keyboardType='default'
                    value={nombre}
                    onChangeText={(text) => setNombre(text)}
                    style={styles.textInput}
                />
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    placeholder='Ingresa tu correo'
                    keyboardType='email-address'
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    style={styles.textInput}
                />
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    placeholder='Ingresa tu contraseña'
                    keyboardType='default'
                    value={password}
                    secureTextEntry
                    onChangeText={(text) => setPassword(text)}
                    style={styles.textInput}
                />
            </View>

            <TouchableOpacity style={styles.button}
                onPress={handleRegistro}>
                <Text style={styles.text}>
                    Registrarse
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonLogin}
                onPress={verLogin}>
                <Text style={styles.text}>
                    Iniciar sesión
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#fff',
        fontWeight: 'bold'
    },
    button: {
        backgroundColor: '#08854e',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonLogin: {
        backgroundColor: '#115bae',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputContainer: {
        flexDirection: 'row',
        alignContent: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 7,
        marginBottom: 10,
        width: '80%',
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: '#fff',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        position: 'relative',
    },
    textInput: {
        flex: 1,
        height: 50,
        marginLeft: 0,
        fontSize: 14,
        color: '#000',
    }
});

export default RegistroUserScreen;