import React from 'react';
import { render } from '@testing-library/react';

export default function componentTest(
  Component: React.ComponentType<any>,
  componentName: string,
  componentProps = {},
) {
  describe(`component ${componentName}`, () => {
    it(`renders correctly`, () => {
      const wrapper = render(<Component {...componentProps} />);
      expect(wrapper).toMatchSnapshot();
    });

    it('component could be updated and unmounted without errors', () => {
      const { rerender, unmount } = render(<Component {...componentProps} />);
      expect(() => {
        // re-render the same component with different props
        rerender(<Component {...componentProps} />);
        unmount();
      }).not.toThrow();
    });
  });
};