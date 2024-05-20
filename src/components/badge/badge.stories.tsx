import { BadgeProps } from './badge';

export default {
  title: 'Components/Badge',
  argTypes: {
    text: {
      description: 'Badge Label',
    },
    variant: {
      description: 'Badge Type',
      control: { type: 'inline-radio' },
      options: ['default', 'info', 'success', 'warning', 'error', 'primary', 'secondary'],
    },
  },
};

const Template = ({ text, variant }: BadgeProps) => `<stellar-badge text="${text}" variant="${variant}"></stellar-badge>`;

export const Default = (args: BadgeProps) => Template(args);
Default.args = {
  text: 'Default',
  variant: 'default',
};

export const Info = (args: BadgeProps) => Template(args);
Info.args = {
  text: 'Info',
  variant: 'info',
};

export const Success = (args: BadgeProps) => Template(args);
Success.args = {
  text: 'Success',
  variant: 'success',
};

export const Warning = (args: BadgeProps) => Template(args);
Warning.args = {
  text: 'Warning',
  variant: 'warning',
};

export const Error = (args: BadgeProps) => Template(args);
Error.args = {
  text: 'Error',
  variant: 'error',
};

export const Primary = (args: BadgeProps) => Template(args);
Primary.args = {
  text: 'Primary',
  variant: 'primary',
};

export const Secondary = (args: BadgeProps) => Template(args);
Secondary.args = {
  text: 'Secondary',
  variant: 'secondary',
};
