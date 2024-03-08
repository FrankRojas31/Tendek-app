import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text, ImageBackground } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Slide from './Slider';
import { ScrollView } from 'react-native';

export default function Inventario() {
    let arrayBtn = [
        { id: 1, name: "Ganancia", image: require('../public/images/ganancia.png') },
        { id: 2, name: "Competencia", image: require('../public/images/competencia.png') },
        { id: 3, name: "Consejos", image: require('../public/images/consejos.png') },
        { id: 4, name: "Inventario", image: require('../public/images/inventario.png') },
    ];
    const navigation = useNavigation();
    const [side, setSide] = useState(false);

    return (
        <>
        {side ?
                <>
                    <Slide></Slide>
                    <TouchableOpacity style={styles.fondo} onPress={() => setSide(false)}></TouchableOpacity>
                </>
                :
                <></>
            }
        <ImageBackground
            source={require('../public/images/fondo.webp')}
            style={styles.container1}
            blurRadius={0}
        >
            
            <View style={styles.header}>
                
            <TouchableOpacity onPress={() => navigation.navigate("Index")}>
                        <Image source={require("../public/images/salir_2-removebg-preview.png")} style={styles.imagenajuste}></Image>
                    </TouchableOpacity>
                <View style={styles.headerDer}>
                <TouchableOpacity>
                        <Image source={require("../public/images/ayuda-removebg-preview.png")} style={styles.imagenayuda}></Image>
                    </TouchableOpacity>
                    
                </View>
            </View>
            <Text style={styles.titulo} blurRadius={4}>Inventario</Text>
            <View style={styles.container}>
                <ScrollView>
                    <Text style={styles.MenTexto}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.                     </Text>
                <StatusBar style="auto" />
                </ScrollView>
            
            </View>
        </ImageBackground>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:20,
        borderRadius:20,
        width: '90%',
        marginTop:50,
        marginBottom:50,
        backgroundColor:"#FCEBC8",
        color:"#673C18",
        textAlign:'justify',
        borderWidth:4,
        borderColor:'#EEB27F',
    },
    entrada: {
        width: '100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'space-between'
    },
    MenTitulo:{
        fontSize:25,
        marginBottom:5,
        fontWeight:'bold',
        color:"#673C18"
    },
    MenTexto:{
        fontSize:15,
        color:"#673C18"
    },
    mas: {
        fontSize:50,
        color:'#fff',
    },
    mas2: {
        transform: [{ rotate: '180deg' }],
        fontSize:50,
        marginTop:-10,
        marginBottom:5,
        color:'#fff',
    },
    input: {
        width: '90%',
        textAlign:'center',
        paddingVertical:10,
        fontSize:25,
        flexDirection:'row',
        borderRadius:1000,
        elevation:10,
        backgroundColor:"rgba(255, 255, 255, 0.9)",
    },
    mensaje: {
        height:"25%",
        borderTopWidth:10,
        borderTopColor:"#EEB27F",
        backgroundColor:"#FCEBC8",
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding:20,
        width: '100%',
    },
    titulo: {
        marginTop:20,
        backgroundColor:'#FCEBC8',
        color:"#673C18",
        borderRadius: 1000,
        textAlign:'center',
        width: '90%',
        paddingVertical:5,
        elevation: 10,
        fontSize:35,
        borderWidth:4,
        borderColor:'#EEB27F',
        fontWeight:'bold'
    },
    container1: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        minHeight:800
    },
    container2: {
        backgroundColor: 'rgba(103, 60, 24, 0.9)',
        borderRadius: 20,
        padding:30,
        width: '100%',
        height:"90%",
        alignItems: 'center',
        justifyContent: 'space-around',
        elevation: 10,
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
        color: 'white'
    },
    imagenlogo: {
        width: 120,
        height: 100,
        marginRight: -10,
    },
    header: {
        display: 'flex',
        marginTop: 40,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    imagensalir: {
        width: 60,
        height: 49,
    },
    imagenajuste: {
        width: 60,
        height: 49,
    },
    imagenayuda: {
        marginTop: -10,
        width: 75,
        height: 60,
    },
    headerDer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    fondo: {
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: "#0005",
        zIndex: 50,
        left:0
    },
});
