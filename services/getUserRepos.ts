const getUserRepos = async (name: string) => {
  try {
    const response = await fetch(`https://api.github.com/users/${name}/repos`, {
      headers: {
        Authorization: `${process.env.GITHUB_ACCESS_TOKEN}`
      },
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
export default getUserRepos;
