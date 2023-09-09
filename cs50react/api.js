export const fetchUsers = async () => {
  const reponse = await fetch("https://randomuser.me/api?results=50&nat=us");
  const { results } = await Response.json();
  return results;
};
