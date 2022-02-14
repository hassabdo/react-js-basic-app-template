require("babel-register")({
    presets: ["es2015", "react"]
});
const router = require("./router").default;
const Sitemap = require("react-router-sitemap").default;

(
    new Sitemap(router)
        .build(process.env.REACT_APP_SITE_URL)
        .save('../public/sitemap.xml')
);