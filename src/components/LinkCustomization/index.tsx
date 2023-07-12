import { Fragment, useContext, useState } from "react"
import NewCard from "./components/NewCard"
import {
  CustomizationWrapper,
  CustomizeHeader,
  CustomizeLinksContainer,
  NewLinkButton,
  SaveButton,
  SaveWrapper,
  Text,
} from "./styles"
import { v4 as uuidv4 } from "uuid"
import { platformOptions } from "./utils/platformOptionsSchemas"
import { GlobalContext } from "../../context/globalContext/GlobalStorage"

const LinkCustomization = () => {
  const { platformCards, setPlatformsCards } = useContext(GlobalContext)
  const [informations, setInformations] = useState({})

  const handleNewLink = () => {
    if (platformCards.length === 5) return

    const getPlatformsAlreadySelected = platformCards.map((card) => {
      return card.platform
    })

    const newPlatformLink = platformOptions.find(
      (option) => !getPlatformsAlreadySelected.includes(option.platform)
    )

    setPlatformsCards((oldValue) => [
      ...oldValue,
      { link: newPlatformLink?.prefix, id: String(uuidv4()), ...newPlatformLink! },
    ])
  }

  const saveCards = () => {
    /*     setInformations({
      linkCards: platformCards,
    }) */
  }

  return (
    <CustomizeLinksContainer>
      <CustomizationWrapper>
        <CustomizeHeader>
          <div>
            <Text title="true">Customize your Links</Text>
            <Text>
              Add/edit/remove links below and then share all your profiles with the
              world!
            </Text>
          </div>
          <NewLinkButton onClick={handleNewLink}>+ Add new link</NewLinkButton>
        </CustomizeHeader>

        {platformCards.map((cardMedia) => {
          return (
            <Fragment key={cardMedia.id}>
              <NewCard
                cardMedia={cardMedia}
                setPlatformsCards={setPlatformsCards}
                platformCards={platformCards}
              />
            </Fragment>
          )
        })}
      </CustomizationWrapper>

      <SaveWrapper>
        <SaveButton onClick={saveCards}>Save</SaveButton>
      </SaveWrapper>
    </CustomizeLinksContainer>
  )
}

export default LinkCustomization
