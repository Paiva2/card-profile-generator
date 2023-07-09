import {
  CaretDown,
  DotsSix,
  LinkSimple,
  GithubLogo,
  YoutubeLogo,
  FacebookLogo,
  TwitterLogo,
  LinkedinLogo,
} from "@phosphor-icons/react"
import {
  DropdownList,
  LinkWrapper,
  NewCardContainer,
  NewCardHeader,
  PlatformTrigger,
  SocialWrapper,
} from "./styles"
import { useState, useRef, useEffect } from "react"

interface PlatformSchema {
  id: number
  platform: string
  prefix: string
  icon: React.ReactNode
}

const NewCard = () => {
  const [openPlatformList, setOpenPlatformList] = useState(false)
  const [selectedPlatform, setSelectedPlatform] = useState<PlatformSchema>({
    id: 1,
    platform: "Github",
    prefix: "https://github.com/",
    icon: <GithubLogo size={18} weight="fill" />,
  })

  const linkRef = useRef<HTMLInputElement>(null)

  const platformOptions = [
    {
      id: 1,
      platform: "Github",
      prefix: "https://github.com/",
      icon: <GithubLogo size={18} weight="fill" />,
    },
    {
      id: 2,
      platform: "Youtube",
      prefix: "https://youtube.com/",
      icon: <YoutubeLogo size={18} weight="fill" />,
    },
    {
      id: 3,
      platform: "Linkedin",
      prefix: "https://www.linkedin.com/in/",
      icon: <LinkedinLogo size={18} weight="fill" />,
    },
    {
      id: 4,
      platform: "Facebook",
      prefix: "https://www.facebook.com/",
      icon: <FacebookLogo size={18} weight="fill" />,
    },
    {
      id: 5,
      platform: "Twitter",
      prefix: "https://www.twitter.com/",
      icon: <TwitterLogo size={18} weight="fill" />,
    },
  ]

  const handleSetPlatform = (platform: PlatformSchema) => {
    setSelectedPlatform(platform)
  }

  useEffect(() => {
    if (linkRef.current) {
      linkRef.current.defaultValue = selectedPlatform.prefix
    }
  }, [selectedPlatform])

  return (
    <NewCardContainer>
      <NewCardHeader>
        <span>
          <DotsSix size={20} weight="bold" /> Link #1
        </span>
        <button>Remove</button>
      </NewCardHeader>

      <SocialWrapper>
        <label>
          Platform
          <PlatformTrigger
            platformList={openPlatformList}
            onClick={() => setOpenPlatformList(!openPlatformList)}
          >
            <span>
              <div>
                {selectedPlatform.icon} {selectedPlatform.platform}
              </div>
              <CaretDown
                color="#5492cd"
                size={18}
                weight="bold"
                className="arrow-icon"
              />
            </span>
          </PlatformTrigger>
          <DropdownList platformList={openPlatformList}>
            {platformOptions.map((option) => {
              return (
                <li onClick={() => handleSetPlatform(option)} key={option.id}>
                  <span>
                    {option.icon} {option.platform}
                  </span>
                </li>
              )
            })}
          </DropdownList>
        </label>
        <label>
          Link
          <LinkWrapper>
            <LinkSimple size={16} weight="bold" />
            <input
              onChange={() => console.log(linkRef?.current?.value)}
              ref={linkRef}
              type="text"
            />
          </LinkWrapper>
        </label>
      </SocialWrapper>
    </NewCardContainer>
  )
}

export default NewCard
