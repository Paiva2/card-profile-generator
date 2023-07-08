import LinkCustomization from "../../components/LinkCustomization"
import { HomeWrapper, MainContainer } from "./styles"

const Home = () => {
  return (
    <MainContainer>
      <HomeWrapper>
        <div>aside</div>
        <div
          style={{
            backgroundColor: "#fff",
          }}
        >
          <LinkCustomization />
        </div>
      </HomeWrapper>
    </MainContainer>
  )
}

export default Home
