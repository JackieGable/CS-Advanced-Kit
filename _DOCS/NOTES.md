# Notes about this branch:

8.11.24@9:30pm
Putting this branch on hold until I can spend more time troubleshooting the issue with markdown not rendering variables and outputting NAN where placeholders were. Also getting errors about rendering templates.


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