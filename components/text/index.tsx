import { Tooltip } from 'antd'
import React,{memo} from 'react'

export interface TextProps {
    maxLength?:number,
    content:string | number
}

const Index:React.FC<TextProps> = (props)=>{
    const {maxLength=30,content} = props
    if(!content){
        return null
    }
    const title = content.toString();
    if(title.length > maxLength){
        const text = title.slice(0, maxLength);
        return (
            <Tooltip title={title}>
                {text}...
            </Tooltip>
        )
    }
    return <span>{title}</span>
}

export default memo(Index)