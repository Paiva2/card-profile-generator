import { createContext, useState } from "react"
import { PlatformSchema } from "../../../types"
import { platformOptions } from "../../components/LinkCustomization/utils/platformOptionsSchemas"
import { v4 as uuidv4 } from "uuid"

interface Props {
  children: React.ReactNode
}

export const GlobalContext = createContext<any>({} as any)

const GlobalStorage = ({ children }: Props) => {
  const [platformCards, setPlatformsCards] = useState<Array<PlatformSchema>>([
    { id: String(uuidv4()), ...platformOptions[0], link: platformOptions[0].prefix },
  ])

  return (
    <GlobalContext.Provider value={{ platformCards, setPlatformsCards }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalStorage
