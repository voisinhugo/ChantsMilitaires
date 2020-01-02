import React from 'react';
import {render} from 'react-native-testing-library';
import {MusicView} from '../MusicView';
import {getPropsWithNavigation} from '../../../lib/tests/helpers';

const song0Id = 0;
jest.mock('../../../data/index', () => ({
  '0': {
    id: 0,
    title: 'toto',
    lyrics:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
  },
  '1': {id: 1, title: 'tata', lyrics: ''},
}));

const getParam = param => {
  const navigationParams = {musicId: song0Id};
  return navigationParams[param];
};
const {navigation} = getPropsWithNavigation({}, {getParam});

describe('MusicView', () => {
  it('should render', () => {
    const musicView = render(<MusicView navigation={navigation} />);

    expect(musicView).toMatchSnapshot();
  });
});
