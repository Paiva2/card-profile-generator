import {
  FacebookLogo,
  GithubLogo,
  LinkedinLogo,
  TwitterLogo,
  YoutubeLogo,
} from "@phosphor-icons/react"

export const platformOptions = [
  {
    socialMediaId: 1,
    platform: "Github",
    prefix: "https://github.com/",
    icon: <GithubLogo size={18} weight="fill" />,
  },
  {
    socialMediaId: 2,
    platform: "Youtube",
    prefix: "https://youtube.com/",
    icon: <YoutubeLogo size={18} weight="fill" />,
  },
  {
    socialMediaId: 3,
    platform: "Linkedin",
    prefix: "https://www.linkedin.com/in/",
    icon: <LinkedinLogo size={18} weight="fill" />,
  },
  {
    socialMediaId: 4,
    platform: "Facebook",
    prefix: "https://www.facebook.com/",
    icon: <FacebookLogo size={18} weight="fill" />,
  },
  {
    socialMediaId: 5,
    platform: "Twitter",
    prefix: "https://www.twitter.com/",
    icon: <TwitterLogo size={18} weight="fill" />,
  },
]
