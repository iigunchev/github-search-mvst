import { ComponentMeta, ComponentStory } from '@storybook/react';
import Header from '../../src/components/layout/Header';

export default {
  title: 'Components/Header',
  component: Header,
  args: {
    title: 'Next.js',
  }
} as ComponentMeta<typeof Header>;

export const Navbar: ComponentStory<typeof Header> = (args) => (
  <Header {...args} />
);
