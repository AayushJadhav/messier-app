import * as React from 'react';
import {
    View,
    Text,
    Image,
    Platform,
    StatusBar,
    SafeAreaView,
    StyleSheet,
    ScrollView,
    FlatList
} from 'react-native';
import { loadAsync } from 'expo-font';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

const info = require("./CharlesMessierInfo.json");

export default class CharlesMessierInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fontLoaded: false,
        }
    }

    loadFonts = async () => {
        await loadAsync({
            "MartianMonoRegular": require("../assets/fonts/static/MartianMono-Regular.ttf"),
            "MartianMonoBold": require("../assets/fonts/static/MartianMono-Bold.ttf"),
            "MartianMonoCondensed": require("../assets/fonts/static/MartianMono-Thin.ttf")
        });

        this.setState({
            fontLoaded: true
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
            <View style={styles.container}>
                <SafeAreaView style={styles.androidSafeArea} />
                <ScrollView>
                    <View style={styles.infoContainer}>
                        <View style={styles.imageAndTitleContainer}>
                            <Image
                                source={require("../assets/images/Charles_Messier.jpg")}
                                style={styles.charlesMessierImage}
                            ></Image>
                            <Text style={styles.infoTitleText}>{info.title}</Text>
                        </View>
                        <Text></Text>
                        <Text style={styles.infoBody}>{info['para-1']}</Text>
                        <Text></Text>
                        <Text style={styles.infoHeader}>{info['header-1']}</Text>
                        <Text style={styles.infoBody}>{info['para-2']}</Text>
                        <Text style={styles.infoBody}>{info['para-3']}</Text>
                        <Text style={styles.infoBody}>{info['para-4']}</Text>
                        <Text></Text>
                        <Text style={styles.infoBody}>{info['line-header']}</Text>
                        <Text style={styles.infoBody}>→ {info['list-of-comets']['0']}</Text>
                        <Text style={styles.infoBody}>→ {info['list-of-comets']['1']}</Text>
                        <Text style={styles.infoBody}>→ {info['list-of-comets']['2']}</Text>
                        <Text style={styles.infoBody}>→ {info['list-of-comets']['3']}</Text>
                        <Text style={styles.infoBody}>→ {info['list-of-comets']['4']}</Text>
                        <Text style={styles.infoBody}>→ {info['list-of-comets']['5']}</Text>
                        <Text style={styles.infoBody}>→ {info['list-of-comets']['6']}</Text>
                        <Text style={styles.infoBody}>→ {info['list-of-comets']['7']}</Text>
                        <Text style={styles.infoBody}>→ {info['list-of-comets']['8']}</Text>
                        <Text style={styles.infoBody}>→ {info['list-of-comets']['9']}</Text>
                        <Text style={styles.infoBody}>→ {info['list-of-comets']['10']}</Text>
                        <Text style={styles.infoBody}>→ {info['list-of-comets']['11']}</Text>
                        <Text style={styles.infoBody}>→ {info['list-of-comets']['12']}</Text>
                        <Text style={styles.infoBody}>{info['another-comet']}</Text>
                        <Text></Text>
                        <Text style={styles.infoBody}>{info['para-5']}</Text>
                        <Text style={styles.infoBody}>{info['para-6']}</Text>
                        <Text></Text>
                        <Text style={styles.credits}>{info['credits']}</Text>
                    </View>
                </ScrollView>
            </View>
        )
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
    charlesMessierImage: {
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