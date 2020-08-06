import * as React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

// SelectInput is a generic select component.

interface IProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: string;
  label?: string;
  options: any[];
  small?: boolean;
  values?: any[];
}

interface ISizingProps {
  small?: boolean;
}

const Wrapper = styled.div`
  margin: 1rem 0;
  &:first-child {
    margin-top: 0;
  }
  &:last-child {
    margin-bottom: 0;
  }
`;

const Error = styled.p`
  color: red;
  font-size: 0.8rem;
  margin: 0.2rem 0 0;
  text-align: right;
`;

const Label = styled.label<ISizingProps>`
  font-size: 0.9rem;
  font-weight: 600;
  display: block;
  margin-bottom: 0.2rem;
  ${(props) =>
    props.small &&
    css`
      font-size: 0.7rem;
    `}
`;

const Select = styled.select<ISizingProps>`
  border: solid 1px #bbb;
  border-radius: 2px;
  display: block;
  font-size: 1rem;
  height: 2.6rem;
  padding: 0 0.5rem;
  width: 100%;
  ${(props) =>
    props.small &&
    css`
      font-size: 0.8rem;
      height: 1.8rem;
      padding: 0 0.3rem;
    `}
`;

export const SelectInput = ({
  error,
  label,
  options,
  small,
  values,
  ...rest
}: IProps) => (
  <Wrapper>
    {label && <Label small={small}>{label}:</Label>}
    <Select small={small} {...rest}>
      <option />
      {options.map((option, i) => (
        <option key={i} value={values ? values[i] : option}>
          {option}
        </option>
      ))}
    </Select>
    {error && <Error>{error}</Error>}
  </Wrapper>
);
