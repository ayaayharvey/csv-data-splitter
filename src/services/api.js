import axios from "axios";

const apiClient = axios.create({
  baseURL:
    "https://script.google.com/a/macros/oakdriveventures.com/s/AKfycby6CLIu5za_93DrUIN75SshEYZNlHgczreDqX5jTdq64cDIe5euK0LgR93v77KJDpQ6yA/exec",
  // Other Axios configuration options can be added here
});

export default apiClient;
