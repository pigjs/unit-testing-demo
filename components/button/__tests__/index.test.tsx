import React from 'react';
import Button from '..';
import { render, act,screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import sleep from '../../utils/sleep'
import componentTest from '../../../tests/componentTest'

componentTest(Button, 'Button', { children: 'content' });
describe('Button', () => {
  it('async correctly', async () => {
    const AsyncButton = () => {
      const getData = async () => {
        await sleep(100);
      };
      return (
        <Button async onClick={getData}>
          content
        </Button>
      );
    };
    render(<AsyncButton />);

    const node = screen.getByRole('button',{name:'content'})

    await userEvent.click(node)
    expect(node).toHaveClass('ant-btn-loading');
    await act(async ()=>{
        await sleep(200);
        expect(node).not.toHaveClass('ant-btn-loading');  
    })
  });
});
