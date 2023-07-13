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
  setUserProfileInformations: React.Dispatch<
    React.SetStateAction<{
      firstName: string
      lastName: string
      email: string
    }>
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
  icon: ReactNode
  link?: string
}
