import { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import getUserRepos from '../../../services/getUserRepos';
import Repo from '../Repo/Repo';

export interface Repo {
  name: string;
  description: string;
  stargazers_count: number | null;
  language: string | null;
  updated_at: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const username = context.query.user as string;
  const data: Repo[] = await getUserRepos(username);

  return {
    props: {
      data
    }
  };
};

const RepoList = ({
  data
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <ul className="w-full bg-white p-4">
      {data &&
        data.map((repo: Repo, index: any) => (
          <li key={index} className="cursor-pointer">
            <Repo
              key={index}
              name={repo.name}
              description={repo.description}
              language={repo.language}
              stargazers_count={repo.stargazers_count}
              updated_at={repo.updated_at}
            />
          </li>
        ))}
    </ul>
  );
};

export default RepoList;
