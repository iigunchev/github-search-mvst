import Link from 'next/link';
import Image from 'next/image';
import star from '../../assets/star.svg';
import { Repo } from '../RepoList/RepoList';

const Repo = ({
  name,
  description,
  language,
  stargazers_count,
  updated_at
}: Repo) => {
  return (
    <Link href={`/repos/$.name}`}>
      <div className="p-4 bg-orange-50 mt-4 rounded-lg border">
        <h4 className="font-bold text-lg text-zinc-900">{name}</h4>
        <p className="text-zinc-400 mt-2">{description}</p>
        <div className="mt-2 flex items-center gap-4 text-xs text-zinc-400">
          {language && <span>{language}</span>}
          {stargazers_count !== 0 && (
            <span className="flex items-center gap-1">
              <Image src={star} alt="star" />
              {stargazers_count}
            </span>
          )}

          <span>Last updated: {updated_at}</span>
        </div>
      </div>
    </Link>
  );
};

export default Repo;
