import siteMetadata from "data/siteMetadata";

function Footer() {
  return (
    <footer className="mt-10 ">
      <div className="flex flex-col-reverse gap-3 md:flex-row  justify-between py-5 text-sm border-t-[1px] border-t-muted">
        <div>
          © {new Date().getFullYear()} {siteMetadata.author} •{" "}
          {siteMetadata.description}
        </div>
        <div>
          <a target="_blank" href={siteMetadata.github} rel="noreferrer">
            Github
          </a>{" "}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
