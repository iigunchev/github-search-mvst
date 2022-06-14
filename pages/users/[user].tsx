import { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import UserInfo from '../../src/components/UserInfo/UserInfo';
import searchUser from '../../services/searchUser';
import getUserRepos from '../../services/getUserRepos';
import RepoList from '../../src/components/RepoList/RepoList';

export interface UserData {
  avatar_url: string;
  name: string;
  login: string;
  bio: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const username = context.query.user as string;
  const data: UserData = await searchUser(username);

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
    <div className="sm:px-8 h-full">
      <main className="bg-black gap-8 max-w-6xl mx-auto sm:w-full sm:rounded-xl overflow-hidden sm:bg-white sm:flex sm:border-2 sm:mt-8">
        <UserInfo data={data} />
        {/* <RepoList /> */}
      </main>
    </div>
  );
};

export default User;
