import { DemoCardContainer } from "./styles"

const DemoCard = () => {
  return (
    <DemoCardContainer>
      <div
        style={{
          height: "100%",
        }}
      >
        <img
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%,-50%)",
            width: "550px",
          }}
          src="../../../public/Phone-demo.svg"
        />
        <div
          style={{
            zIndex: 100,
            display: "flex",
            position: "relative",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            flexDirection: "column",
          }}
        >
          <div>Github {"->"}</div>
          <div>Youtube {"->"}</div>
          <div>Linkedin {"->"}</div>
        </div>
      </div>
    </DemoCardContainer>
  )
}

export default DemoCard
