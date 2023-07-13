import { createContext, useState } from "react"
import { GlobalContextProps, PlatformSchema } from "../../../types"
import { platformOptions } from "../../components/LinkCustomization/utils/platformOptionsSchemas"
import { v4 as uuidv4 } from "uuid"

interface Props {
  children: React.ReactNode
}
export const GlobalContext = createContext<GlobalContextProps>({} as any)

const GlobalStorage = ({ children }: Props) => {
  const [platformCards, setPlatformsCards] = useState<Array<PlatformSchema>>([
    { id: String(uuidv4()), ...platformOptions[0], link: platformOptions[0].prefix },
  ])

  const defaultProfilePicture =
    "https://soccerpointeclaire.com/wp-content/uploads/2021/06/default-profile-pic-e1513291410505.jpg"

  const [activeSection, setActiveSection] = useState("")
  const [profilePic, setProfilePic] = useState(defaultProfilePicture)

  return (
    <GlobalContext.Provider
      value={{
        platformCards,
        activeSection,
        setPlatformsCards,
        setActiveSection,
        profilePic,
        setProfilePic,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalStorage
