import React, { useRef } from 'react';
import Input from "../input/Input";
import { HiOutlineSearch } from "react-icons/hi";
import Button from "../button/Button";
import { useForm } from "react-hook-form";
import Avatar from '../avatar/Avatar';

const rootStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 15px',
  height: '60px'
}

const formStyle = {
  display: 'flex',
}

type SearchFormValue = {
  search: string;
}

const Navbar = () => {
  const { register, handleSubmit } = useForm<SearchFormValue>();
  const inputRef = useRef(null);

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div style={rootStyle}>
      <form onSubmit={onSubmit} style={formStyle}>
        <Input
          prefixComp={state => (
            <HiOutlineSearch
              style={{ transform: 'translateY(2px) scale(1.2)', opacity: state.focused ? 1 : .2 }}
            />
          )}
          {...register('search')}
        />

      </form>
      <div>
        <Button type='success'>Test</Button>
        <Avatar />
      </div>
    </div>
  );
}

export default Navbar;
