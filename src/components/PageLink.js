const PageLink = ({ pageLink, itemClass }) => {
  return (
    <li key={pageLink.id}>
      <a href={pageLink.href} className={itemClass}>
        {pageLink.text}
      </a>
    </li>
  );
};
export default PageLink;
