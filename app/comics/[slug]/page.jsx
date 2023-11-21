import ComicContent from "@/components/comics/ComicContent";

import comicsData from "@/data/comics.json";

export async function generateStaticParams() {
  let results = [];
  for (let i = 0; i < comicsData.edges.length; i++) {
    const el = comicsData.edges[i];
    if (el.node) {
      results.push({
        slug: el.node.id,
      });
    }
  }

  return results;
}

const ComicDetail = ({ params }) => {
  return <ComicContent />;
};

export default ComicDetail;
