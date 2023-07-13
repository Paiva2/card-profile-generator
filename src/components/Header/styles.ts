import { styled } from "styled-components"

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 2rem;
`

export const HeaderWrapper = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
`

export const NavigationHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
`

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3125rem;
  font-size: 1.375rem;
  cursor: pointer;
  user-select: none;
  font-weight: 600;
`
export const NavigateSections = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  button {
    all: unset;
    gap: 0.3125rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    cursor: pointer;
    font-weight: 500;
    color: #7c7c7c;
    padding: 0.625rem 1.25rem;
    border-radius: 5px;
    transition: 0.2s ease-in-out;

    &.active {
      background-color: rgba(173, 208, 241, 0.7);
      color: #ffff;
    }
  }
`
export const CardDetailsWrapper = styled.div`
  button {
    all: unset;
    gap: 0.3125rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    padding: 0.625rem 1.25rem;
    font-size: 1rem;
    cursor: pointer;
    font-weight: 500;
    color: #7c7c7c;
    border: 1px solid #537595;
    transition: 0.3s ease-in-out;

    &:hover {
      background-color: #5492cd;
      border: 1px solid transparent;
      color: #fff;
    }
  }
`
