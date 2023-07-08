import LinkCustomization from "../../components/LinkCustomization"
import { HomeWrapper, MainContainer, SaveButton, SaveWrapper } from "./styles"

const Home = () => {
  return (
    <MainContainer>
      <HomeWrapper>
        <div>aside</div>
        <div
          style={{
            width: "55%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#fff",
              borderRadius: "10px",
              gap: "10px",
              padding: "25px",
            }}
          >
            <LinkCustomization />
          </div>

          <SaveWrapper>
            <SaveButton>Save</SaveButton>
          </SaveWrapper>
        </div>
      </HomeWrapper>
    </MainContainer>
  )
}

export default Home
