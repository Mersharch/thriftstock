import { defineQuery } from "next-sanity";
import { sanityFetch } from "../lib/live";

export const getShoots = async () => {
  const ALL_SHOOTS = defineQuery(`
       *[
            _type == "gallery"
        ]
        | order(name asc){
            name,
            mainImage{
              asset{
                _ref
              }
            },
            isFeatured,
              category->{
                slug{
                current
                }
              },
            slug{
                current
            }
        }
        `);

  try {
    const shoots = await sanityFetch({ query: ALL_SHOOTS });
    return shoots.data || [];
  } catch (error) {
    console.log("Error fetching shoots  ", error);
    return [];
  }
};
