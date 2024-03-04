import { Dispatch, SetStateAction, ChangeEvent, FormEvent } from 'react';

export function eventHandler<T>(setState: Dispatch<SetStateAction<T>>) {
  return function onChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { value, name } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };
}

export const submitHandler =
  <T>(onSubmit: (arg: T) => void, arg: T) =>
  (e: FormEvent) => {
    e.preventDefault();
    onSubmit(arg);
  };
