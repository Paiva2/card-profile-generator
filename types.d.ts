import { ReactNode } from "react"

export interface PlatformSchema {
  id?: string
  socialMediaId: number
  platform: string
  prefix: string
  icon: ReactNode
  link: string
}
