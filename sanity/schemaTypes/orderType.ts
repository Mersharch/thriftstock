import { BasketIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const orderType = defineType({
  name: "order",
  title: "Order",
  type: "document",
  icon: BasketIcon,
  fields: [
    defineField({
      name: "orderNumber",
      title: "Order Number",
      type: "string",
      readOnly: true,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "customer",
      title: "Customer Information",
      type: "object",
      fields: [
        {
          name: "firstName",
          title: "First Name",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "lastName",
          title: "Last Name",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "email",
          title: "Email",
          type: "string",
          validation: (Rule) => Rule.required().email(),
        },
        {
          name: "phone",
          title: "Phone Number",
          type: "string",
        },
      ],
    }),
    defineField({
      name: "items",
      title: "Order Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "product",
              title: "Product",
              type: "reference",
              to: [{ type: "product" }],
              validation: (Rule) => Rule.required(),
            },
            {
              name: "quantity",
              title: "Quantity",
              type: "number",
              validation: (Rule) => Rule.required().min(1),
            },
            {
              name: "priceAtTime",
              title: "Price at Time of Order",
              type: "number",
              validation: (Rule) => Rule.required().min(0),
            },
          ],
          preview: {
            select: {
              title: "product.name",
              quantity: "quantity",
              price: "priceAtTime",
            },
            prepare({ title, quantity, price }) {
              return {
                title: title,
                subtitle: `Qty: ${quantity} - Price: $${price}`,
              };
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "status",
      title: "Order Status",
      type: "string",
      options: {
        list: [
          { title: "Pending", value: "pending" },
          { title: "Processing", value: "processing" },
          { title: "Shipped", value: "shipped" },
          { title: "Delivered", value: "delivered" },
          { title: "Cancelled", value: "cancelled" },
        ],
      },
      validation: (Rule) => Rule.required(),
      initialValue: "pending",
    }),
    defineField({
      name: "subtotal",
      title: "Subtotal",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "tax",
      title: "Tax",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "total",
      title: "Total",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "paymentStatus",
      title: "Payment Status",
      type: "string",
      options: {
        list: [
          { title: "Pending", value: "pending" },
          { title: "Paid", value: "paid" },
          { title: "Failed", value: "failed" },
          { title: "Refunded", value: "refunded" },
        ],
      },
      validation: (Rule) => Rule.required(),
      initialValue: "pending",
    }),
    defineField({
      name: "paymentMethod",
      title: "Payment Method",
      type: "string",
      options: {
        list: [
          { title: "Credit Card", value: "creditCard" },
          { title: "Mobile Money", value: "momo" },
          { title: "Bank Transfer", value: "bankTransfer" },
        ],
      },
    }),
    defineField({
      name: "notes",
      title: "Order Notes",
      type: "text",
    }),
    defineField({
      name: "createdAt",
      title: "Created At",
      type: "datetime",
      readOnly: true,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "updatedAt",
      title: "Updated At",
      type: "datetime",
      readOnly: true,
    }),
  ],
  preview: {
    select: {
      title: "orderNumber",
      customer: "customer",
      status: "status",
      total: "total",
    },
    prepare({ title, customer, status, total }) {
      return {
        title: `Order ${title}`,
        subtitle: `${customer.firstName} ${customer.lastName} - ${status} - $${total}`,
      };
    },
  },
});
