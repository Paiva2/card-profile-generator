import { useContext } from "react"
import {
  CustomizationWrapper,
  CustomizeHeader,
  CustomizeLinksContainer,
  NewCardContainer,
  Text,
  UpdateProfileMiniModalWrapper,
  UpdateProfileText,
  UpdateProfileWrapper,
} from "./styles"
import { GlobalContext } from "../../context/globalContext/GlobalStorage"
import { ImageSquare } from "@phosphor-icons/react"
import { useEffect, useState } from "react"

const ProfileCustomization = () => {
  const { profilePic, setProfilePic } = useContext(GlobalContext)
  const [getProfilePicFromInput, setGetProfilePicFromInput] = useState<
    Blob | MediaSource
  >()

  const maxAllowedSizeImage = 5 * 1024 * 1024

  useEffect(() => {
    if (getProfilePicFromInput) {
      const objectUrl = URL.createObjectURL(getProfilePicFromInput)

      setProfilePic(objectUrl)
    }

    return () => URL.revokeObjectURL(profilePic)
  }, [getProfilePicFromInput])

  const handleSetProfilePicture = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = (e.target as HTMLInputElement).files

    if (!files) return

    if (maxAllowedSizeImage < files[0].size) {
      return alert("Use a maximum size of 5mb image!")
    }

    setGetProfilePicFromInput(files[0])
  }

  return (
    <CustomizeLinksContainer>
      <CustomizationWrapper>
        <CustomizeHeader>
          <div>
            <Text istitle="true">Profile Details</Text>
            <Text>Change your personal informations below!</Text>
          </div>

          <NewCardContainer>
            <UpdateProfileWrapper>
              <div>
                <UpdateProfileText>Profile picture</UpdateProfileText>
              </div>

              <UpdateProfileMiniModalWrapper>
                <label>
                  <img alt="User profile picture" src={profilePic} />
                  <div>
                    <span>
                      <ImageSquare size={35} weight="fill" />
                    </span>
                    Change image
                  </div>
                  <input
                    accept=".jpg, .jpeg, .png"
                    onChange={(e) => handleSetProfilePicture(e)}
                    type="file"
                  />
                </label>

                <p>Use PNG, JPG JPEG images with a maximum of 5MB.</p>
              </UpdateProfileMiniModalWrapper>
            </UpdateProfileWrapper>
          </NewCardContainer>
        </CustomizeHeader>
      </CustomizationWrapper>
    </CustomizeLinksContainer>
  )
}

export default ProfileCustomization
