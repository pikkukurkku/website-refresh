// Header.stories.jsx

import React, { useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Header from '../components/ui/Header';

const ScrollDecorator = (Story: React.FC) => {
  useEffect(() => {
    // Make the body scrollable
    const originalStyles = {
      minHeight: document.body.style.minHeight,
      margin: document.body.style.margin,
      padding: document.body.style.padding,
      overflowY: document.body.style.overflowY,
    };

    document.body.style.minHeight = '200vh'; // tall enough for scrolling
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.overflowY = 'scroll';

    return () => {
      // cleanup: restore original styles
      document.body.style.minHeight = originalStyles.minHeight;
      document.body.style.margin = originalStyles.margin;
      document.body.style.padding = originalStyles.padding;
      document.body.style.overflowY = originalStyles.overflowY;
    };
  }, []);

  return (
    <>
      <Story />
      <div style={{ height: '150vh', backgroundColor: '#f0f0f0', padding: 20 }}>
        <h2 id="home" style={{ paddingTop: 100 }}>Home Section</h2>
        <p>Scroll down to see header hide, scroll up to see it reappear.</p>
        <div style={{ height: '50vh' }}></div>
        <h2 id="projects">Projects Section</h2>
        <div style={{ height: '50vh' }}></div>
        <h2 id="kunden">Kunden Section</h2>
        <div style={{ height: '50vh' }}></div>
        <h2 id="werk&team">Werk & Team Section</h2>
        <div style={{ height: '50vh' }}></div>
        <h2 id="kontakt">Kontakt Section</h2>
      </div>
    </>
  );
};

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  parameters: { layout: 'fullscreen' },
  decorators: [ScrollDecorator],
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {};
