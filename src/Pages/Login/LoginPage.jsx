import React, { useEffect } from "react";
import FormComponent from "../../components/shared/Form/FormComponent";
import "./LoginPage.css";
function LoginPage({ auth }) {
  return (
    <>
      <img
        className="logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR91x6TWJ98QyzIjYPu0xJcEcJCvjDM3OliD0AP2PY&s"
      ></img>
      <hr></hr>
      <div className="container">
        <div
          style={{
            width: "60%",
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: "column",
          }}
        >
          <h1>GitLab Community Edition </h1>
          <h5>Open source software to collaborate on code</h5>
          <p>
            Manage git repositories with fine grained access controls that keeps
            your secure Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem nemo sequi consequuntur, in temporibus odit magnam
            dolorem neque nihil eum deserunt, quae placeat nisi modi asperiores.
            Dicta ratione pariatur aliquid.
          </p>
        </div>
        <div className="boxcontainer">
          <FormComponent sup={false} />
          <FormComponent sup={true} />
        </div>
      </div>
    </>
  );
}

export default LoginPage;
