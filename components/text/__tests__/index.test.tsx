import React from 'react';
import Text from '..'
import {render,screen} from '@testing-library/react'

jest.mock('antd',()=>{
    return {
        Tooltip:(props)=>{
            return (
                <div>
                    <span data-testid='title' >{props.title}</span>
                    <span data-testid='children'>{props.children}</span>
                </div>
            )
        }
    }
})

describe('Text',()=>{

    it('text correctly',()=>{
        render(<Text maxLength={6} content='我是text组件' />)

        const titleNode = screen.getByTestId('title')
        const childNode = screen.getByTestId('children')

        expect(titleNode.textContent).toBe('我是text组件')
        expect(childNode.textContent).toBe('我是text...')
    })
})