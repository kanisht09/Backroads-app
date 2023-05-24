import { pageLinks } from "../data";
import PageLink from "./PageLink";
const PageLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass} id={parentClass}>
      {pageLinks.map((pageLink) => {
        return (
          <PageLink
            key={pageLink.id}
            pageLink={pageLink}
            itemClass={itemClass}
          />
        );
      })}
    </ul>
  );
};
export default PageLinks;
