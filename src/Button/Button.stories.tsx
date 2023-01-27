import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "./Button";
import "../index.css";

const ButtonStories = {
  title: "Button",
  component: Button,
  argTypes: {
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof Button>;
export default ButtonStories;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Sign Up</Button>
);

export const primary = Template.bind({});
primary.args = { theme: "primary" };

export const secondary = Template.bind({});
secondary.args = { theme: "secondary" };
