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
  istitle?: string
}

export const Text = styled.p<TitleProps>`
  color: ${(props) => (props.istitle ? "#414549" : "#717171")};
  font-size: ${(props) => (props.istitle ? "1.75rem" : ".875rem")};
  font-weight: ${(props) => (props.istitle ? "600" : "400")};
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
  border: 2px solid #537595;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: #5492cd;
    border: 2px solid transparent;
    color: #fff;
  }
`

export const CustomizationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5625rem;
  gap: 1.875rem;
  height: 30rem;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #fafafa;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #5b5a5a;
  }
`
export const LinkCardsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`
