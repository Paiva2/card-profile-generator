import { styled } from "styled-components"

export const CustomizeLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 1.25rem;
`

export const CustomizeHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.875rem;
`
interface TitleProps {
  title?: string
}

export const Text = styled.p<TitleProps>`
  color: ${(props) => (props.title ? "#414549" : "#717171")};
  font-size: ${(props) => (props.title ? "1.75rem" : ".875rem")};
  font-weight: ${(props) => (props.title ? "600" : "400")};
  margin-bottom: 0.625rem;
`

export const NewLinkButton = styled.button`
  all: unset;
  flex: 1;
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
`
