import { useContext } from "react"
import { GlobalContext } from "../../context/globalContext/GlobalStorage"
import {
  CloseIcon,
  ImgeWrapper,
  Modal,
  ModalWrapper,
  SocialCard,
  UserProfileInformations,
  UserSocialMediaCards,
} from "./styles"
import { platformIcons } from "../LinkCustomization/utils/platformOptionsSchemas"
import { CaretRight, X } from "@phosphor-icons/react"

const ModalOverlay = () => {
  const {
    platformCards,
    profilePic,
    userProfileInformations,
    setOpenCardDetails,
    openCardDetails,
  } = useContext(GlobalContext)

  return (
    <Modal>
      <CloseIcon>
        <button type="button" onClick={() => setOpenCardDetails(!openCardDetails)}>
          <X size={30} weight="regular" />
        </button>
      </CloseIcon>
      <ModalWrapper>
        <ImgeWrapper>
          <img src={profilePic} />
        </ImgeWrapper>

        <UserProfileInformations>
          <p>
            {userProfileInformations.firstName} {userProfileInformations.lastName}
          </p>
          <p>{userProfileInformations.email}</p>
        </UserProfileInformations>

        <UserSocialMediaCards>
          {platformCards.map((cards) => {
            return (
              <SocialCard href={cards.link} brand={cards.platform}>
                <span>
                  {platformIcons[cards.platform as keyof typeof platformIcons]}
                  {cards.platform}
                </span>

                <CaretRight size={15} weight="fill" />
              </SocialCard>
            )
          })}
        </UserSocialMediaCards>
      </ModalWrapper>
    </Modal>
  )
}

export default ModalOverlay
