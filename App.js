import 'react-native-gesture-handler'
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { loadAsync } from 'expo-font';

const Stack = createStackNavigator();

import HomeScreen from './screens/HomeScreen';
import InfoScreen from './screens/InfoScreen';
import MessierListScreen from './screens/MessierList';
import MessierInfoScreen from './screens/MessierInfo';
import MarsImagesScreen from './screens/MarsImagesScreen';
import CharlesMessierInfo from './screens/CharlesMessierInfo';
import MessierObjInfo from './screens/MessierObjInfo'

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fontsLoaded: false
    }
  }

  async loadFonts() {
    await loadAsync({
      "MartianMonoRegular": require("./assets/fonts/static/MartianMono-Regular.ttf")
    });
    this.setState({
      fontsLoaded: true
    })
  }
  componentDidMount() {
    this.loadFonts()
  }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Home'
          screenOptions={{
            headerTitleStyle: { color: "white", fontFamily: "MartianMonoRegular" },
            headerTransparent: true,
            headerTitleAlign: 'center',
            headerTintColor: 'white',
            headerMode: 'float',
            headerBackTitleVisible: false
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: "Astronomy App"
            }}
          />
          <Stack.Screen
            name="Info"
            component={InfoScreen}
            options={{
              title: "Know"
            }}
          />
          <Stack.Screen
            name="MessierList"
            component={MessierListScreen}
          />
          <Stack.Screen
            name="MessierInfo"
            component={MessierInfoScreen}
          />
          <Stack.Screen
            name="MarsImages"
            component={MarsImagesScreen}
          />
          <Stack.Screen
            name="CharlesMessierInfo"
            component={CharlesMessierInfo}
            options={{
              headerTitle: "About"
            }}
          />
          <Stack.Screen
            name="MessierObjInfo"
            component={MessierObjInfo}
            options={{
              headerTitle: "About"
            }}
          />
        </Stack.Navigator>
      </NavigationContainer >
    );
  }
}
