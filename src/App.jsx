import React from "react";

const style = {
  margin: "0 auto",
  textAlign: "center",
  fontSize: 48,
  height: "100vh",
  fontFamily: "FallingSky",
};

const App = () => (
  <div style={style}>
    <div
      style={{
        backgroundImage: 'url("/img/glados.png")',
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        float: "right",
        width: 200,
        height: 200,
      }}
    />
    Aperture Science
    <div style={{ fontSize: 32 }}>Enrichment Datacenter</div>
  </div>
);

export default App;
