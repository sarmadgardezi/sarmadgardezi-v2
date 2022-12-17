const title = "Sarmad Gardezi";
const description = "React, Gastby, WordPress Developer, tech enthusiast and entrepreneur from Islamabad, Pakistan";

const image = {
  images: {
    domains: [
      'img.youtube.com',
      'sarmadgardeziblog.files.wordpress.com',
    ],
  },
 
};

const SEO = {
  title,
  description,
  titleTemplate: "Sarmad Gardezi - A Full Stack Developer",
  defaultTitle: "Sarmad Gardezi",
  canonical: "https://sarmadgardezi.com",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://sarmadgardezi.com",
    title,
    description,
    images: [
      {
        url: "https://sarmadgardezi.com/static/images/banner.jpg",
        alt: title,
        width: 2240,
        height: 1260,
      },
    ],
  },
  twitter: {
    handle: "@SarmadGardezi",
    site: "@sarmadgardezi",
    cardType: "summary_large_image",
  },
  
};

export default SEO;
