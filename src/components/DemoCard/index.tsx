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
import { platformIcons } from "../LinkCustomization/utils/platformOptionsSchemas"

const DemoCard = () => {
  const { platformCards, profilePic, userProfileInformations } =
    useContext(GlobalContext)

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
                <p>
                  {userProfileInformations.firstName}{" "}
                  {userProfileInformations.lastName}
                </p>
                <p>{userProfileInformations.email}</p>
              </IdentificationWrapper>
            </TopcardSection>
            <PlatformCardsContainer>
              {Array.isArray(platformCards) &&
                platformCards.map((card) => {
                  return (
                    <SocialMediaCard
                      key={card.id}
                      brand={card.platform}
                      href={card.link}
                    >
                      <PlatformNameWrapper>
                        <div>
                          <span>
                            {
                              platformIcons[
                                card.platform as keyof typeof platformIcons
                              ]
                            }
                          </span>
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
