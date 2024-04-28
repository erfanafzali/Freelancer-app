import http from "../configs/api";

export default function getCategories() {
  return http.get("/category/list").then(({ data }) => data.data);
}
