import { ComponentMeta, ComponentStory } from '@storybook/react';
import UserInfo from '../../src/components/UserInfo/UserInfo';

export default {
  title: 'Components/UserInfo',
  component: UserInfo,
  args: {
    avatar_url: 'https://avatars.githubusercontent.com/u/86871642?v=4',
    name: 'Ivan',
    login: 'iigunchev',
    bio: 'Front end web developer with a background in video and motion graphics. Passionate about pixel perfect design and glorious micro interactions.'
  }
}as ComponentMeta<typeof UserInfo>;


export const UserInformation: ComponentStory<typeof UserInfo> = (args) => (
  <UserInfo {...args} />
);