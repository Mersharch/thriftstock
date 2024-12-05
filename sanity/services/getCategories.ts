import { defineQuery } from "next-sanity";
import { sanityFetch } from "../lib/live";

export const getCategories = async () => {
  const ALL_CATEGORIES = defineQuery(`
        *[
            _type == "category"
        ]
        | order(title asc)
        `);

  try {
    const categories = await sanityFetch({ query: ALL_CATEGORIES });
    return categories.data || [];
  } catch (error) {
    console.log("Error fetching categories  ", error);
    return [];
  }
};
