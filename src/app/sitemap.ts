import { MetadataRoute } from "next";

export default function sitemap():MetadataRoute.Sitemap {
    return[
        {
            url: "https://arzwebconcept.com",
            lastModified: new Date(),
        },
        {
            url: "https://arzwebconcept.com/realisations",
            lastModified: new Date(),
        },
    ]
}