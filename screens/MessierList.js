import * as React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Platform } from 'react-native';

export default class MessierListScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    MessierListScreen!
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "black",
    }
})