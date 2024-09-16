const baseUrl = "https://localhost:5001/api/UserProfile";

export const getUserByIdWithPosts = (id) => {
  return fetch(`${baseUrl}/GetWithPosts/${id}`).then((res) => res.json());
};
