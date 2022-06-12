const searchUsers = async (name: string) => {
  try {
    const response = await fetch(`https://api.github.com/users/${name}`, {
      headers: {
        Authorization: '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'
      }
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
export default searchUsers;
