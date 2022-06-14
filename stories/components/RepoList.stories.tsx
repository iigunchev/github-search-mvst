import { ComponentMeta, ComponentStory } from '@storybook/react';
import RepoList from '../../src/components/RepoList/RepoList';
import { RepoOverview } from '../../interfaces/interfaces';

export default {
  title: 'Components/Repo List',
  component: RepoList,
  args: {
    username: 'iigunchev'
  }
} as ComponentMeta<typeof RepoList>;

export const RepoListsitoryListView: ComponentStory<typeof RepoList> = (args) => (
  <RepoList {...args} />
);
