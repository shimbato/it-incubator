import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import Greeting from "./Greeting";
import { pureAddUserCallback, UserType } from "./HW3";
import { Simulate } from "react-dom/test-utils";
import error = Simulate.error;

type GreetingContainerPropsType = {
  users: UserType[]; // need to fix any
  addUserCallback: (name: string) => void; // need to fix any
};

export const pureAddUser = (
  name: string,
  setError: React.Dispatch<React.SetStateAction<string>>,
  setName: React.Dispatch<React.SetStateAction<string>>,
  addUserCallback: (name: string) => void,
) => {
  // name.length > 0 ? addUserCallback(name) : setError("No name");
  if (name) {
    addUserCallback(name);
    setName("");
  } else {
    setError("Ошибка! Введите имя!");
  }
  // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
};

export const pureOnBlur = (
  name: string,
  setError: React.Dispatch<React.SetStateAction<string>>,
) => {
  if (name.trim() == "") {
    setError("Ошибка! Введите имя!");
  } // если имя пустое - показать ошибку
};

export const pureOnEnter = (
  e: KeyboardEvent<HTMLInputElement>,
  addUser: any,
) => {
  if (e.key === "Enter") {
    addUser();
  }
  // если нажата кнопка Enter - добавить
};

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
  users,
  addUserCallback,
}) => {
  // деструктуризация пропсов
  const [name, setName] = useState<string>(""); // need to fix any
  const [error, setError] = useState<string>(""); // need to fix any

  const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
    // need to fix any
    setName(e.currentTarget.value); // need to fix

    error && setError("");
  };
  const addUser = () => {
    pureAddUser(name, setError, setName, addUserCallback);
  };

  const onBlur = () => {
    pureOnBlur(name, setError);
  };

  const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    pureOnEnter(e, addUser);
  };
  console.log("users", users);
  const totalUsers = users.length; // need to fix
  const lastUserName = users[users.length - 1]?.name; // need to fix

  return (
    <Greeting
      name={name}
      setNameCallback={setNameCallback}
      addUser={addUser}
      onBlur={onBlur}
      onEnter={onEnter}
      error={error}
      totalUsers={totalUsers}
      lastUserName={lastUserName}
    />
  );
};

export default GreetingContainer;
