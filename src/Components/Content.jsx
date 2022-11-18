import React from "react";

const Content = (props) => {
  return (
    <>
      <div id="main">

        <div className="themeBtn">
          <h2>Overreacted</h2>

          <button id="btn" onClick={props.func}>
            Toggle
          </button>
        </div>
        <div className="content">
            <div className="sub_content">
                <h3>The Wet Codbase</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo</p>
            </div>
            <div className="sub_content">
                <h3>Goodby, clean code</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo</p>
            </div>
            <div className="sub_content">
                <h3>My Deacde In Review</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo</p>
            </div>
            <div className="sub_content">
                <h3>What Are The React Team Principles</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo</p>
            </div>
        </div>
      </div>
    </>
  );
};

export default Content;
