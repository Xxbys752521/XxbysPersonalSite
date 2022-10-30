import { Snippet } from "contentlayer/generated";
import Link from "next/link";
import SnippetCard from "../ShowCard/SnippetCard";

function FeaturedSnippet({ snippets }: { snippets: Snippet[] }) {
  return (
    <div>
      <h3 className="mb-6 text-2xl font-bold">My snippet</h3>
      <div className="grid gap-5 md:grid-cols-2">
        {snippets.map((snippet) => (
          <SnippetCard key={snippet.slug} {...snippet} />
        ))}
      </div>
      <Link href="/snippet">
        <a className="flex items-center mt-5 transition-all hover:text-text text-subtle">
          View all snippets
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </Link>
    </div>
  );
}

export default FeaturedSnippet;
