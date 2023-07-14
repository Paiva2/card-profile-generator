import {
  FacebookLogo,
  GithubLogo,
  LinkedinLogo,
  TwitterLogo,
  YoutubeLogo,
} from "@phosphor-icons/react"

export const platformIcons = {
  Github: <GithubLogo size={18} weight="fill" />,
  Youtube: <YoutubeLogo size={18} weight="fill" />,
  Linkedin: <LinkedinLogo size={18} weight="fill" />,
  Facebook: <FacebookLogo size={18} weight="fill" />,
  Twitter: <TwitterLogo size={18} weight="fill" />,
}

export const platformOptions = [
  {
    socialMediaId: 1,
    platform: "Github",
    prefix: "https://github.com/",
  },
  {
    socialMediaId: 2,
    platform: "Youtube",
    prefix: "https://youtube.com/",
  },
  {
    socialMediaId: 3,
    platform: "Linkedin",
    prefix: "https://www.linkedin.com/in/",
  },
  {
    socialMediaId: 4,
    platform: "Facebook",
    prefix: "https://www.facebook.com/",
  },
  {
    socialMediaId: 5,
    platform: "Twitter",
    prefix: "https://www.twitter.com/",
  },
]
