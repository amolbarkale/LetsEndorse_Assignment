import styled from "styled-components";
import { useState } from "react";

export const Form = ({
  holdernum,
  holdercvv,
  holderey,
  handleChange,
  handleChange1,
  handleChange2,
  handleChange4,
  text,
}) => {
  return (
    <Div>
      <p>Card holder name</p>
      <input onChange={handleChange} type="text" placeholder="" value={text} />
      <p> Card number</p>
      <input
        onChange={handleChange1}
        value={holdernum}
        type="text"
        placeholder=""
      />
      <p>Expiration</p>
      <input
        onChange={handleChange2}
        value={holderey}
        type="text"
        placeholder=""
      />
      <p>CVV</p>
      <input
        onChange={handleChange4}
        value={holdercvv}
        type="text"
        placeholder=""
      />
      <p></p>
      <input className="btn" type="submit" />
    </Div>
  );
};

const Div = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  float: right;
  height: 70vh;
  margin-top: 5%;
  border: 1px solid #9c9c9c;
  border-radius: 15px;
  padding-left: 10px;
  text-align: left;
  padding-bottom: 20px;
  & p {
    margin-left: 50px;
    font-size: 14px;
    color: #303030;
  }
  & input {
    width: 80%;
    height: 40px;
    margin: auto;
    outline: none;
    border: 0px solid;
    border-bottom: 3px solid #dadada;
    font-size: 22px;
    color: #303030;
  }
  .btn {
    width: 80%;
    height: 60px;
    border-radius: 10px;
    color: #dadada;
    font-size: 18px;
    background-color: #303030;
  }
`;
