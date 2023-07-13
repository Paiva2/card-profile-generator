import { ReactNode } from "react"

export interface GlobalContextProps {
  platformCards: PlatformSchema[]
  activeSection: string
  setPlatformsCards: React.Dispatch<React.SetStateAction<PlatformSchema[]>>
  setActiveSection: React.Dispatch<React.SetStateAction<string>>
  profilePic: string
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
