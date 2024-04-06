import axios from "axios";

export function useFetch(path) {
  // Function to submit the form data using Axios
  const makeApi = async (e, formData) => {
    const baseurl = "https://alexnigeria.com/myway-rental-api/";
    try {
      const response = await axios.post(`${baseurl}${path}`, formData);
      console.log("Post created:", response.data);
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };
  return makeApi;
}
