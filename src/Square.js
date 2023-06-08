import React from "react";
import { styled } from "@linaria/react";

const SquareButton = styled.button`
  background: #fff;
  border: 1px solid #999;
  float: left;
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;
  height: 34px;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
  width: 34px;
`;

export function Square({ value, onClick }) {
  return <SquareButton onClick={onClick}>{value}</SquareButton>;
}
