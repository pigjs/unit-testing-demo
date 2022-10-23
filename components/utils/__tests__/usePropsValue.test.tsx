import {act,renderHook} from '@testing-library/react-hooks'
import usePropsValue from '../usePropsValue'

describe('usePropsValue',()=>{

    it('should be defined',()=>{
        expect(usePropsValue).toBeDefined()
    })

    const setUp = <T extends object>(props:T)=>(
        renderHook(()=>{
            const [value,setValue] = usePropsValue(props)
            return {
                value,
                setValue
            }
        })
    )

    it('should support value',()=>{
        const hook = setUp<any>({
            value:'叶小秋'
        })
        expect(hook.result.current.value).toBe('叶小秋')
    })

    it('should support function update',()=>{
        let name = '叶小秋'
        const hook = setUp<any>({
            value:name,
            onChange:(value)=>{
                name = value
            }
        })
        act(()=>{
            hook.result.current.setValue('一叶之秋')
        })
        expect(name).toBe('一叶之秋')

        const hook1 = setUp<any>({})
        expect(hook1.result.current.value).toBe(undefined)
        act(()=>{
            hook1.result.current.setValue('叶小秋')
        })
        expect(hook1.result.current.value).toBe('叶小秋')
    })
})