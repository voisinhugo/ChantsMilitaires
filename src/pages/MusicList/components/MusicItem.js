import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import theme from '../../../theme';

const styles = StyleSheet.create({
  musicContainer: {
    backgroundColor: theme.color.background,
  },
  musicText: {
    marginLeft: theme.margin.x2,
    marginVertical: theme.margin.x1,
    color: theme.color.white,
    fontSize: theme.fontSize.heading,
  },
});

export const MusicItem = ({item, navigation}) => {
  const onItemPress = () => {
    const musicId = item.id;
    navigation.navigate('MusicView', {musicId});
  };

  return (
    <TouchableOpacity style={styles.musicContainer} onPress={onItemPress}>
      <Text style={styles.musicText}>{item.title}</Text>
    </TouchableOpacity>
  );
};
