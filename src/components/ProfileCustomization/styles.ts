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

export const NewCardContainer = styled.div`
  background: #fafafa;
  padding: 0.9375rem;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
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

export const UpdateProfileWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`

export const UpdateProfileText = styled.p`
  color: #717171;
  font-size: 0.875rem;
`

export const UpdateProfileMiniModalWrapper = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-end;
  gap: 1.25rem;
  width: 65%;

  label {
    width: 16.25rem;
    height: 8.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    border-radius: 8px;

    img {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      user-select: none;
      height: 100%;
      z-index: 1;
      object-fit: cover;
    }

    div {
      background-color: rgba(0, 0, 0, 0.4);
      width: 100%;
      height: 100%;
      z-index: 10;
      color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      transition: 0.2 ease-in-out;

      &:hover {
        background-color: rgba(0, 0, 0, 0.6);
      }
    }

    input {
      display: none;
    }
  }

  p {
    width: 70%;
    font-size: 12px;
    color: #717171;
  }
`
