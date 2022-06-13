const searchUser = async (name: string) => {
  try {
    const response = await fetch(`https://api.github.com/users/${name}`, {
      headers: {
        Authorization: `${process.env.GITHUB_ACCESS_TOKEN}`
      }
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
export default searchUser;
