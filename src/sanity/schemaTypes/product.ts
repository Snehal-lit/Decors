import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
    }),
    defineField({
      name: 'price',
      title: 'Numeric Price',
      type: 'number',
    }),
    defineField({
      name: 'priceDisplay',
      title: 'Price Display String',
      type: 'string',
      description: 'e.g., "Upon Request". If set, this overrides the numeric price.',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'materials',
      title: 'Materials',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Product Image',
      type: 'image',
    }),
  ],
})
