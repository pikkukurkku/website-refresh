// src/stories/Hero.stories.tsx
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import Hero from '../components/ui/Hero';

const meta: Meta<typeof Hero> = {
  title: 'Components/Hero',
  component: Hero,
  parameters: {
    layout: 'fullscreen',           // full bleed width
    backgrounds: { default: 'dark' } // match your dark theme by default
  },
};

export default meta;
type Story = StoryObj<typeof Hero>;

export const Default: Story = {
  args: {}, // Add empty args object
};
