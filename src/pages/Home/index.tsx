import DemoCard from "../../components/DemoCard"
import LinkCustomization from "../../components/LinkCustomization"
import ModalOverlay from "../../components/ModalOverlay"
import ProfileCustomization from "../../components/ProfileCustomization"
import { GlobalContext } from "../../context/globalContext/GlobalStorage"
import {
  CustomizationContainer,
  DemonstrationContainer,
  HomeWrapper,
  MainContainer,
  Overlay,
  RightContainer,
  SaveButton,
  SaveWrapper,
  SavedToast,
  Toast,
} from "./styles"
import { useContext, useState } from "react"

const Home = () => {
  const {
    activeSection,
    platformCards,
    getProfilePicFromInput,
    userProfileInformations,
    openCardDetails,
  } = useContext(GlobalContext)
  const [openSavedToast, setOpenSavedToast] = useState(false)

  const renderActivePage = () => {
    switch (activeSection) {
      case "links":
        return <LinkCustomization />
      case "profile":
        return <ProfileCustomization />
      default:
        return <LinkCustomization />
    }
  }

  const handleSaveInformations = () => {
    setOpenSavedToast(true)

    if (openSavedToast) return

    setTimeout(() => {
      setOpenSavedToast(false)
    }, 2500)

    const formattedInformations = JSON.stringify(platformCards)

    localStorage.setItem("profileCard", formattedInformations)

    const reader = new FileReader()

    if (getProfilePicFromInput) {
      reader.readAsDataURL(getProfilePicFromInput as Blob)

      reader.addEventListener("load", () => {
        if (reader.result) {
          localStorage.setItem("profilePic", reader.result as string)
        }
      })
    }

    localStorage.setItem(
      "personalInformations",
      JSON.stringify(userProfileInformations)
    )
  }

  return (
    <>
      <MainContainer>
        <Overlay overlay={openCardDetails}>
          <ModalOverlay />
        </Overlay>
        <HomeWrapper>
          <DemonstrationContainer>
            <DemoCard />
          </DemonstrationContainer>
          <RightContainer>
            <CustomizationContainer>{renderActivePage()}</CustomizationContainer>
            <SaveWrapper>
              <SaveButton onClick={handleSaveInformations}>Save</SaveButton>
            </SaveWrapper>
          </RightContainer>
        </HomeWrapper>
        <SavedToast opentoast={openSavedToast}>
          <Toast>
            <p>Profile informations saved successfully!</p>
          </Toast>
        </SavedToast>
      </MainContainer>
    </>
  )
}

export default Home
