import { useFonts } from 'expo-font';
import * as React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Platform, TouchableOpacity, StatusBar, Image, ImageBackground, Alert } from 'react-native';
import { loadAsync } from 'expo-font';
import axios from 'axios';

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            fontsLoaded: false,
            imageUrl: null
        }
    }

    loadFonts = async () => {
        await loadAsync({
            "MartianMonoRegular": require("../assets/fonts/static/MartianMono-Regular.ttf")
        })
        this.setState({
            fontsLoaded: true
        })
    }

    componentDidMount() {
        this.loadFonts()
    }

    render() {
        if (!this.state.fontsLoaded) {
            return (
                <View>
                    <Text>Loading...</Text>
                </View>
            );
        }

        return (
            <SafeAreaView style={styles.container}>
                <StatusBar backgroundColor="black" />
                <ImageBackground source={require("../assets/images/bg_img_home_screen.png")} style={{ flex: 1 }}>
                    <TouchableOpacity style={styles.btn}
                        onPress={() => {
                            this.props.navigation.navigate("MessierList")
                        }}>
                        <Image style={styles.messierBtnIcon} source={require("../assets/icons/astronomy.png")}></Image>
                        <Text style={styles.btnText}>Messier Objects</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}
                        onPress={() => {
                            this.props.navigation.navigate("MarsImages")
                        }}>
                        <Image style={styles.marsBtnIcon} source={require("../assets/icons/mars_rover.png")}></Image>
                        <Text style={styles.btnText}>Mars Images</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}
                        onPress={() => {
                            this.props.navigation.navigate("Info")
                        }}>
                        <Image source={require("../assets/icons/info.png")} style={styles.infoBtnIcon}></Image>
                        <Text style={styles.infoBtnText}>Info</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        flex: 1,
    },
    titleBar: {
        flex: 0.15,
        justifyContent: 'center',
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "white",
        textAlign: 'center'
    },
    titleText: {
        fontFamily: "MartianMonoRegular",
        color: "white",
        alignSelf: 'center',
    },
    btn: {
        flex: 0.2,
        marginRight: 50,
        marginLeft: 50,
        marginTop: 100,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 50,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    btnText: {
        color: "white",
        marginLeft: 10,
        fontFamily: "MartianMonoRegular"
    },
    messierBtnIcon: {
        resizeMode: 'contain',
        width: 60,
        height: 60,
        right: -10
    },
    marsBtnIcon: {
        resizeMode: 'contain',
        width: 60,
        height: 60,
        right: 10
    },
    infoBtnIcon: {
        resizeMode: 'contain',
        width: 60,
        height: 60,
        right: 40,
        marginRight: 10
    },
    infoBtnText: {
        color: "white",
        marginLeft: 10,
        right: 20,
        fontFamily: "MartianMonoRegular"
    }
})