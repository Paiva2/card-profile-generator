import DemoCard from "../../components/DemoCard"
import LinkCustomization from "../../components/LinkCustomization"
import {
  CustomizationContainer,
  DemonstrationContainer,
  HomeWrapper,
  MainContainer,
  RightContainer,
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
        </RightContainer>
      </HomeWrapper>
    </MainContainer>
  )
}

export default Home
