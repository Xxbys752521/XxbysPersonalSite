import classNames from "classnames";
import { Post } from "contentlayer/generated";
import moment from "moment";
import Link from "next/link";

function NewestPost({ posts }: { posts: Post[] }) {
  return (
    <div>
      <h3 className="mb-6 text-2xl font-bold">New post</h3>
      <div className="flex flex-col gap-5 md:flex-row">
        {posts.map((post, i) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <a
              className={classNames(
                "transform hover:scale-105 duration-300 transition-all rounded-xl w-full md:w-1/3 bg-gradient-to-r p-1 ",
                {
                  "from-[#D8B4FE] to-[#818CF8]": i == 0,
                  "from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]": i == 1,
                  "from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]": i == 2,
                }
              )}
            >
              <div className="flex flex-col justify-between h-full p-4 rounded-lg bg-surface ">
                <div className="flex flex-col justify-between md:flex-row">
                  <h4 className="w-full mb-6 text-lg font-medium text-text md:text-lg sm:mb-10 ">
                    {post.title}
                  </h4>
                </div>
                <div>
                  <div>{moment(post.date).format("LL")}</div>
                </div>
              </div>
            </a>
          </Link>
        ))}
      </div>
      <Link href="/blog">
        <a className="flex items-center mt-5 transition-all hover:text-text text-subtle">
          See all posts
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

export default NewestPost;
