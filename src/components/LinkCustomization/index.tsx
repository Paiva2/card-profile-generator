import { useContext } from "react"
import NewCard from "./components/NewCard"
import {
  CustomizationWrapper,
  CustomizeHeader,
  CustomizeLinksContainer,
  LinkCardsList,
  NewLinkButton,
  Text,
} from "./styles"
import { v4 as uuidv4 } from "uuid"
import { platformOptions } from "./utils/platformOptionsSchemas"
import { GlobalContext } from "../../context/globalContext/GlobalStorage"
import { DragDropContext, Droppable, Draggable, DropResult } from "@hello-pangea/dnd"

const LinkCustomization = () => {
  const { platformCards, setPlatformsCards } = useContext(GlobalContext)

  const handleNewLink = () => {
    if (platformCards.length === 5) return

    const getPlatformsAlreadySelected =
      Array.isArray(platformCards) &&
      platformCards.map((card) => {
        return card.platform
      })

    const newPlatformLink = platformOptions.find(
      (option) =>
        Array.isArray(getPlatformsAlreadySelected) &&
        !getPlatformsAlreadySelected.includes(option.platform)
    )

    setPlatformsCards((oldValue) => [
      ...oldValue,
      { link: newPlatformLink?.prefix, id: String(uuidv4()), ...newPlatformLink! },
    ])
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
            <Text istitle="true">Create your links</Text>
            <Text>Add/edit/remove links below and then share it all!</Text>
          </div>
          <NewLinkButton onClick={handleNewLink}>+ New link</NewLinkButton>
        </CustomizeHeader>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="platforms">
            {(provided) => (
              <LinkCardsList
                {...provided.droppableProps}
                ref={provided.innerRef}
                key="platforms"
              >
                {Array.isArray(platformCards) &&
                  platformCards.map((cardMedia, index) => {
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
    </CustomizeLinksContainer>
  )
}

export default LinkCustomization
