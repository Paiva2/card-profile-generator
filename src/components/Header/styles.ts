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
  box-shadow: 2px 9px 28px -8px rgba(0, 0, 0, 0.09);

  @media (max-width: 58.75rem) {
    width: 90%;
  }
`

export const NavigationHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1.25rem;
`

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3125rem;
  font-size: 1.375rem;
  cursor: pointer;
  user-select: none;
  font-weight: 600;

  @media (max-width: 58.75rem) {
    svg {
      width: 1.875rem;
      height: 1.875rem;
    }

    p {
      display: none;
    }
  }
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

    &:hover {
      color: rgba(173, 208, 241, 300);
    }

    &.active {
      background-color: rgba(173, 208, 241, 300);
      color: #ffff;
    }

    @media (max-width: 58.75rem) {
      button {
        padding: 0.5rem 1.25rem;
      }

      &.active {
        padding: 0.5rem 1.25rem;
      }

      svg {
        width: 1.5625rem;
        height: 1.5625rem;
      }

      span {
        display: none;
      }
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

    @media (max-width: 58.75rem) {
      padding: 0.5rem 1.25rem;
    }
  }
`
