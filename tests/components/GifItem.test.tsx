import React from 'react';
import { render, screen } from '@testing-library/react';
import { GifItem } from '../src/components/GifItem';

describe('GifItem component', () => {
  const props = {
    url: 'https://example.com/image.gif',
    title: 'Example image',
  };

  test('should render the image and title', () => {
    const { container } = render(<GifItem {...props} />);
    expect( container ).toMatchSnapshot(); 
  });
});