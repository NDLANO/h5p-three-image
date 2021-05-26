// @ts-check

import React from "react";
import Main from "../../../scripts/components/Main";
import { defaultAppContext } from "../../../.storybook/config/contexts";
import { H5PContext } from "../../../scripts/context/H5PContext";
import AudioButton from "../../../scripts/components/HUD/Buttons/AudioButton";

export default {
  title: "AudioButton",
  component: AudioButton,
  argTypes: {},
};

const Template = (args) => (
  <H5PContext.Provider value={defaultAppContext}>
    <Main {...args}>
      <AudioButton {...args}></AudioButton>
    </Main>
  </H5PContext.Provider>
);

export const Audio_Button = Template.bind({});
Audio_Button.args = {
  
};
