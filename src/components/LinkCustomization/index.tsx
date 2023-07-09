import NewCard from "./components/NewCard"
import {
  CustomizeHeader,
  CustomizeLinksContainer,
  NewLinkButton,
  Text,
} from "./styles"

const LinkCustomization = () => {
  return (
    <CustomizeLinksContainer>
      <CustomizeHeader>
        <div>
          <Text title="true">Customize your Links</Text>
          <Text>
            Add/edit/remove links below and then share all your profiles with the
            world!
          </Text>
        </div>
        <NewLinkButton>+ Add new link</NewLinkButton>
      </CustomizeHeader>

      <NewCard />
    </CustomizeLinksContainer>
  )
}

export default LinkCustomization
