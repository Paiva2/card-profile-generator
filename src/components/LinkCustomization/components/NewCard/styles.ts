import { styled } from "styled-components"

export const NewCardContainer = styled.div`
  background: #fafafa;
  padding: 1.875rem 1.25rem;
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
    transition: 0.2s ease-out;

    &:hover {
      color: #000;
    }
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
    position: relative;
  }
`
interface DropdownListProps {
  platformlist: string | undefined
}

export const PlatformTrigger = styled.button<DropdownListProps>`
  all: unset;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  font-size: 0.9375rem;
  overflow: hidden;
  font-weight: 400;

  .arrow-icon {
    transition: 0.2s ease-in-out;
    transform: ${(props) => (props.platformlist ? "rotate(180deg)" : "rotate(0)")};
  }

  span {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0.625rem;
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`

export const DropdownList = styled.ul<DropdownListProps>`
  opacity: ${(props) => (props.platformlist ? 1 : 0)};
  visibility: ${(props) => (props.platformlist ? "visible" : "hidden")};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  background-color: #fff;
  width: 100%;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 1;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  font-weight: 400;

  li:not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  li {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 0px;
    font-size: 0.9375rem;
    cursor: pointer;
    transition: 0.2s;

    span {
      gap: 0.3125rem;
      display: flex;
      align-items: center;
      width: 6.25rem;
    }

    &:hover {
      background-color: #add0f1;
      border-color: transparent;
    }

    &:hover:last-child {
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
    }
  }
`

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3125rem;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  width: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;

  svg {
    padding-left: 0.625rem;
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
