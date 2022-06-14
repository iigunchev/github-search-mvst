import { ComponentMeta, ComponentStory } from '@storybook/react';
import Repo from '../../src/components/Repo/Repo';
import { RepoOverview } from '../../interfaces/interfaces';

export default {
  title: 'Components/Repo',
  component: Repo,
  args: {
    name: '100-days-of-code',
    description: '100 days of code project',
    language: 'iigunchev',
    stargazers_count: 5,
    updated_at: '2020-01-01'
  }
} as ComponentMeta<typeof Repo>;

export const RepositoryView: ComponentStory<typeof Repo> = (args:RepoOverview) => (
  <Repo {...args} />
);
