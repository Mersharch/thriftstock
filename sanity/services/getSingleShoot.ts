import { defineQuery } from "next-sanity";
import { sanityFetch } from "../lib/live";

export const getSingleShoot = async (slug: string) => {
  const SINGLE_SHOOT = defineQuery(`
      *[_type == "gallery" && slug.current == $slug][0]{
  name,
  mainImage{
    asset{
      _ref
    }
  },
  additionalImages[]{
    asset{
      _ref
    }
  }
}
        `);

  try {
    const { data: singleShoot } = await sanityFetch({
      query: SINGLE_SHOOT,
      params: { slug },
    });
    return singleShoot || null;
  } catch (error) {
    console.log("Error fetching single shoot  ", error);
    return null;
  }
};
