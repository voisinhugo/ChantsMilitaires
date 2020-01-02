import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {MusicView} from '../pages/MusicView';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import songs from '../data';
import {MusicList} from '../pages/MusicList/';
import theme from '../theme';

const Arrow = navigation => (
  <TouchableOpacity onPress={() => navigation.goBack()}>
    <Text style={styles.arrowText}>←</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  arrowText: {
    margin: theme.margin.x1,
    marginLeft: theme.margin.x2,
    fontSize: 30,
    lineHeight: 32,
    color: 'white',
  },
});

export const StackNavigator = createStackNavigator(
  {
    MusicList: {
      screen: MusicList,
      navigationOptions: {
        title: 'Liste des chants',
      },
    },
    MusicView: {
      screen: MusicView,
      navigationOptions: ({navigation}) => {
        const musicId = navigation.getParam('musicId');
        return {
          title: songs[musicId].title,
          headerLeft: () => Arrow(navigation),
        };
      },
    },
  },
  {
    initialRouteName: 'MusicList',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: theme.color.header,
      },
      headerTitleStyle: {
        textAlignVertical: 'center',
        color: theme.color.white,
        fontSize: theme.fontSize.title,
      },
    },
  },
);

export const AppContainer = createAppContainer(StackNavigator);
