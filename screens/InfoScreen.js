import * as React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Platform, Image, ImageBackground, StatusBar, TouchableOpacity } from 'react-native';
import { loadAsync } from 'expo-font';
import { Header } from '@rneui/themed';

export default class InfoScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fontLoaded: false,
        }
    }

    loadFonts = async () => {
        await loadAsync({
            "MartianMonoRegular": require("../assets/fonts/static/MartianMono-Regular.ttf")
        });

        this.setState({
            fontLoaded: true,
        })
    }

    componentDidMount() {
        this.loadFonts()
    }

    render() {
        if (!this.state.fontLoaded) {
            return (
                <View>
                    <Text>Loading...</Text>
                </View>
            );
        }

        return (
            <SafeAreaView style={styles.container}>
                <StatusBar backgroundColor="black" />
                <ImageBackground style={{ flex: 1 }} source={require("../assets/images/messier-87_info_wallpaper.png")}>
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={() => {
                            this.props.navigation.navigate("CharlesMessierInfo")
                        }}
                    >
                        <Text style={styles.btnText}>About Charles Messier</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={() => {
                            this.props.navigation.navigate("MessierObjInfo")
                        }}
                    >
                        <Text style={styles.btnText}> About Messier Objects </Text>
                    </TouchableOpacity>
                </ImageBackground>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
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
    btnIcon: {
        resizeMode: 'contain',
        width: 60,
        height: 60,
        right: -10
    },

})