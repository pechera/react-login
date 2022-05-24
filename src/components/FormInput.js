import "./FormInput.css";
import Modal from "./Modal/Modal";
import React, { useState } from "react";

const FormInput = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  const [isModal, setModal] = useState({
    isActive: false,
    modalContent: "Что-то пошло не так",
  });

  const onChangeNameHandler = (event) => {
    setUserName(event.target.value);
  };

  const onChangeAgeHandler = (event) => {
    setUserAge(event.target.value);
  };

  function setUserHandler(event) {
    event.preventDefault();

    switch (true) {
      case userName.length === 0:
        setModal({
          isActive: true,
          modalContent: "Введите имя пользователя!",
        });
        return;
      case userAge.toString().length === 0:
        setModal({
          isActive: true,
          modalContent: "Введите возраст пользователя!",
        });
        return;
      case +userAge < 0:
        setModal({
          isActive: true,
          modalContent: "Возраст не может быть меньше нуля!",
        });
        return;
    }
    props.addUser({
      key: Math.random().toString(),
      name: userName,
      age: userAge,
    });

    resetForm();
  }

  const showModalHandler = () => {
    setModal({
      isActive: false,
      modalContent: "Что-то пошло не так",
    });
  };

  const resetForm = () => {
    document.querySelector("form").reset();
    setUserName("");
    setUserAge("");
  };

  return (
    <div>
      {isModal.isActive && (
        <Modal content={isModal.modalContent} showModal={showModalHandler} />
      )}
      <div className="input__wrapper">
        <form onSubmit={setUserHandler}>
          <label>Name</label>
          <input
            type="text"
            value={userName}
            placeholder="Enter your name"
            onChange={onChangeNameHandler}
          ></input>
          <label>Age</label>
          <input
            type="number"
            value={userAge}
            placeholder="Enter your age"
            onChange={onChangeAgeHandler}
          ></input>
          <button type="submit">Добавить</button>
        </form>
      </div>
    </div>
  );
};

export default FormInput;
