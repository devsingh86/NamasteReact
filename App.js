import React from "react";
import ReactDOM from "react-dom/client";

const app_root = document.getElementById("root");

//Babel compiles JSX => React.createElement => Object => HTML (DOM)

const Title = () => {
  <h1>
    Namaste <em>React!</em>
  </h1>;
};

//Functional Component

const ContainerComponent = () => {
  return (
    <div className="container">
      <Title />
      <h2>
        Namaste <em>React!</em> - Functional Component.
      </h2>
      <p title="para" key="desc">
        From ZERO...To HERO
      </p>
    </div>
  );
};

/*const container = React.createElement("div", { id: "container" }, [
  heading,
  para,
]);*/
const root = ReactDOM.createRoot(app_root);
root.render(<ContainerComponent />);
