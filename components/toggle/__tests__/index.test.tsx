import React from 'react'
import Toggle from '..'
import { render,screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('Toggle',()=>{

  it('Update values when clicked', async ()=>{
    render(<Toggle />)
    
    const node = screen.getByRole('button')
    expect(node.textContent).toBe('Turn on')
    
    await userEvent.click(node)

    expect(node.textContent).toBe('Turn off')

  })
  
})