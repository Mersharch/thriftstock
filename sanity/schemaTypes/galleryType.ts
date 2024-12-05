import { defineType } from "sanity";
import { ImagesIcon } from "@sanity/icons";

export const galleryType = defineType({
  name: "gallery",
  title: "Gallery",
  type: "document",
  icon: ImagesIcon,
  fields: [
    {
      name: "name",
      title: "Shoot Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "additionalImages",
      title: "Additional Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
    },
    {
      name: "isFeatured",
      title: "Featured Shoot",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) =>
        Rule.required().error(`Required to generate a page on the website`),
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "mainImage",
    },
  },
});
