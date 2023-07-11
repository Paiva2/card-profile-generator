import { Fragment, useState } from "react"
import NewCard from "./components/NewCard"
import {
  CustomizeHeader,
  CustomizeLinksContainer,
  NewLinkButton,
  Text,
} from "./styles"
import { PlatformSchema } from "../../../types"
import { v4 as uuidv4 } from "uuid"
import { platformOptions } from "./utils/platformOptionsSchemas"

const LinkCustomization = () => {
  const [platformCards, setPlatformsCards] = useState<Array<PlatformSchema>>([
    { ...platformOptions[0], id: String(uuidv4()) },
  ])

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
      { ...newPlatformLink!, id: String(uuidv4()) },
    ])
  }

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
    </CustomizeLinksContainer>
  )
}

export default LinkCustomization
