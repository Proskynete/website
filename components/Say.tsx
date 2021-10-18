import { SayInterface } from "models/say.model";
import { memo } from "react";
import ReactMarkdown from "react-markdown";

const Say = (props: SayInterface) => {
  const { title, content, anchor, variant } = props;

  return (
    <aside id={anchor || ""} className="say col-12">
      <div className="say__image">
        <img
          decoding="async"
          data-sizes="auto"
          data-src="/images/isotipo/isotipo-blue.png"
          alt="isotipo"
          loading="lazy"
          className="lazyload"
        />
      </div>

      <div className="say__container" data-type={variant || "primary"}>
        <p className="say__container__title" data-type={variant || "primary"}>
          {title}
        </p>
        <ReactMarkdown
          escapeHtml={false}
          source={content}
          className="say__container__content"
        />
      </div>
    </aside>
  );
};

export default memo(Say);
