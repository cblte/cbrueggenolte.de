import rss from "@astrojs/rss";

export function GET(context) {
  return rss({
    // `<title>` field in output xml
    title: "Carstens Blog",
    // `<description>` field in output xml
    description:
      "Stay updated with Carsten's personal website, where technology, creativity, and curiosity converge.Explore a collection of thoughts, notes, and projects that inspire and inform.Join the journey of discovery and share in the digital garden of ideas!",
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#site
    site: context.site,
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: [],
    // (optional) inject custom xml
    customData: `<language>en-us</language>`,
  });
}
