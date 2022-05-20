import React from 'react';

const Sitemap = () => {
    return null;
};

import * as fs from 'fs'

const BASE_URL = 'https://www.schoonveld.me';

const staticPaths = fs
    .readdirSync("pages")
    .filter((staticPage) => {
        return ![
            "api",
            "_app.js",
            "_document.js",
            "404.js",
            "sitemap.xml.js",
        ].includes(staticPage);
    })
    .map((staticPagePath) => {
        return `${BASE_URL}/${staticPagePath}`;
    });

export const getServerSideProps = async ({res}) => {
    const allPaths =[ ...staticPaths  ];


    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allPaths
        .map((url) => {
            return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join("")}
    </urlset>
`;

    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
};

export default Sitemap;


