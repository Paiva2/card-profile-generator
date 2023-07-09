import { CaretDown, DotsSix, LinkSimple } from "@phosphor-icons/react"
import {
  DropdownList,
  LinkWrapper,
  NewCardContainer,
  NewCardHeader,
  PlatformTrigger,
  SocialWrapper,
} from "./styles"
import { useState, useRef, useEffect } from "react"
import { PlatformSchema } from "../../../../../types"
import { platformOptions } from "../../utils/platformOptionsSchemas"
interface NewCardProps {
  cardMedia: PlatformSchema
  setPlatformsCards: React.Dispatch<React.SetStateAction<PlatformSchema[]>>
  platformCards: PlatformSchema[]
}

const NewCard = ({ cardMedia, setPlatformsCards, platformCards }: NewCardProps) => {
  const [openPlatformList, setOpenPlatformList] = useState(false)
  const cardPosition = platformCards.indexOf(cardMedia) + 1

  const linkRef = useRef<HTMLInputElement>(null)

  const handleSetPlatform = (socialMediaSelected: PlatformSchema) => {
    const editedCard = {
      ...cardMedia,
      platform: socialMediaSelected.platform,
      prefix: socialMediaSelected.prefix,
      icon: socialMediaSelected.icon,
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
    if (linkRef.current) {
      linkRef.current.defaultValue = cardMedia.prefix
    }
  }, [cardMedia])

  const alreadyExistedOptions: number[] = []

  platformCards.forEach((cards) => alreadyExistedOptions.push(cards.socialMediaId))

  const options = platformOptions.filter(
    (options) => !alreadyExistedOptions.includes(options.socialMediaId)
  )

  return (
    <NewCardContainer>
      <NewCardHeader>
        <span>
          <DotsSix size={20} weight="bold" /> Link #{cardPosition}
        </span>
        <button>Remove</button>
      </NewCardHeader>

      <SocialWrapper>
        <label>
          Platform
          <PlatformTrigger
            platformlist={openPlatformList ? "true" : undefined}
            onClick={() => setOpenPlatformList(!openPlatformList)}
          >
            <span>
              <div>
                {cardMedia.icon} {cardMedia.platform}
              </div>
              <CaretDown
                color="#5492cd"
                size={18}
                weight="bold"
                className="arrow-icon"
              />
            </span>
          </PlatformTrigger>
          <DropdownList platformlist={openPlatformList ? "true" : undefined}>
            {options.map((option) => {
              return (
                <li
                  onClick={() => handleSetPlatform(option)}
                  key={option.socialMediaId}
                >
                  <span>
                    {option.icon} {option.platform}
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
              onChange={() => console.log(linkRef?.current?.value)}
              ref={linkRef}
              type="text"
            />
          </LinkWrapper>
        </label>
      </SocialWrapper>
    </NewCardContainer>
  )
}

export default NewCard
