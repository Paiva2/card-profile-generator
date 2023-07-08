import { ArrowDown } from "@phosphor-icons/react"
import { CustomizeLinksContainer } from "./styles"

const LinkCustomization = () => {
  return (
    <CustomizeLinksContainer>
      <div>
        <p>Customize your Links</p>
        <p>
          Add/edit/remove links below and then share all your profiles with the
          world!
        </p>
        <button>+ Add new link</button>
      </div>

      <div
        style={{
          background: "#FAFAFA",
        }}
      >
        <div>
          Link #1
          <button>Remove</button>
        </div>

        <div>
          <label>
            Platform
            <div>
              <button>
                Github <ArrowDown color="#5492cd" size={44} weight="bold" />
              </button>
            </div>
          </label>
          <label>
            Link
            <input type="text" />
          </label>
        </div>
      </div>
    </CustomizeLinksContainer>
  )
}

export default LinkCustomization
