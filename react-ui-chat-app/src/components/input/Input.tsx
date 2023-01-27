import React, {forwardRef, HTMLAttributes, HTMLProps, useImperativeHandle, useRef, useState} from 'react';
import classes from './Input.module.css';
import {combineClasses} from "../../utils/component";

// Component state using render subcomponents
type State = {
  focused: boolean,
  value: string | number | readonly string[] | undefined;
}

type Props = HTMLAttributes<HTMLInputElement> & {
  prefixComp?: (state: State) => JSX.Element;
  suffixComp?: (state: State) => JSX.Element;
  name?: string;
  value?: string | number | readonly string[];
}

const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  // DO props
  const {prefixComp, suffixComp, className, value = '', onChange, ...inputProps} = props;

  // Hooks
  const [state, setState] = useState<State>({focused: false, value});
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Variables
  const classN = combineClasses(classes.wrapper, className);
  const prefixC = prefixComp && (<div className={classes.prefix}>{prefixComp(state)}</div>);
  const suffixC = suffixComp && (<div className={classes.suffix}>{suffixComp(state)}</div>);

  // Actions
  const setFocus = (focused: boolean) => {
    // set input focus state
    if (inputRef.current) {
      if (focused) inputRef.current.focus();
      else inputRef.current.blur();
    }

    // set component focus state
    setState(prev => ({...prev, focused}))
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e);
    setState(prev => ({...prev, value: e.target.value}));
  }

  return (
      <div tabIndex={0}
           className={classN}
           onFocus={() => setFocus(true)}
           onBlur={() => setFocus(false)}
      >
        {prefixComp && prefixC}
        <input
            {...inputProps}
            className={classes.input}
            ref={(node) => {
              inputRef.current = node;
              if (typeof ref === 'function') {
                ref(node);
              } else if (ref) {
                ref.current = node;
              }
            }}
            value={state.value}
            onChange={onInputChange}
        />
        {suffixComp && suffixC}
      </div>
  );
})

export default Input;
