import { ComponentMeta, ComponentStory } from '@storybook/react';
import SearchBar from '../../src/components/SearchBar/SearchBar';

export default {
  title: 'Components/Search Bar',
  component: SearchBar,
} as ComponentMeta<typeof SearchBar>;

export const Search: ComponentStory<typeof SearchBar> = () => (
  <SearchBar />
);
