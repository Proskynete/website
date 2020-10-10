import data from "data/config.json";
import { PropsInterface } from "models/meta.model";
import Head from "next/head";
import { FC } from "react";

const Meta: FC<PropsInterface> = (props) => {
  const { customTitle, description, image, slug = "" } = props;

  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="noindex" />

      <meta name="image" content={image} />
      <link rel="canonical" href={`${data.url}/${slug}`} />

      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={customTitle} />
      <meta property="og:title" content={customTitle} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={`${data.url}${slug}`} />

      <meta name="twitter:description" content={description} />
      <meta name="twitter:title" content={customTitle} />
      <meta property="twitter:image" content={image} />
      <meta name="twitter:url" content={`${data.url}${slug}`} />

      <link rel="icon" href="/favicon/favicon.ico" />
      <meta name="description" content={description}></meta>
      <title>{customTitle}</title>
    </Head>
  );
};

export default Meta;