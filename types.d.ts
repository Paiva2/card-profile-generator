import { ReactNode } from "react"

export interface GlobalContextProps {
  platformCards: PlatformSchema[]
  activeSection: string
  profilePic: string
  userProfileInformations: {
    firstName: string
    lastName: string
    email: string
  }
  getProfilePicFromInput: Blob | MediaSource | undefined
  openCardDetailsModal: boolean
  setOpenCardDetailsModal: React.Dispatch<React.SetStateAction<boolean>>
  setUserProfileInformations: React.Dispatch<
    React.SetStateAction<{
      firstName: string
      lastName: string
      email: string
    }>
  >
  setGetProfilePicFromInput: React.Dispatch<
    React.SetStateAction<Blob | MediaSource | undefined>
  >
  setPlatformsCards: React.Dispatch<React.SetStateAction<PlatformSchema[]>>
  setActiveSection: React.Dispatch<React.SetStateAction<string>>
  setProfilePic: React.Dispatch<React.SetStateAction<string>>
}

export interface PlatformSchema {
  id?: string
  socialMediaId: number
  platform: string
  prefix: string
  link?: string
}

interface PersonalProfileSchema {
  firstName: string
  lastName: string
  email: string
}
