import { useContext, useState } from "react"
import NewCard from "./components/NewCard"
import {
  CustomizationWrapper,
  CustomizeHeader,
  CustomizeLinksContainer,
  LinkCardsList,
  NewLinkButton,
  SaveButton,
  SaveWrapper,
  Text,
} from "./styles"
import { v4 as uuidv4 } from "uuid"
import { platformOptions } from "./utils/platformOptionsSchemas"
import { GlobalContext } from "../../context/globalContext/GlobalStorage"
import { DragDropContext, Droppable, Draggable, DropResult } from "@hello-pangea/dnd"

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

  function handleOnDragEnd(cardToDrag: DropResult) {
    if (!cardToDrag.destination) return

    const platformCardsCopy = [...platformCards]

    const [reorderedCards] = platformCardsCopy.splice(cardToDrag.source.index, 1)

    platformCardsCopy.splice(cardToDrag.destination.index, 0, reorderedCards)

    setPlatformsCards(platformCardsCopy)
  }

  return (
    <CustomizeLinksContainer>
      <CustomizationWrapper>
        <CustomizeHeader>
          <div>
            <Text istitle="true">Customize your Links</Text>
            <Text>
              Add/edit/remove links below and then share all your profiles with the
              world!
            </Text>
          </div>
          <NewLinkButton onClick={handleNewLink}>+ Add new link</NewLinkButton>
        </CustomizeHeader>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="platforms">
            {(provided) => (
              <LinkCardsList
                {...provided.droppableProps}
                ref={provided.innerRef}
                key="platforms"
              >
                {platformCards.map((cardMedia, index) => {
                  return (
                    <Draggable
                      key={cardMedia.id}
                      draggableId={cardMedia.socialMediaId.toString()}
                      index={index}
                    >
                      {(provided) => (
                        <NewCard
                          key={cardMedia.id}
                          provided={provided}
                          cardMedia={cardMedia}
                          setPlatformsCards={setPlatformsCards}
                          platformCards={platformCards}
                        />
                      )}
                    </Draggable>
                  )
                })}
                {provided.placeholder}
              </LinkCardsList>
            )}
          </Droppable>
        </DragDropContext>
      </CustomizationWrapper>

      <SaveWrapper>
        <SaveButton onClick={saveCards}>Save</SaveButton>
      </SaveWrapper>
    </CustomizeLinksContainer>
  )
}

export default LinkCustomization
