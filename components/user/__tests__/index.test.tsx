import React from 'react'
import User from '..'
import {render,act} from '@testing-library/react'

describe('User',()=>{

    it('renders user data',async ()=>{
        const fetchUser = {
            name:'叶小秋',
            age:'22',
            address:'杭州'
        }
        jest.spyOn(global,'fetch').mockImplementation(()=>(
            Promise.resolve({
                json:()=> Promise.resolve(fetchUser)
            })
        ))
        let wrapper
        // 使用异步的 act 应用执行成功的 promise
        await act(async ()=>{
            wrapper = render(<User id='123' />)
        })
        expect(wrapper.container.querySelector('summary').textContent).toBe(fetchUser.name)
        expect(wrapper.container.querySelector('strong').textContent).toBe(fetchUser.age)
        expect(wrapper.container.textContent).toContain(fetchUser.name)

        // 清理 mock 以确保测试完全隔离
        global.fetch.mockRestore()
    })
})