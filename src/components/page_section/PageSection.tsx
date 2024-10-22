import style from "./PageSection.module.css";

interface IPageSection {
  children: React.ReactNode;
  title?: string;
  className?: string;
}
const PageSection: React.FC<IPageSection> = ({
  children,
  title = undefined,
  className,
}) => {
  return (
    <div className={`${style.pageSection} ${className}`}>
      {title && (
        <div className={`row ${style.sectionTitle}`}>
          {title} <div className={style.divider}></div>
        </div>
      )}
      {children}
    </div>
  );
};
export default PageSection;
