// Plugin Imports
const pluginDirectoryOutput = require("@11ty/eleventy-plugin-directory-output");
const pluginEleventyNavigation = require("@11ty/eleventy-navigation");
const pluginSitemap = require("@quasibit/eleventy-plugin-sitemap");
const pluginMinifier = require("@sherby/eleventy-plugin-files-minifier");
const pluginCritical = require("eleventy-critical-css");
const pluginImage = require("eleventy-plugin-img2picture");

// Config Imports
const configSitemap = require("./src/config/plugins/sitemap");
const configCritical = require("./src/config/plugins/critical");
const configImage = require("./src/config/plugins/image");
const configCss = require("./src/config/eleventy/css");
const configJs = require("./src/config/eleventy/javascript");
const moment = require('moment');
const markdownIt = require("markdown-it");

const isProduction = process.env.ELEVENTY_ENV === "PROD";

module.exports = function (eleventyConfig) {

    let markdownLibrary = markdownIt({
        html: true,
        breaks: true,
        linkify: true
    });

    eleventyConfig.addFilter("md", function(value) {
        return markdownLibrary.render(value);
    });



    eleventyConfig.addFilter('formatDate', function(date) {
        return moment(date).format('MMMM D, YYYY');
      });


    eleventyConfig.addFilter('formatDate', function(date) {
        if (!date) return '';
        return new Date(date).toLocaleDateString();
      });


    /**
     *  PLUGINS
     *      Adds additional eleventy functionality through official or community-created add-ons
     *      https://www.11ty.dev/docs/plugins/
     */

    // Provides benchmarks in the terminal when a website is built. Useful for diagnostics.
    // https://www.11ty.dev/docs/plugins/directory-output/
    eleventyConfig.addPlugin(pluginDirectoryOutput);

    // Automatically generates a sitemap based on the HTML files being generated
    // https://github.com/quasibit/eleventy-plugin-sitemap
    eleventyConfig.addPlugin(pluginSitemap, configSitemap);


    // Allows navigation items to be defined in a scalable way via the front matter
    // https://www.11ty.dev/docs/plugins/navigation/
    eleventyConfig.addPlugin(pluginEleventyNavigation);

    // Converts <img> tags to responsive <picture>s. An opt-in feature. Please read config/plugins/image.js to find out more
    // https://github.com/saneef/eleventy-plugin-img2picture
    // eleventyConfig.addPlugin(pluginImage, configImage)



    // Production only plugins. Only run when "npm run build" is used.
    if (isProduction) {
        // Minify all HTML, CSS, JSON, XML, XSL and webmanifest files. Keeps comments when developing and removes them when live, for a smaller filesize
        // https://github.com/benjaminrancourt/eleventy-plugin-files-minifier
        eleventyConfig.addPlugin(pluginMinifier);

        // Inlines any critical CSS that's above the fold on a 1080p display. Increases build times by 2s-3s, so only ran in prod.
        // https://github.com/gregives/eleventy-critical-css
        eleventyConfig.addPlugin(pluginCritical, configCritical);
    }

    eleventyConfig.addWatchTarget("src/assets/sass/");


    /**
     *  PASSTHROUGH'S
     *      Copy/paste non-template files straight to /public, without any interference from the eleventy engine
     *      https://www.11ty.dev/docs/copy/
     */
    eleventyConfig.addPassthroughCopy("./src/assets/css"); // CS-TODO - For optimization branch, remove CSS passthrough
    eleventyConfig.addPassthroughCopy("./src/assets/favicons");
    eleventyConfig.addPassthroughCopy("./src/assets/fonts");
    eleventyConfig.addPassthroughCopy("./src/assets/images");
    eleventyConfig.addPassthroughCopy("./src/assets/js"); // CS-TODO - For optimization branch, remove JS passthrough
    eleventyConfig.addPassthroughCopy("./src/assets/svgs");
    eleventyConfig.addPassthroughCopy("./src/admin");



    /**
     *  EXTENSIONS
     *      Sets up non-template languages to be processed by eleventy, typically to allow other technologies process code at build.
     *      https://www.11ty.dev/docs/languages/custom/
     */


       eleventyConfig.addTemplateFormats("css");
       eleventyConfig.addExtension("css", configCss);
   
       eleventyConfig.addTemplateFormats("js");
       eleventyConfig.addExtension("js", configJs);     

       
// Log and inspect data for troubleshooting
       eleventyConfig.addFilter("debug", (value) => {
        console.log("DEBUG:", value);
        return JSON.stringify(value, null, 2);
    });

    // Return your configurations, accept the default template engines
    return {
        templateFormats: [ "md", "njk", "html", "liquid" ],    
        dir: {
            input: "src",
            output: "public",
            includes: "_includes",
            layouts: "_layouts",
            data: "_data",
        },
        htmlTemplateEngine: "njk",
        markdownTemplateEngine: "njk",
        dataTemplateEngine: "njk",
    };
};

