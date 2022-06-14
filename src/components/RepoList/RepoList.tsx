import Image from 'next/image';
import Link from 'next/link';
import { Repo } from '../../../pages/users/[user]';
import star from '../../../src/assets/star.svg';

const RepoList = ({ repos }: { repos: Repo[] }) => {
  return (
    <ul className="w-full bg-white p-4">
      {repos &&
        repos.map((repo: Repo, index) => (
          <li key={index} className="cursor-pointer">
            <Link href={`/repos/${repo.name}`}>
              <div className="p-4 bg-orange-50 mt-4 rounded-lg border">
                <h4 className="font-bold text-lg text-zinc-900">{repo.name}</h4>
                <p className="text-zinc-400 mt-2">{repo.description}</p>
                <div className="mt-2 flex items-center gap-4 text-xs text-zinc-400">
                  {repo.language && <span>{repo.language}</span>}
                  {repo.stargazers_count !== 0 && (
                    <span className="flex items-center gap-1">
                      <Image src={star} alt="star" />
                      {repo.stargazers_count}
                    </span>
                  )}

                  <span>Last updated: {repo.updated_at}</span>
                </div>
              </div>
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default RepoList;
