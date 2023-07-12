import { CaretRight } from "@phosphor-icons/react"
import { GlobalContext } from "../../context/globalContext/GlobalStorage"
import {
  DemoCardContainer,
  DemoCardWrapper,
  IdentificationWrapper,
  ImageAndCards,
  PlatformCardsContainer,
  PlatformNameWrapper,
  ProfileImageWrapper,
  SocialMediaCard,
  TopcardSection,
  UserInformationsWrapper,
} from "./styles"
import { useContext } from "react"
import PhoneIcon from "../../icons/PhoneIcon"

const DemoCard = () => {
  const { platformCards } = useContext(GlobalContext)

  return (
    <DemoCardContainer>
      <DemoCardWrapper>
        <ImageAndCards>
          <PhoneIcon />
          <UserInformationsWrapper>
            <TopcardSection>
              <ProfileImageWrapper>
                <img src="https://i.postimg.cc/D02wXtMy/F0-R-Lpn-WYAEn5y7.jpg" />
              </ProfileImageWrapper>

              <IdentificationWrapper>
                <p>Paiva</p>
                <p>joao.paiva@hotmail.com</p>
              </IdentificationWrapper>
            </TopcardSection>
            <PlatformCardsContainer>
              {platformCards.map((card) => {
                return (
                  <SocialMediaCard brand={card.platform} href={card.link}>
                    <PlatformNameWrapper>
                      <div>
                        <span>{card.icon}</span>
                        <span>{card.platform}</span>
                      </div>
                      <CaretRight size={15} weight="fill" />
                    </PlatformNameWrapper>
                  </SocialMediaCard>
                )
              })}
            </PlatformCardsContainer>
          </UserInformationsWrapper>
        </ImageAndCards>
      </DemoCardWrapper>
    </DemoCardContainer>
  )
}

export default DemoCard
