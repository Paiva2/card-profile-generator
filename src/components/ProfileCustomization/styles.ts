import { styled } from "styled-components"

export const CustomizeLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`

export const CustomizeHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.9375rem;
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

export const ProfileImageContainer = styled.div`
  background: #fafafa;
  padding: 0.9375rem;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;

  @media (max-width: 58.75rem) {
    align-items: center;
    justify-content: center;
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
    width: 0.5rem;
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

  @media (max-width: 58.75rem) {
    flex-direction: column;
    gap: 0.9375rem;
    justify-content: center;
  }
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

  @media (max-width: 58.75rem) {
    width: 100%;
    flex-direction: column;

    label {
      width: 100%;
    }
  }

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
    font-size: 0.75rem;
    color: #717171;
  }
`

export const UserInformationsContainer = styled.div`
  background: #fafafa;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  width: 100%;
`

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.9375rem;
  gap: 1.25rem;

  label {
    align-items: center;
    display: flex;
    justify-content: space-between;
    width: 100%;

    input {
      all: unset;
      border: 2px solid rgba(0, 0, 0, 0.2);
      border-radius: 5px;
      padding: 0.5rem 0px;
      padding-left: 0.625rem;
      cursor: text;
      width: 65%;
      font-size: 1rem;

      &::placeholder {
        color: #c4c4c4;
        font-size: 0.875rem;
      }

      &:focus {
        border: 2px solid rgba(173, 208, 241, 300);
      }
    }
  }
`
