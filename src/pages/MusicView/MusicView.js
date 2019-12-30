import React from 'react';
import {Text, ScrollView, StyleSheet, View, SafeAreaView} from 'react-native';
import songs from '../../data';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: theme.color.background,
  },
  lyrics: {
    margin: 16,
    fontSize: 20,
    color: theme.color.white,
  },
});

export const MusicView = ({navigation}) => {
  const musicId = navigation.getParam('musicId');
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView>
          <Text style={styles.lyrics}>{songs[musicId].lyrics}</Text>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};
