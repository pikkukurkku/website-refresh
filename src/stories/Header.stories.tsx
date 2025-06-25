import type { Meta, StoryObj } from "@storybook/react";
import Header from "../components/ui/Header";

// Import your mock's setter function
import { __setMockPathname } from './next-navigation-mock'; // adjust path if needed


interface HeaderStoryArgs {
    pathname: string;
  }

const meta: Meta<typeof Header> = {
  title: "Components/Header (UI Only)",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story, context) => {
        const args = context.args as HeaderStoryArgs;
        __setMockPathname(args?.pathname || '/');
        return <Story />;
    },
  ],
  argTypes: {
    pathname: {
      control: 'text',
      description: 'Simulated pathname for usePathname hook',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  name: "Default View",
  args: {
    pathname: '/',
  },
};

export const ProjekteSelected: Story = {
  name: "Projekte Selected",
  args: {
    pathname: '/fr',
  },
};
