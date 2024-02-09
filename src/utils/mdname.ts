const mdnameUtils = {
  slugify: (fileName: string) => {
    const name = fileName.replace(/\.md$/, "");
    return name;
  },
};

export default mdnameUtils;
