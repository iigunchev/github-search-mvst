import { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import UserInfo from '../../src/components/UserInfo/UserInfo';
import searchUser from '../../services/searchUser';
import RepoList from '../../src/components/RepoList/RepoList';
import { UserData } from '../../interfaces/interfaces';

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
  const router = useRouter();
  const username = router.query.user as string;
  return (
    <div className="sm:px-8 h-full">
      <main className="p-4 gap-8 max-w-6xl mx-auto sm:w-full sm:rounded-xl overflow-hidden sm:bg-white sm:flex sm:border-2 sm:mt-8">
        <UserInfo data={data} />
        <RepoList username={username} />
      </main>
    </div>
  );
};

export default User;
