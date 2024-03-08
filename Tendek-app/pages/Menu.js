import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text, ImageBackground } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function Menu() {
    let arrayBtn = [
        { id: 1, name: "Ganancia", image: require('../public/images/ganancia.png') },
        { id: 2, name: "Competencia", image: require('../public/images/competencia.png') },
        { id: 3, name: "Consejos", image: require('../public/images/consejos.png') },
        { id: 4, name: "Inventario", image: require('../public/images/inventario.png') },
    ];
    const navigation = useNavigation();

    return (
        <ImageBackground
            source={require('../public/images/fondo.webp')}
            style={styles.container1}
            blurRadius={0}
        >
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate("Index")}>
                    <Image source={require("../public/images/salir_2-removebg-preview.png")} style={styles.imagensalir}></Image>
                </TouchableOpacity>
                <Image source={require("../public/images/logo-removebg-preview.png")} style={styles.imagenlogo}></Image>
                <View style={styles.headerDer}>
                    <TouchableOpacity>
                        <Image source={require("../public/images/ajuste-removebg-preview.png")} style={styles.imagenajuste}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require("../public/images/ayuda-removebg-preview.png")} style={styles.imagenayuda}></Image>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.container}>
                <View style={styles.container2}>
                    <View style={styles.row}>
                        {arrayBtn.slice(0, 2).map(button => (
                            <TouchableOpacity
                                key={button.id}
                                style={styles.button}
                                onPress={() => console.log(button.name)}
                            >
                                <Image source={button.image} style={styles.buttonImage} resizeMode="cover" />
                                <Text style={styles.buttonText}>{button.name}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                    <View style={styles.row}>
                        {arrayBtn.slice(2).map(button => (
                            <TouchableOpacity
                                key={button.id}
                                style={styles.button}
                                onPress={() => console.log(button.name)}
                            >
                                <Image source={button.image} style={styles.buttonImage} resizeMode="cover" />
                                <Text style={styles.buttonText}>{button.name}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
                <StatusBar style="auto" />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        width: '80%',
        height: '10%'
    },
    container1: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    container2: {
        backgroundColor: 'rgba(127, 127, 127, 0.5)',
        borderRadius: 20,
        width: '100%',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 150,
        borderRadius: 50,
        marginVertical: 5,
    },
    buttonImage: {
        width: '100%',
        height: '65%',
        borderRadius: 50,
    },
    buttonText: {
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 10,
        color: 'white'
    },
    imagenlogo: {
        width: 120,
        height: 100,
        marginRight: -50,
    },
    header: {
        display: 'flex',
        marginTop: 40,
        marginBottom: 240,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    imagensalir: {
        width: 60,
        height: 49,
    },
    imagenajuste: {
        width: 47,
        height: 46,
    },
    imagenayuda: {
        marginTop: -10,
        width: 75,
        height: 60,
    },
    headerDer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
});
