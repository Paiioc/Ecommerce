const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");

const sitemap = async (req, res) => {
  // An array with your links
  const pagelinks = [
    { url: "/", changefreq: "daily", priority: 0.1 },
    { url: "/search", changefreq: "daily", priority: 1 },
  ];
  // Create a stream to write to
  const stream = new SitemapStream({ hostname: `https://${req.headers.host}` });

  res.writeHead(200, {
    "Content-Type": "application/xml",
  });

  const xmlString = await streamToPromise(
    Readable.from(pagelinks).pipe(stream)
  ).then((data) => data.toString());

  res.end(xmlString);
};
export default sitemap