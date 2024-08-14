# Notes about this branch:

To see a visual display of how markdown works with the layout file (mostly by the front-matter in the markdown file) then gets rendered to the html file. See: C:\Users\JapperCatz\Desktop\How the markdown page is rendered -VISUAL demo.JPG

### 8.12.24
1. Successfully fixed the markdown reading issue by updating .eleventy.js file and renaming all the includes and layout files to .njk extension.
2. content/pages: still has .html extension
3. collections use .md extension

**SERVICES COLLECTION**
indexPage: src/content/pages/services.html builds as expected. 
partOfCollection: services collection
layoutSrc: service.njk
dataSrcPath: src/content/pages/services/_data/
jsonDirPath: src/content/pages/services/services.json
pagesInCollection: accessed via dropdown menu
notes: The pages in the collection will be added to the dropdown menu if the EleventyNavigation is setup in the front-matter. If there is no navigation in the front-matter, then the page will not be available via the navbar.

Important Notes about the relationship between the page markdown file and the layout file:
The markdown file can be part of a collection but doesn't have to be. 


1. Layout files are now located here: src/_layouts

2. Changes to .eleventy.js:
.eleventy.js was updated to reflect the new location of layouts:
```
    return {
        dir: {
            input: "src",
            output: "public",
            includes: "_includes",
            layouts: "_layouts",
            data: "_data",
        },
        htmlTemplateEngine: "njk",
    };
};
```

3. Updates to front-matter
In src/content/pages the front-matter was updated to include the layout file like this:
```
layout: base.html
```
and any extends that were in the body were removed. For some reason using the  
` {% extends "layouts/base.html" %} ` breaks the site. 