import { IconProps } from "./icon";

export default {
  title: 'Components/Icons',
  argTypes: {
    name: {
      description: 'Name of Icon',
      control: {
        type: 'text',
      },
    },
    size: {
      description: 'Icon Size',
      control: {
        type: 'inline-radio',
      },
      options: ['xs', 's', 'm', 'l', 'xl'],
    },
  },
};

const Template = ({ name, size }: IconProps) =>
  `
  <style>
    stellar-icon::part(icon-element) {
      color: black;
    }
  </style>
  <stellar-icon name="${name}" size="${size}"></stellar-icon>
  `;

export const Icon = (args: IconProps) => Template(args);
Icon.args = {
  name: "pen",
  size: "m",
};
