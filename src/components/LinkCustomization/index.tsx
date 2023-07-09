import { useState } from "react"
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
  const [optionIndexToControl, setOptionIndexToControl] = useState(1)

  const newLinkSchema = {
    id: String(uuidv4()),
    ...platformOptions[optionIndexToControl],
  }

  const [platformCards, setPlatformsCards] = useState<Array<PlatformSchema>>([
    platformOptions[0],
  ])

  const newLink = () => {
    if (platformCards.length === 5) return

    setPlatformsCards((oldVal) => [...oldVal, newLinkSchema])

    setOptionIndexToControl((oldValue) => oldValue + 1)
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
        <NewLinkButton onClick={newLink}>+ Add new link</NewLinkButton>
      </CustomizeHeader>

      {platformCards.map((cardMedia) => {
        return (
          <NewCard
            key={cardMedia.socialMediaId}
            cardMedia={cardMedia}
            setPlatformsCards={setPlatformsCards}
            platformCards={platformCards}
          />
        )
      })}
    </CustomizeLinksContainer>
  )
}

export default LinkCustomization
