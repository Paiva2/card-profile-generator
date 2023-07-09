import DemoCard from "../../components/DemoCard"
import LinkCustomization from "../../components/LinkCustomization"
import {
  CustomizationContainer,
  DemonstrationContainer,
  HomeWrapper,
  MainContainer,
  RightContainer,
  SaveButton,
  SaveWrapper,
} from "./styles"

const Home = () => {
  return (
    <MainContainer>
      <HomeWrapper>
        <DemonstrationContainer>
          <DemoCard />
        </DemonstrationContainer>

        <RightContainer>
          <CustomizationContainer>
            <LinkCustomization />
          </CustomizationContainer>

          <SaveWrapper>
            <SaveButton>Save</SaveButton>
          </SaveWrapper>
        </RightContainer>
      </HomeWrapper>
    </MainContainer>
  )
}

export default Home
