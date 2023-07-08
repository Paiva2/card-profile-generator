import { UserSquare, UserCircle, LinkSimple } from "@phosphor-icons/react"
import {
  CardDetailsWrapper,
  HeaderContainer,
  HeaderWrapper,
  LogoWrapper,
  NavigateSections,
} from "./styles"

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <LogoWrapper>
          <UserSquare size={30} weight="regular" />
          <p>profile generator</p>
        </LogoWrapper>
        <NavigateSections>
          <button>
            <LinkSimple size={16} weight="bold" />
            Links
          </button>
          <button>
            <UserCircle size={16} weight="bold" /> Profile
          </button>
        </NavigateSections>

        <CardDetailsWrapper>
          <button>Card Details</button>
        </CardDetailsWrapper>
      </HeaderWrapper>
    </HeaderContainer>
  )
}

export default Header
