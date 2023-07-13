import DemoCard from "../../components/DemoCard"
import LinkCustomization from "../../components/LinkCustomization"
import ProfileCustomization from "../../components/ProfileCustomization"
import { GlobalContext } from "../../context/globalContext/GlobalStorage"
import {
  CustomizationContainer,
  DemonstrationContainer,
  HomeWrapper,
  MainContainer,
  RightContainer,
  SaveButton,
  SaveWrapper,
} from "./styles"
import { useContext } from "react"

const Home = () => {
  const { activeSection } = useContext(GlobalContext)

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

  return (
    <MainContainer>
      <HomeWrapper>
        <DemonstrationContainer>
          <DemoCard />
        </DemonstrationContainer>
        <RightContainer>
          <CustomizationContainer>{renderActivePage()}</CustomizationContainer>
          <SaveWrapper>
            <SaveButton>Save</SaveButton>
          </SaveWrapper>
        </RightContainer>
      </HomeWrapper>
    </MainContainer>
  )
}

export default Home
