import { useQuery } from "@tanstack/react-query";
import getCategories from "../services/categories";

export default function useCategories() {
  const queryKey = ["categories"];
  const queryFn = getCategories;

  const { data, isLoading } = useQuery({ queryKey, queryFn });

  const { categories = [] } = data || {};

  const myCategories = categories.map((item) => ({
    label: item.title,
    value: item._id,
  }));

  const transformedCategories = categories.map((item) => ({
    label: item.title,
    value: item.englishTitle,
  }));

  return { isLoading, myCategories, transformedCategories };
}
