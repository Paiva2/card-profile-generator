import { styled } from "styled-components"

export const DemoCardContainer = styled.div`
  height: 100%;
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 37.5rem;

  .phoneSvg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    user-select: none;
    height: 95%;
  }
`
export const DemoCardWrapper = styled.div`
  height: 100%;
`

export const ProfileImageWrapper = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  overflow: hidden;
  border: 3px solid #5492cd;
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

export const UserInformationsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex-direction: column;
  z-index: 10;
  position: relative;
  gap: 0.3125rem;
`

export const ImageAndCards = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`
interface SocialMediaCardBrand {
  brand: string
}

export const SocialMediaCard = styled.a<SocialMediaCardBrand>`
  all: unset;
  display: flex;
  justify-content: space-between;
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
  color: #f1f1f1;
  border-radius: 8px;
  cursor: pointer;
  width: 85%;
  padding: 0.9375rem 1.125rem;
  font-size: 0.75rem;
  align-items: center;
  margin-top: 0.3125rem;
  opacity: 0.8;
  transition: 0.2s ease-in-out;

  &:hover {
    opacity: 1;
  }
`
export const PlatformCardsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 19.375rem;
  width: 80%;
  gap: 0.625rem;
`
export const PlatformNameWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 16.5625rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.3125rem;

    span:first-child {
      display: flex;
    }
  }
`
export const TopcardSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.625rem;
  width: 80%;
  word-break: break-all;
`

export const IdentificationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;

  p:first-child {
    color: #414549;
    font-weight: 500;
    font-size: 1.125rem;
  }

  p:last-child {
    color: #717171;
    font-size: 12px;
    font-weight: 500;
    overflow: auto;
  }
`
