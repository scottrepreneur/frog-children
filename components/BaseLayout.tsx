const BaseLayout = ({ status, children }: any) => {
  return (
    <div
      style={{
        alignItems: "center",
        background:
          status === "response"
            ? "linear-gradient(to right, #432889, #17101F)"
            : "black",
        backgroundSize: "100% 100%",
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
        height: "100%",
        justifyContent: "center",
        textAlign: "center",
        width: "100%",
      }}
    >
      {children}
    </div>
  );
};

export default BaseLayout;
