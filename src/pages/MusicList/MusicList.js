import React from 'react';
import {FlatList, StyleSheet, SafeAreaView} from 'react-native';
import songs from '../../data';
import {MusicItem} from './components';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.color.background,
  },
  musicList: {
    backgroundColor: theme.color.background,
  },
});

export const MusicList = ({navigation}) => (
  <SafeAreaView style={styles.container}>
    <FlatList
      style={styles.musicList}
      data={Object.values(songs).sort((a, b) => a.title > b.title)}
      renderItem={({item}) => <MusicItem item={item} navigation={navigation} />}
      keyExtractor={item => item.id.toString()}
    />
  </SafeAreaView>
);
