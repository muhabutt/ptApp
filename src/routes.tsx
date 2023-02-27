import React from 'react';
import Home from './screens/Home';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeNavigation} from './types';
import {SafeAreaView, StatusBar} from 'react-native';
import styles, {Colors, Fonts} from './theme/styles';
import StartTest from './screens/StartTest';
import HeaderBackButton from './components/HeaderBackButton';
import Result from './screens/Result';
const defaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#FFF',
  },
};

const Stack = createNativeStackNavigator<HomeNavigation>();
const Routes: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer theme={defaultTheme}>
        <StatusBar barStyle="dark-content" />
        <Stack.Navigator
          screenOptions={() => ({
            headerStyle: {
              backgroundColor: Colors.DarkTurquoise,
            },
            headerTitleStyle: {
              ...Fonts.Title,
              fontWeight: 'bold',
              color: Colors.White,
            },
          })}>
          <Stack.Screen
            name="home"
            component={Home}
            options={{
              title: 'Personality Test',
            }}
          />
          <Stack.Screen
            name="startTest"
            component={StartTest}
            options={({navigation}) => ({
              title: 'Answer carefully',
              headerLeft: () => (
                <HeaderBackButton
                  onPress={() => {
                    navigation.goBack();
                  }}
                />
              ),
            })}
          />
          <Stack.Screen
            name="result"
            component={Result}
            options={() => ({
              title: 'Your result',
              headerLeft: () => <React.Fragment />,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};
export default Routes;
