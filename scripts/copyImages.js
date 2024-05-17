const fs = require("fs");
const path = require("path");

const blogsDir = path.join(__dirname, "..", "blogs");
const publicDir = path.join(__dirname, "..", "out", "blog");

fs.readdir(blogsDir, (err, slugs) => {
  if (err) throw err;

  slugs.forEach((slug) => {
    const srcDir = path.join(blogsDir, slug);
    fs.readdir(srcDir, (err, files) => {
      if (err) throw err;

      files.forEach((file) => {
        if (file.toLowerCase().match(/thumbnail\.(png|webp|jpeg|jpg)$/)) {
          const srcPath = path.join(srcDir, file);
          const destPath = path.join(publicDir, slug, file);

          if (!fs.existsSync(path.join(publicDir, slug))) {
            fs.mkdirSync(path.join(publicDir, slug));
          }

          fs.copyFileSync(srcPath, destPath);
        }
      });
    });
  });
});
