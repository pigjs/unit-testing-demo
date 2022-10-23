import React,{useState} from 'react'
import {Button} from 'antd'
import omit from 'lodash/omit'

import type { ButtonProps as AButtonProps } from 'antd/es/button/button';

export interface ButtonProps extends AButtonProps {
  async?:boolean
}

const Index = (props:ButtonProps)=>{
  const [loading, setLoading] = useState(false);
  const onClick = async (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setLoading(true);
    try {
      await props.onClick?.(e);
    } catch (err) {
      console.warn('Button asynchronous operation failure：', err);
    }
    setLoading(false);
  };
  let resetProps = omit(props,['async'])
  if(props.async){
    resetProps = {
      ...resetProps,
      loading,
      onClick
    }
  }

  return <Button {...resetProps} />
}

export default Index