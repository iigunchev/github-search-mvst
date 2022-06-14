import UserInfo from '../../src/components/UserInfo/UserInfo';
import { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import searchUser from '../../services/searchUser';
import getUserRepos from '../../services/getUserRepos';
import RepoList from '../../src/components/RepoList/RepoList';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const username = context.query.user as string;
  const userDetails: Data = await searchUser(username);
  const userRepos: Repo[] = await getUserRepos(username);
  const data = {
    details: userDetails,
    repos: [userRepos]
  };

  return {
    props: {
      data
    }
  };
};

const User = ({
  data
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div className="sm:px-8">
      <main className="bg-black gap-8 max-w-6xl mx-auto sm:w-full sm:rounded-xl overflow-hidden sm:bg-white sm:flex sm:border-2 sm:mt-8">
        <UserInfo
          avatar_url={data.details.avatar_url}
          name={data.details.name}
          login={data.details.login}
          bio={data.details.bio}
        />
        <RepoList repos={data.repos[0]} />
      </main>
    </div>
  );
};

export default User;

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
  updated_at: string;
}
