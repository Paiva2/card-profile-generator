import { useContext } from "react"
import {
  CustomizationWrapper,
  CustomizeHeader,
  CustomizeLinksContainer,
  InputsWrapper,
  ProfileImageContainer,
  Text,
  UpdateProfileMiniModalWrapper,
  UpdateProfileText,
  UpdateProfileWrapper,
  UserInformationsContainer,
} from "./styles"
import { GlobalContext } from "../../context/globalContext/GlobalStorage"
import { ImageSquare } from "@phosphor-icons/react"
import { useEffect } from "react"

const ProfileCustomization = () => {
  const {
    profilePic,
    getProfilePicFromInput,
    setProfilePic,
    setUserProfileInformations,
    setGetProfilePicFromInput,
    userProfileInformations,
  } = useContext(GlobalContext)

  const maxAllowedSizeImage = 5 * 1024 * 1024 // 5MB

  useEffect(() => {
    if (getProfilePicFromInput) {
      const objectUrl = URL.createObjectURL(getProfilePicFromInput)

      setProfilePic(objectUrl)
    }

    return () => URL.revokeObjectURL(profilePic)
  }, [getProfilePicFromInput])

  const handleSetProfilePicture = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = (e.target as HTMLInputElement).files

    if (!files) return

    if (maxAllowedSizeImage < files[0].size) {
      return alert("Use a maximum size of 5mb image!")
    }

    setGetProfilePicFromInput(files[0])
  }

  const handleUpdateInputValue = (inputToUpdate: string, value: string) => {
    setUserProfileInformations((oldValue) => ({
      ...oldValue,
      [inputToUpdate]: value,
    }))
  }

  return (
    <CustomizeLinksContainer>
      <CustomizationWrapper>
        <CustomizeHeader>
          <div>
            <Text istitle="true">Profile Details</Text>
            <Text>Change your personal informations below!</Text>
          </div>

          <ProfileImageContainer>
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
          </ProfileImageContainer>

          <UserInformationsContainer>
            <InputsWrapper>
              <label>
                <UpdateProfileText>First name*</UpdateProfileText>
                <input
                  defaultValue={userProfileInformations.firstName}
                  onChange={(e) =>
                    handleUpdateInputValue("firstName", e.target.value)
                  }
                  placeholder="John"
                  type="text"
                  maxLength={19}
                  required
                />
              </label>
              <label>
                <UpdateProfileText>Last name*</UpdateProfileText>
                <input
                  defaultValue={userProfileInformations.lastName}
                  onChange={(e) =>
                    handleUpdateInputValue("lastName", e.target.value)
                  }
                  placeholder="Doe"
                  type="text"
                  maxLength={16}
                  required
                />
              </label>
              <label>
                <UpdateProfileText>E-mail*</UpdateProfileText>
                <input
                  defaultValue={userProfileInformations.email}
                  onChange={(e) => handleUpdateInputValue("email", e.target.value)}
                  placeholder="email@email.com"
                  type="email"
                  maxLength={65}
                  required
                />
              </label>
            </InputsWrapper>
          </UserInformationsContainer>
        </CustomizeHeader>
      </CustomizationWrapper>
    </CustomizeLinksContainer>
  )
}

export default ProfileCustomization
