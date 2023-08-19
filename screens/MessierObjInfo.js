import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Platform,
    StatusBar,
    Image,
    SafeAreaView,
    ScrollView
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { loadAsync } from 'expo-font';

const info = require("./MessierObjInfo.json");

export default class MessierObjInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fontsLoaded: false,
        }
    }

    async loadFonts() {
        await loadAsync({
            "MartianMonoRegular": require("../assets/fonts/static/MartianMono-Regular.ttf"),
            "MartianMonoBold": require("../assets/fonts/static/MartianMono-Bold.ttf"),
            "MartianMonoCondensed": require("../assets/fonts/static/MartianMono-Thin.ttf")
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
                <View style={styles.container}>
                    <SafeAreaView style={styles.androidSafeArea} />
                    <ScrollView>
                        <View style={styles.infoContainer}>
                            <View style={styles.imageAndTitleContainer}>
                                <Image
                                    style={styles.messierImage}
                                    source={require("../assets/images/messierImg/m-1.jpg")}
                                ></Image>
                                <Text style={styles.infoTitleText}>{info.title}</Text>
                            </View>
                            <Text></Text>
                            <Text style={styles.infoBody}>{info['para-1']}</Text>
                            <Text></Text>
                            <Text style={styles.infoBody}>{info['para-2']}</Text>
                            <Text></Text>
                            <Text style={styles.infoBody}>{info['para-3']}</Text>
                            <Text></Text>
                            <Text style={styles.credits}>{info.credits}</Text>
                        </View>
                    </ScrollView>
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
    androidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight + 30 : 0 + 30
    },
    infoContainer: {
        flex: 0.92,
        backgroundColor: "#262626",
        borderRadius: 20
    },
    imageAndTitleContainer: {
        flexDirection: "row"
    },
    messierImage: {
        width: RFValue(160),
        height: RFValue(160),
        resizeMode: "contain",
        borderRadius: 15,
        marginTop: 5,
        marginHorizontal: 5
    },
    infoTitleText: {
        fontFamily: "MartianMonoBold",
        color: "#eeeeee",
        fontSize: RFValue(30),
        paddingVertical: 50,
    },
    infoHeader: {
        fontSize: RFValue(20),
        color: "#eeeeee",
        fontFamily: "MartianMonoBold"
    },
    infoBody: {
        fontFamily: "MartianMonoRegular",
        color: "#eeeeee"
    },
    credits: {
        fontFamily: "MartianMonoCondensed",
        color: "#eeeeee"
    }
})