import React from 'react';
import { render } from '@testing-library/react';
import Emoji from 'components/Emoji';

const props = {
  label: 'A dog, a faithful, beloved pet canine',
  symbol: '🐕',
  className: 'emoji'
};

test('sets aria-hidden to "true" when label prop is NOT passed', (): void => {
  const { getByRole } = render(<Emoji symbol={props.symbol} />);

  expect(getByRole('img').getAttribute('aria-label')).toBeNull();
  expect(getByRole('img').getAttribute('aria-hidden')).toEqual('true');
});

test('sets aria-hidden to undefined when label prop IS passed', (): void => {
  const { getByLabelText } = render(
    <Emoji label={props.label} symbol={props.symbol} />
  );

  expect(getByLabelText(props.label).getAttribute('aria-hidden')).toBeNull();
});

test('renders and matches snapshot', (): void => {
  const { container } = render(<Emoji {...props} />);

  expect(container.firstChild).toMatchSnapshot();
});
