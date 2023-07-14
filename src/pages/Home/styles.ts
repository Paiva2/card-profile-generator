import { styled } from "styled-components"

export const MainContainer = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const HomeWrapper = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  gap: 1.25rem;
`

export const DemonstrationContainer = styled.div`
  flex: 1;
  align-self: flex-start;
`
export const RightContainer = styled.div`
  width: 55%;
  background-color: #fff;
  border-radius: 5px;
  overflow: hidden;
  align-self: start;
  height: 600px;
`

export const CustomizationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
`

export const SaveWrapper = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  background-color: #fff;
  padding: 15px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SaveButton = styled.button`
  all: unset;
  gap: 0.3125rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  padding: 0.625rem 2.5rem;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 500;
  background-color: #5492cd;
  color: #fff;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: #397ab8;
  }
`
interface SavedToastInterface {
  opentoast: boolean
}

export const SavedToast = styled.div<SavedToastInterface>`
  position: absolute;
  transition: 0.3s ease-in-out;
  opacity: ${(props) => (props.opentoast ? 1 : 0)};
  bottom: ${(props) => (props.opentoast ? "100px" : "40px")};
  visibility: ${(props) => (props.opentoast ? "visible" : "hidden")};
  transform: ${(props) =>
    props.opentoast ? "transform: translateY(0%)" : "translateY(35px)"};
`

export const Toast = styled.div`
  background: rgba(0, 0, 0, 0.8);
  padding: 0.9375rem 1.125rem;
  color: #fff;
  border-radius: 8px;
  user-select: none;
  font-size: 0.875rem;
`

export const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1000;
  top: 0;
`
