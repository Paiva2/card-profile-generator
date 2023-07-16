import { createContext, useLayoutEffect, useState } from "react"
import {
  GlobalContextProps,
  PersonalProfileSchema,
  PlatformSchema,
} from "../../../types"
import { platformOptions } from "../../components/LinkCustomization/utils/platformOptionsSchemas"
import { v4 as uuidv4 } from "uuid"
import { useLocalStorage } from "../../hooks/useLocalStorage"

interface Props {
  children: React.ReactNode
}
export const GlobalContext = createContext<GlobalContextProps>({} as any)

const GlobalStorage = ({ children }: Props) => {
  const socialMediaCards = useLocalStorage("profileCard")
  const profilePictureStorage = useLocalStorage("profilePic")
  const personalProfileInformations = useLocalStorage("personalInformations")
  const [openCardDetails, setOpenCardDetails] = useState(false)

  const [platformCards, setPlatformsCards] = useState<Array<PlatformSchema>>([])

  const [getProfilePicFromInput, setGetProfilePicFromInput] = useState<
    Blob | MediaSource
  >()

  const [openCardDetailsModal, setOpenCardDetailsModal] = useState(false)

  const defaultSchemaCard = [
    {
      id: String(uuidv4()),
      ...platformOptions[0],
      link: platformOptions[0].prefix,
    },
  ]

  const defaultProfilePicture =
    "https://soccerpointeclaire.com/wp-content/uploads/2021/06/default-profile-pic-e1513291410505.jpg"

  const [activeSection, setActiveSection] = useState("links")
  const [profilePic, setProfilePic] = useState(defaultProfilePicture)
  const [userProfileInformations, setUserProfileInformations] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@default.com",
  })

  useLayoutEffect(() => {
    if (socialMediaCards) {
      setPlatformsCards(socialMediaCards as PlatformSchema[])
    } else {
      setPlatformsCards(defaultSchemaCard)
    }

    if (profilePictureStorage) {
      setProfilePic(profilePictureStorage as string)
    }

    if (personalProfileInformations) {
      setUserProfileInformations(
        personalProfileInformations as PersonalProfileSchema
      )
    }
  }, [socialMediaCards])

  return (
    <GlobalContext.Provider
      value={{
        platformCards,
        activeSection,
        profilePic,
        userProfileInformations,
        getProfilePicFromInput,
        openCardDetailsModal,
        openCardDetails,
        setOpenCardDetails,
        setOpenCardDetailsModal,
        setGetProfilePicFromInput,
        setUserProfileInformations,
        setPlatformsCards,
        setActiveSection,
        setProfilePic,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalStorage
