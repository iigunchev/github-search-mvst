const getFilteredRepos = async (name: string, filter: string) => {
  try {
    const response = await fetch(`https://github-search-mvst.vercel.app/api/${name}/repos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${process.env.GITHUB_ACCESS_TOKEN}`
      },
      body: JSON.stringify({ username: name, filter: filter })
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
export default getFilteredRepos;
