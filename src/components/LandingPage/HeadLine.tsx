import Link from "next/link";

function HeadLine() {
  return (
    <div className="border-b-[1px] pb-5 border-muted">
      <h1 className="text-3xl font-bold tracking-wide md:text-4xl text-text sm:leading-10 md:leading-14">
        Hello, my name is{" "}
        <Link href="/about">
          <a className="hover-underline-animation text-rose">Qizhao</a>
        </Link>
      </h1>
      <h2 className="mt-3 font-mono md:text-lg text-subtle">
        Here is a place to put my{" "}
        <Link href="/blog">
          <a className="hover-underline-animation text-rose">
            thoughts in writing
          </a>
        </Link>
      </h2>
    </div>
  );
}

export default HeadLine;
