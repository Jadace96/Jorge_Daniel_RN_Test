// vendors
import 'react-native';
import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

// component
import { FavoriteIconComponents, BASE_TEST_ID as BTI } from '../FavoriteIconComponents';

describe('FavoriteIconComponents test suit', () => {
  const props = {
    onPressedStar: jest.fn(),
  };

  const component = () => render(<FavoriteIconComponents {...props} />);

  it('should show star image when is not active', () => {
    const { getByTestId } = component();
    const FavoriteImage = getByTestId(`${BTI}FavoriteImage`)
    
    expect(FavoriteImage.props.assetName).toEqual('star');
  });

  it('should show activeStar image when is active', () => {
    props.isActive = true;
    const { getByTestId } = component();
    const FavoriteImage = getByTestId(`${BTI}FavoriteImage`)
    
    expect(FavoriteImage.props.assetName).toEqual('activeStar');
  });

  it('should show star image and trigger onPressedStar prop on press TouchableOpacity', () => {
    const { getByTestId } = component();
    const FavoriteImage = getByTestId(`${BTI}FavoriteImage`)
    const TouchableOpacity = getByTestId(`${BTI}TouchableOpacity`)

    fireEvent.press(TouchableOpacity);
    
    expect(props.onPressedStar).toHaveBeenCalledTimes(1);
    expect(FavoriteImage.props.assetName).toEqual('star');
  });
});