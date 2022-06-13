import UserInfo from '../../src/components/UserInfo/UserInfo';
import { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import searchUser from '../../services/searchUser';
import getUserRepos from '../../services/getUserRepos';
import UserRepos from '../../src/components/UserRepos/UserRepos';

const mockUser = {
  avatar_url: 'https://avatars.githubusercontent.com/u/86871642?v=4',
  name: 'Ivan',
  login: 'iigunchev',
  bio: 'Front end web developer with a background in video and motion graphics. Passionate about pixel perfect design and glorious micro interactions.'
};

const mockRepos = [
  {
    name: 'react-hooks-typescript',
    description: 'React hooks and TypeScript',
    stargazers_count: 0,
    language: 'TypeScript',
    updated_at: '2020-01-01'
  },
  {
    name: 'react-hooks-typescript',
    description: 'React hooks and TypeScript',
    stargazers_count: 0,
    language: 'TypeScript',
    updated_at: '2020-01-01'
  }
];
export interface Data {
  avatar_url: string;
  name: string;
  login: string;
  bio: string;
}

export interface Repo {
  name: string;
  description: string;
  stargazers_count: number | null;
  language: string | null;
  updated_at: Date;
}

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const username = context.query.user as string;
//   const userDetails: Data = await searchUser(username);
//   const userRepos: Repos[] = await getUserRepos(username);
//   const data = {
//     details: userDetails,
//     repos: [userRepos]
//   };

//   return {
//     props: {
//       data
//     }
//   };
// };

// data
// }: InferGetServerSidePropsType<typeof getServerSideProps>

const User = () => {
  return (
    <main className="p-4 flex gap-4 max-w-6xl sm:bg-white rounded-lg sm:border-2 border-slate-300 sm:m-4 ">
      <UserInfo
        avatar_url={mockUser.avatar_url}
        name={mockUser.name}
        login={mockUser.login}
        bio={mockUser.bio}
      />
      <UserRepos repos={mockRepos} />
    </main>
  );
};

export default User;
