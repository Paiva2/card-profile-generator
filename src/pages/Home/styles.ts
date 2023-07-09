import { styled } from "styled-components"

export const MainContainer = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const HomeWrapper = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  gap: 1.25rem;
`

export const DemonstrationContainer = styled.div`
  flex: 1;
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

export const RightContainer = styled.div`
  width: 55%;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
`

export const CustomizationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  padding: 1.5625rem;
`
