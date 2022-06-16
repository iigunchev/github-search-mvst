import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Repo from '../src/components/Repo/Repo';
import * as data from '../services/getFilteredRepos';
import { mockRepos } from '../data/mockData';

describe('get a list of user repos', () => {
  test('works', async () => {
    const fetchMock = jest
      .spyOn(data, 'getFilteredRepos')
      .mockImplementation(() => Promise.resolve(mockRepos));

    const repos = await fetchMock('iigunchev');

    render(
      <Repo
        key={0}
        name={repos[0].name}
        description={repos[0].description}
        language={repos[0].language}
        stargazers_count={repos[0].stargazers_count}
        updated_at={repos[0].updated_at}
      />
    );

    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith('iigunchev');
    expect(
      await screen.findByText(/react-hooks-typescript/)
    ).toBeInTheDocument();
  });
});
