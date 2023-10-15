
const Links = ({ links }) => {
  return (
    <div className="links">
      {links.map((link) => {
        return (
          <a href={link.url} key={link.alt}>
            <img src={link.src} alt={link.alt} />
          </a>
        );
      })}
    </div>
  );
};

export default Links;
