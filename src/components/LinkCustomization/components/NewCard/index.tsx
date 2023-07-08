import { CaretDown, DotsSix, LinkSimple } from "@phosphor-icons/react"
import {
  LinkWrapper,
  NewCardContainer,
  NewCardHeader,
  PlatformTrigger,
  SocialWrapper,
} from "./styles"

const NewCard = () => {
  return (
    <NewCardContainer>
      <NewCardHeader>
        <span>
          <DotsSix size={20} weight="bold" /> Link #1
        </span>
        <button>Remove</button>
      </NewCardHeader>

      <SocialWrapper>
        <label>
          Platform
          <PlatformTrigger>
            <span>
              Github <CaretDown color="#5492cd" size={18} weight="bold" />
            </span>
          </PlatformTrigger>
        </label>
        <label>
          Link
          <LinkWrapper>
            <LinkSimple size={16} weight="bold" />
            <input type="text" />
          </LinkWrapper>
        </label>
      </SocialWrapper>
    </NewCardContainer>
  )
}

export default NewCard
