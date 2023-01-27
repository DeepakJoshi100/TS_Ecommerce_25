import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Input } from "./Input";

export default {
  title: "Input",
  component: Input,
  argTypes: {
    size: { options: ["small", "medium", "large"], control: { type: "radio" } },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => (
  <Input {...args}></Input>
);

export const primary = Template.bind({});
primary.args = { theme: "primary" };

export const secondary = Template.bind({});
secondary.args = { theme: "secondary" };
