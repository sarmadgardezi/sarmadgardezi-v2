import type { DefaultSeoProps } from "next-seo";

// https://github.com/garmeeh/next-seo#nextseo-options
export const defaultSEOConfig: DefaultSeoProps = {
  title: "Sarmad Gardezi",
  defaultTitle: "a Freelance Stack Developer",
  description: "React, Gastby, WordPress Developer, tech enthusiast and entrepreneur from Islamabad, Pakistan.",
  canonical: "https://sarmadgardezi.com",
  openGraph: {
    url: "https://sarmadgardezi.com",
    title: "Sarmad Gardezi | Digital Crafter",
    description: "React, Gastby, WordPress Developer, tech enthusiast and entrepreneur from Islamabad, Pakistan.",
    images: [
      {
        url: "https://og.sznm.dev/api/generate?siteName=Sarmad Gardezi&description=https://sarmadgardezi.com",
        alt: "sarmadgardezi.com og-image",
      },
    ],
    site_name: "Sarmad Gardezi",
  },
  twitter: {
    handle: "@sarmadgardezi",
    cardType: "summary_large_image",
  },
};
