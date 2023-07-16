import { styled } from "styled-components"

export const Modal = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  border-radius: 8px;
  padding: 0.9375rem;
  width: 30%;

  @media (max-width: 58.75rem) {
    width: 70%;
    height: auto;
  }
`

export const ModalWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.625rem;
  padding: 1.875rem 1.875rem;
  position: relative;
`

export const ImgeWrapper = styled.div`
  width: 6.25rem;
  height: 6.25rem;
  border-radius: 100%;
  overflow: hidden;
  border: 5px solid #5492cd;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    object-fit: cover;
    width: 100%;
    border-radius: 100%;
    height: 100%;
    user-select: none;
  }
`

export const UserProfileInformations = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex-direction: column;
  gap: 0.3125rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  word-break: break-all;
  max-height: 37.5rem;

  p:first-child {
    color: #414549;
    font-weight: 500;
    font-size: 1.375rem;
  }

  p:last-child {
    color: #717171;
    font-size: 0.875rem;
    font-weight: 500;
    overflow: auto;
  }
`

interface SocialMediaCard {
  brand?: string
}

export const UserSocialMediaCards = styled.div`
  display: flex;
  cursor: pointer;
  flex-direction: column;
  gap: 0.9375rem;
  width: 100%;
  font-size: 0.75rem;
  align-items: center;
  margin-top: 0.3125rem;
`
export const CloseIcon = styled.div`
  position: absolute;
  right: 1.25rem;
  cursor: pointer;
  z-index: 1;

  button {
    all: unset;
    cursor: pointer;
    display: grid;
    place-items: center;
  }
`

export const SocialCard = styled.a<SocialMediaCard>`
  all: unset;
  background-color: ${({ brand }) => {
    switch (brand) {
      case "Github":
        return "#000"
      case "Youtube":
        return "#FF0000"
      case "Facebook":
        return "#4267B2"
      case "Twitter":
        return "#1DA1F2"
      case "Linkedin":
        return "#0077B5"
      default:
        return "#000"
    }
  }};
  border-radius: 8px;
  padding: 0.9375rem 1.125rem;
  color: #f1f1f1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  opacity: 0.8;
  transition: 0.2s ease-in-out;

  &:hover {
    opacity: 1;
  }

  span {
    display: flex;
    align-items: center;
    gap: 0.3125rem;
  }
`
