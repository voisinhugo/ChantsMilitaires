export const getPropsWithNavigation = (props, navigationPropExtension) => ({
  ...props,
  navigation: {
    navigate: jest.fn(),
    goBack: jest.fn(),
    ...navigationPropExtension,
  },
});
