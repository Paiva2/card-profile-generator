import { UserSquare } from "@phosphor-icons/react"
import { HeaderContainer, HeaderWrapper, LogoWrapper } from "./styles"

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <LogoWrapper>
          <UserSquare size={30} weight="regular" />
          <p>
            profile <strong>generator</strong>
          </p>
        </LogoWrapper>
        <div>
          <p>Customize your Links</p>
          <p>Customize your Profile</p>
        </div>

        <div>Card Details</div>
      </HeaderWrapper>
    </HeaderContainer>
  )
}

export default Header
