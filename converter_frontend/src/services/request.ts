import api from "./api";

export default {
  getVideos() {
    return api.get("/videos");
  },
  getPost(file_id: string) {
    return api.get(`/video/${file_id}`);
  },
  convert() {
    return api.get("/convert");
  },
};
