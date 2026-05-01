import { MetadataRoute } from "next";

const BASE_URL = "https://meridianai.co";

const blogPosts = [
  "bellingham-dentist-marketing",
  "getting-started-with-ai-agents",
  "ai-agents-for-small-businesses-practical-guide",
  "local-seo-what-it-is-why-it-matters",
  "why-small-businesses-need-a-professional-website",
  "5-ways-pacific-northwest-small-businesses-can-use-technology-to-compete",
];

const caseStudies = ["bettys-bakery", "bellingham-family-dental"];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/blog",
    "/case-studies",
    "/services",
    "/privacy-policy",
    "/terms-of-service",
  ];

  const staticPages = routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const blogPages = blogPosts.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const caseStudyPages = caseStudies.map((slug) => ({
    url: `${BASE_URL}/case-studies/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages, ...caseStudyPages];
}
