import { styled } from "styled-components"

export const MainContainer = styled.main`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 2rem 1.5625rem;
  align-items: center;
`
export const HomeWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  justify-content: space-between;
  gap: 0.625rem;
`

export const SaveWrapper = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  background-color: #fff;
  padding: 1.5625rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SaveButton = styled.button`
  all: unset;
  gap: 0.3125rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  padding: 0.625rem 2.5rem;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 500;
  background-color: #5492cd;
  color: #fff;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: #397ab8;
  }
`
