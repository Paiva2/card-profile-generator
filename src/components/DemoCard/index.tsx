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
  const { platformCards, profilePic } = useContext(GlobalContext)

  return (
    <DemoCardContainer>
      <DemoCardWrapper>
        <ImageAndCards>
          <PhoneIcon />
          <UserInformationsWrapper>
            <TopcardSection>
              <ProfileImageWrapper>
                <img alt="User Profile Picture" src={profilePic} />
              </ProfileImageWrapper>

              <IdentificationWrapper>
                <p>Paiva</p>
                <p>joao.paiva@hotmail.com</p>
              </IdentificationWrapper>
            </TopcardSection>
            <PlatformCardsContainer>
              {platformCards.map((card) => {
                return (
                  <SocialMediaCard
                    key={card.id}
                    brand={card.platform}
                    href={card.link}
                  >
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
