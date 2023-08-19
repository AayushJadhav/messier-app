import * as React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, StatusBar, SafeAreaView, TouchableOpacity } from 'react-native';
import { loadAsync } from 'expo-font';

export default class MarsImagesScreen extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            images: {},
            fontsLoaded: false,
        }
    }

    loadFonts = async () => {
        await loadAsync({
            "MartianMonoRegular": require("../assets/fonts/static/MartianMono-Regular.ttf")
        });
        this.setState({
            fontsLoaded: true
        })
    }

    componentDidMount() {
        this.loadFonts()
    }

    render() {
        if (this.state.fontsLoaded) {
            return (
                <SafeAreaView style={styles.container}>
                    <StatusBar backgroundColor="black" />
                    <ImageBackground source={require("../assets/images/mars_images_screen_wallpaper.png")}
                        style={{ flex: 1 }}
                    >
                        <Text>Import data from NASA's API and display images in gallery view, user can zoom it to fullscreen</Text>
                    </ImageBackground>
                </SafeAreaView>
            )
        } else {
            return (
                <View style={styles.container}>
                    <Text>Loading...</Text>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
    },
})