import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Estilos de CSS no se aplican en React Native, se deben convertir a estilos de React Native

const menuItems = [
    {
        title: "Consejo",
        href: "/dashboard",
        Icon: "bubble-chart",
    },
    {
        title: "Consejo",
        href: "/PageFirstProject",
        Icon: "bubble-chart",
    },
    {
        title: "Consejo",
        href: "/teams",
        Icon: "bubble-chart",
    },
    {
        title: "Consejo",
        href: "/dashboard",
        Icon: "bubble-chart",
    },
    {
        title: "Consejo",
        href: "/PageFirstProject",
        Icon: "bubble-chart",
    },
    {
        title: "Consejo",
        href: "/teams",
        Icon: "bubble-chart",
    },
];

const Slide = () => {
    const navigation = useNavigation();

    const logout = () => {
        // Implementación de logout
    };

    const handleMenuPress = (item) => {
        if (item.title === "Usuarios") {
            navigation.navigate("Usuarios"); // Reemplaza "UsuariosPage" con el nombre de tu pantalla de usuarios
        } else {
            // Manejar la navegación para otros elementos del menú si es necesario
        }
    };

    return (
        <View style={styles.menuContainer}>
            <View style={styles.logoSection}>
                <Image source={require("../public/images/logo-removebg-preview.png")} style={styles.logoImage} />
            </View>

            <ScrollView style={styles.navSection}>
                {menuItems.map((item,Index) => (
                        <TouchableOpacity key={Index} style={styles.auto} onPress={() => handleMenuPress(item)}>
                                <Icon name={item.Icon} size={35} color="#fff"/>
                            <View style={styles.columna}>
                                <Text style={styles.logoutText}>{item.title}</Text>
                            </View>
                        </TouchableOpacity>

                ))}

                {/* Logout */}
                
            </ScrollView>
            <TouchableOpacity onPress={() => logout()} style={styles.logoutLink}>
                    <View>
                        <Icon name="logout" size={45} color="#fff" />
                    </View>
                    <View style={styles.buttom}>
                        <Text style={styles.logoutText}>Salir</Text>
                    </View>
                </TouchableOpacity>
        </View>
    );
};

export default Slide;
const styles = StyleSheet.create({
    columna:{
        flexDirection:"column",
        flex:1,
        height:"100%",
        justifyContent:"center",
        alignContent:"center",
        marginLeft:10
    },
    auto: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height:50,
        marginBottom:10
    },
    menuContainer: {
        position: "absolute",
        backgroundColor: '#673C18',
        height: "100%",
        maxWidth: 350,
        width: "60%",
        padding: 20,
        zIndex: 100
    },
    logoSection: {
        marginTop:50,
        flexDirection: 'column',
        alignItems: 'center',
    },
    logoSgp: {
        maxWidth: '30%',
        height: 'auto',
    },
    logoTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 30,
        fontFamily:"sans-serif"
    },
    profileSection: {
        marginBottom: 30,
    },
    profileText: {
        fontSize: 16,
        color: '#646c8b',
    },
    profileLink: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    logoImage: {
        width: 150,
        height: 150,
        borderRadius: 50,
        marginBottom: 5
    },
    profileName: {
        fontSize: 16,
        color: '#ffffff',
    },
    navSection: {
        flex: 1,
        flexGrow:1,
        height:"100%"
    },
    logoutLink: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    button: {
        marginLeft: 10,
    },
    logoutText: {
        fontSize: 25,
        marginLeft:5,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    logoutSubText: {
        color: '#94a3b8',
        fontSize: 16,
    },
});