import { UserSquare, UserCircle, LinkSimple } from "@phosphor-icons/react"
import {
  CardDetailsWrapper,
  HeaderContainer,
  HeaderWrapper,
  LogoWrapper,
  NavigateSections,
  NavigationHeader,
} from "./styles"
import { GlobalContext } from "../../context/globalContext/GlobalStorage"
import { useContext } from "react"

const Header = () => {
  const { activeSection, openCardDetails, setOpenCardDetails, setActiveSection } =
    useContext(GlobalContext)

  const menuSections = [
    {
      name: "Links",
      value: "links",
    },
    {
      name: "Profile",
      value: "profile",
    },
  ]

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <NavigationHeader>
          <LogoWrapper>
            <UserSquare size={30} weight="regular" />
            <p>profile generator</p>
          </LogoWrapper>
          <NavigateSections>
            {menuSections.map((section) => (
              <button
                key={section.name}
                className={activeSection === section.value ? "active" : ""}
                type="button"
                onClick={() => setActiveSection(section.value)}
              >
                {section.value === "profile" ? (
                  <UserCircle size={16} weight="bold" />
                ) : (
                  <LinkSimple size={16} weight="bold" />
                )}
                {section.name}
              </button>
            ))}
          </NavigateSections>

          <CardDetailsWrapper>
            <button
              type="button"
              onClick={() => setOpenCardDetails(!openCardDetails)}
            >
              Card Details
            </button>
          </CardDetailsWrapper>
        </NavigationHeader>
      </HeaderWrapper>
    </HeaderContainer>
  )
}

export default Header
