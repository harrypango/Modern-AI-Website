import React from "react";
import "./whatGPT3.css";
import { Feature } from "../../components";
import { whatGPT3_data } from "./data";

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature title="What is GPT-3" text={whatGPT3_data[0].text} />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore the library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title="Chatbots" text={whatGPT3_data[1].text} />
        <Feature title="Knowledgebase" text={whatGPT3_data[2].text} />
        <Feature title="Education" text={whatGPT3_data[3].text} />
      </div>
    </div>
  );
};

export default WhatGPT3;
