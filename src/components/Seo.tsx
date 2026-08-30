import { Helmet } from "react-helmet-async";

const SITE_URL = "https://rimcountryinnpayson.com";
const DEFAULT_OG_IMAGE =
  "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/70ba56a3-9db2-4d88-8885-29f4e125186e/id-preview-b3bcc0df--059f9e8f-83f4-4c54-b9b6-bfc5697f8b31.lovable.app-1773345980983.png";

interface SeoProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  /** Breadcrumb trail including the current page, e.g. [{name:"Home",path:"/"},{name:"Rooms",path:"/rooms"}] */
  breadcrumbs?: { name: string; path: string }[];
}

const Seo = ({ title, description, path, image = DEFAULT_OG_IMAGE, jsonLd, breadcrumbs }: SeoProps) => {
  const url = `${SITE_URL}${path}`;
  const ldArray = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];
  if (breadcrumbs && breadcrumbs.length > 1) {
    ldArray.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((b, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: b.name,
        item: `${SITE_URL}${b.path}`,
      })),
    });
  }

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {ldArray.map((ld, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(ld)}</script>
      ))}
    </Helmet>
  );
};

export default Seo;
