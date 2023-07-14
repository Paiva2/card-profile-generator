import { CaretDown, DotsSix, LinkSimple } from "@phosphor-icons/react"
import {
  DropdownList,
  LinkWrapper,
  NewCardContainer,
  NewCardHeader,
  PlatformTrigger,
  SocialWrapper,
} from "./styles"
import { useState, useEffect } from "react"
import { PlatformSchema } from "../../../../../types"
import { platformIcons, platformOptions } from "../../utils/platformOptionsSchemas"
import { DraggableProvided } from "@hello-pangea/dnd"
interface NewCardProps {
  cardMedia: PlatformSchema
  setPlatformsCards: React.Dispatch<React.SetStateAction<PlatformSchema[]>>
  platformCards: PlatformSchema[]
  provided: DraggableProvided
}

const NewCard = ({
  cardMedia,
  setPlatformsCards,
  platformCards,
  provided: dndProvider,
}: NewCardProps) => {
  const [openPlatformList, setOpenPlatformList] = useState(false)
  const [linkValue, setLinkValue] = useState("")
  const cardPosition = platformCards.indexOf(cardMedia) + 1

  const handleSetPlatform = (socialMediaSelected: PlatformSchema) => {
    const editedCard = {
      ...cardMedia,
      platform: socialMediaSelected.platform,
      prefix: socialMediaSelected.prefix,
      socialMediaId: socialMediaSelected.socialMediaId,
    }

    const newCards = platformCards.map((cards) => {
      if (cards.id === cardMedia.id) {
        return editedCard
      }

      return cards
    })

    setPlatformsCards(newCards)
  }

  useEffect(() => {
    setLinkValue(cardMedia.prefix)
  }, [cardMedia])

  useEffect(() => {
    updateCardLinkValue()
  }, [linkValue])

  const updateCardLinkValue = () => {
    const newCardWithLinkChanges = platformCards.map((cards) => {
      if (cards.id === cardMedia.id) {
        cards.link = linkValue
      }

      return cards
    })

    setPlatformsCards(newCardWithLinkChanges)
  }

  const hideOptionsIfAlreadyExistsOnCards = () => {
    const alreadyExistedOptions: number[] = []

    platformCards.forEach((cards) => alreadyExistedOptions.push(cards.socialMediaId))

    const options = platformOptions.filter(
      (options) => !alreadyExistedOptions.includes(options.socialMediaId)
    )

    return options
  }

  const platformOptionsFiltered = hideOptionsIfAlreadyExistsOnCards()

  const handleRemoveCard = (cardId: string | undefined) => {
    if (platformCards.length === 1) return

    const filteredCardsList = platformCards.filter((cards) => cards.id !== cardId)

    setPlatformsCards(filteredCardsList)
  }

  const handleOpenPlatformsModal = () => {
    if (platformOptionsFiltered.length < 1) return

    setOpenPlatformList(!openPlatformList)
  }

  return (
    <NewCardContainer ref={dndProvider.innerRef} {...dndProvider.draggableProps}>
      <NewCardHeader>
        <span>
          <span {...dndProvider.dragHandleProps}>
            <DotsSix size={20} weight="bold" />
          </span>
          Link #{cardPosition}
        </span>
        <button onClick={() => handleRemoveCard(cardMedia.id)}>Remove</button>
      </NewCardHeader>

      <SocialWrapper>
        <label>
          Platform
          <PlatformTrigger
            platformlist={openPlatformList ? "true" : undefined}
            onClick={handleOpenPlatformsModal}
          >
            <span>
              <div>
                {platformIcons[cardMedia.platform as keyof typeof platformIcons]}
                {cardMedia.platform}
              </div>

              {platformOptionsFiltered.length > 0 && (
                <CaretDown
                  color="#5492cd"
                  size={18}
                  weight="bold"
                  className="arrow-icon"
                />
              )}
            </span>
          </PlatformTrigger>
          <DropdownList platformlist={openPlatformList ? "true" : undefined}>
            {platformOptionsFiltered.map((option) => {
              return (
                <li
                  onClick={() => handleSetPlatform(option)}
                  key={option.socialMediaId}
                >
                  <span>
                    {platformIcons[option.platform as keyof typeof platformIcons]}
                    {option.platform}
                  </span>
                </li>
              )
            })}
          </DropdownList>
        </label>
        <label>
          Link
          <LinkWrapper>
            <LinkSimple size={16} weight="bold" />
            <input
              onChange={(e) => {
                setLinkValue(e.target.value)
              }}
              value={linkValue}
              type="text"
            />
          </LinkWrapper>
        </label>
      </SocialWrapper>
    </NewCardContainer>
  )
}

export default NewCard
