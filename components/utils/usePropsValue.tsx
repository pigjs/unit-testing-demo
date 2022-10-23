import { useCallback, useRef } from 'react';
import useUpdate from './useUpdate';

export interface usePropsValueProps {
  value?: any;
  onChange?: any;
}

export default function usePropsValue(options: usePropsValueProps) {
  const { value, onChange } = options;

  const update = useUpdate();

  // 是否受控
  const controlled = options.hasOwnProperty('value');

  const stateRef = useRef(controlled ? value : undefined);
  if (controlled) {
    stateRef.current = value;
  }

  const setState = useCallback(
    (v, ...args) => {
      if (!controlled) {
        stateRef.current = v;
        update();
      }
      onChange?.(v, ...args);
    },
    [value, update, onChange],
  );
  return [stateRef.current, setState];
}
