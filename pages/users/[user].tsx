import UserInfo from '../../src/components/UserInfo/UserInfo';
import { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import searchUser from '../../services/searchUser';
import getUserRepos from '../../services/getUserRepos';

export interface Data {
  avatar_url: string;
  name: string;
  login: string;
  bio: string;
}

export interface Repos {
  name: string;
  description: string;
  stargazers_count: number | null;
  language: string | null;
  updated_at: Date;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const username = context.query.user as string;
  const userDetails: Data = await searchUser(username);
  const userRepos: Repos[] = await getUserRepos(username);
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
  console.log(data);
  return (
    <div>
      <UserInfo
        avatar_url={data.details.avatar_url}
        name={data.details.name}
        login={data.details.login}
        bio={data.details.bio}
      />
    </div>
  );
};

export default User;
