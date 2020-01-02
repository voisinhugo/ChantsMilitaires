import React from 'react';
import {render} from 'react-native-testing-library';
import {MusicList} from '../MusicList';
import {getPropsWithNavigation} from '../../../lib/tests/helpers';

jest.mock('../../../data/index', () => ({
  '0': {id: 0, title: 'toto'},
  '1': {id: 1, title: 'tata'},
}));

const navigation = getPropsWithNavigation();

describe('MusicItem', () => {
  it('should render', () => {
    const musicItem = render(<MusicList navigation={navigation} />);

    expect(musicItem).toMatchSnapshot();
  });
});
