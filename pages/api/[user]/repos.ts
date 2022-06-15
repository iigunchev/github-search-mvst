// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import getUserRepos from '../../../services/getUserRepos';
import { RepoOverview } from '../../../interfaces/interfaces';

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { username, filter } = req.body;
  console.log(username, filter);
  try {
    const allRepos = await getUserRepos(username);
    const filteredRepos = allRepos.filter((repo: RepoOverview) =>
      repo.name.includes(filter)
    );
    res.status(200).json(filteredRepos);
  } catch (err: any) {
    console.log(err);
  }
}
