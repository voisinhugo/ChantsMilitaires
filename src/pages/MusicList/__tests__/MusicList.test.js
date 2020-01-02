import React from 'react';
import {render, fireEvent} from 'react-native-testing-library';
import {MusicList} from '../MusicList';
import {getPropsWithNavigation} from '../../../lib/tests/helpers';

const song0Id = 0;
const song0Title = 'toto';
jest.mock('../../../data/index', () => ({
  '0': {id: 0, title: 'toto'},
  '1': {id: 1, title: 'tata'},
}));

const navigate = jest.fn();
const {navigation} = getPropsWithNavigation({}, {navigate});

describe('MusicItem', () => {
  it('should render', () => {
    const musicList = render(<MusicList navigation={navigation} />);

    expect(musicList).toMatchSnapshot();
  });
  it('should navigate to lyric page', () => {
    const {getByText} = render(<MusicList navigation={navigation} />);

    const itemButton = getByText(song0Title);
    fireEvent.press(itemButton);

    expect(navigate).toHaveBeenCalledWith('MusicView', {musicId: song0Id});
  });
});
