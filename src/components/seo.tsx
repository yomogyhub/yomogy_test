import React from "react";
import Head from "next/head";

interface MetaData {
  pageTitle?: string;
  pageDescription?: string;
  pagePath?: string;
  pageImg?: string;
  pageImgWidth?: number;
  pageImgHeight?: number;
}

const Seo: React.FC<MetaData> = ({
  pageTitle,
  pageDescription,
  pagePath,
  pageImg,
  pageImgWidth,
  pageImgHeight,
}) => {
  const defaultTitle = "Yomogy";
  const defaultDescription =
    "Yomogyは、Synbio(合成生物学)やiGEMに関する情報を集約し、発信していくポータルサイトです。";

  const title = pageTitle ? `${pageTitle} | ${defaultTitle}` : defaultTitle;
  const description = pageDescription ? pageDescription : defaultDescription;
  const url = pagePath;
  const imgUrl = pageImg;
  const imgWidth = pageImgWidth ? pageImgWidth : 1200;
  const imgHeight = pageImgHeight ? pageImgHeight : 630;

  return (
    <Head>
      <title key="pageTitle">{title}</title>
      <meta
        key="metaViewport"
        name="viewport"
        content="width=device-width,initial-scale=1.0"
      />
      <meta key="metaDescription" name="description" content={description} />
      <meta key="ogUrl" property="og:url" content={url} />
      <meta key="ogTitle" property="og:title" content={title} />
      <meta key="ogSiteName" property="og:site_name" content={title} />
      <meta
        key="ogDescription"
        property="og:description"
        content={description}
      />
      <meta key="ogType" property="og:type" content="website" />
      <meta key="ogImage" property="og:image" content={imgUrl} />
      <meta
        key="ogImageWidth"
        property="og:image:width"
        content={String(imgWidth)}
      />
      <meta
        key="ogImageHeight"
        property="og:image:height"
        content={String(imgHeight)}
      />
      <link key="canonicalLink" rel="canonical" href={url} />
    </Head>
  );
};

export default Seo;
