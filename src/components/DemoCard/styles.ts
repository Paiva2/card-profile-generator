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
  }
`
export const DemoCardWrapper = styled.div`
  height: 100%;
`

export const ProfileImageWrapper = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  overflow: hidden;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
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
  color: white;
  border-radius: 8px;
  cursor: pointer;
  width: 85%;
  padding: 0.9375rem 1.125rem;
  font-size: 0.875rem;
  align-items: center;
  margin-top: 0.3125rem;
`
export const PlatformCardsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 18.75rem;
  width: 70%;
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
