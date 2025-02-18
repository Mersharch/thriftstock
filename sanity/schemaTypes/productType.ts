// productType.ts
import { TagsIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const productType = defineType({
  name: "product",
  title: "Product",
  type: "document",
  icon: TagsIcon,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "images",
      title: "Product Images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true, // Enables image hotspot for responsive cropping
          },
          fields: [
            {
              name: "alt",
              title: "Alt Text",
              type: "string",
              description: "Alternative text for accessibility",
            },
            {
              name: "isPrimary",
              title: "Primary Image",
              type: "boolean",
              description: "Set this as the main product image",
              initialValue: false,
            },
          ],
        },
      ],
      validation: (Rule) =>
        Rule.min(1).warning("A product should have at least one image"),
    }),
    defineField({
      name: "stock",
      title: "Stock",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "category" }],
        },
      ],
    }),
    defineField({
      name: "metadata",
      title: "Product Metadata",
      type: "object",
      fields: [
        {
          name: "waistSize",
          title: "Waist Size",
          type: "number",
          validation: (Rule) => Rule.min(0),
        },
        {
          name: "length",
          title: "Length",
          type: "number",
          validation: (Rule) => Rule.min(0),
        },
      ],
    }),
    defineField({
      name: "discount",
      title: "Discount",
      type: "object",
      fields: [
        {
          name: "isActive",
          title: "Discount Active",
          type: "boolean",
          initialValue: false,
        },
        {
          name: "percentage",
          title: "Discount Percentage",
          type: "number",
          validation: (Rule) => Rule.min(0).max(100),
          hidden: ({ parent }) => !parent?.isActive,
        },
        {
          name: "validFrom",
          title: "Valid From",
          type: "datetime",
          hidden: ({ parent }) => !parent?.isActive,
        },
        {
          name: "validTo",
          title: "Valid To",
          type: "datetime",
          hidden: ({ parent }) => !parent?.isActive,
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "price",
      media: "images.0", // Shows the first image in the list as preview
    },
  },
});
