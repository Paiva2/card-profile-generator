import { styled } from "styled-components"

export const NewCardContainer = styled.div`
  background: #fafafa;
  padding: 0.9375rem;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
`
export const NewCardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #717171;
  font-weight: 600;
  font-size: 0.9375rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.3125rem;

    svg {
      cursor: grab;
    }
  }

  button {
    all: unset;
    font-weight: 400;
    cursor: pointer;
  }
`

export const SocialWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;

  label {
    color: #717171;
    font-weight: 500;
    display: flex;
    gap: 0.3125rem;
    flex-direction: column;
    font-size: 0.75rem;
  }
`

export const PlatformTrigger = styled.button`
  all: unset;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  font-size: 0.9375rem;
  font-weight: 500;
  overflow: hidden;

  span {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0.625rem;
  }
`

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3125rem;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  width: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;

  svg {
    padding-left: 0.3125rem;
  }

  input {
    font-family: "Roboto", sans-serif;
    font-size: 0.9375rem;
    font-weight: 500;
    border: 0;
    color: #717171;
    flex: 1;
    padding: 0.625rem 0px;

    &:focus {
      outline: none;
    }
  }
`
