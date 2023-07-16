import { UserFocus, UserCircle, LinkSimple, Eye } from "@phosphor-icons/react"
import {
  CardDetailsWrapper,
  HeaderContainer,
  HeaderWrapper,
  LogoWrapper,
  NavigateSections,
  NavigationHeader,
} from "./styles"
import { GlobalContext } from "../../context/globalContext/GlobalStorage"
import { useContext, useEffect, useState } from "react"

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 940)

  const handleWindowSizeChange = () => {
    setIsMobile(window.innerWidth <= 940)
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange)

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange)
    }
  }, [])

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
            <UserFocus size={30} weight="regular" />
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
                <span>{section.name}</span>
              </button>
            ))}
          </NavigateSections>

          <CardDetailsWrapper>
            <button
              type="button"
              onClick={() => setOpenCardDetails(!openCardDetails)}
            >
              {isMobile ? (
                <Eye size={25} color="#5492cd" weight="bold" />
              ) : (
                "Card Details"
              )}
            </button>
          </CardDetailsWrapper>
        </NavigationHeader>
      </HeaderWrapper>
    </HeaderContainer>
  )
}

export default Header
