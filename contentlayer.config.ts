import { defineDocumentType, makeSource } from "contentlayer/source-files";

const Writing = defineDocumentType(() => ({
  name: "Writing",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "Writing title",
      required: true,
    },
    description: {
      type: "string",
      description: "Writing description",
      required: true,
    },
    date: {
      type: "date",
      description: "Writing date",
      required: true,
    },
    published: {
      type: "boolean",
      description: "Is the writing published?",
      required: true,
    },
    tags: {
      type: "list",
      description: "Writing tags",
      required: true,
      of: {
        type: "string",
      },
    },
  },
  description: "Writing",
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => `/writings/${doc._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "src/writings",
  documentTypes: [Writing],
});
