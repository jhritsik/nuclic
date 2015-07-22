# Implementation Notes

This repository houses functioning examples of features commonly used for ISP sites. If there are gaps in documentation please submit a pull request or submit an [issue](https://github.com/natgeo/special-projects/issues). Be sure not to edit the ISP-template respository directly. Instead use this project as a starting point for new repositories.

### Table of Contents

<!-- START doctoc -->

- [Assemble.io](#assemble-io)
- [AddThis (social sharing)](#addthis-social-sharing)
- [Create a Git Mirror](#create-a-git-mirror)
- [Google Publisher Tags/GPT (ads)](#google-publisher-tagsgpt-ads)
- [Icongs (icon font)](#icongs-icon-font)
- [Javascript Libraries](#javascript-libraries)
- [LiveFyre (comments)](#livefyre-comments)
- [ISP-template Technology Stack](#isp-template-technology-stack)
- [Mortar (style)](#mortar-style)
- [Global Responsive Navigation](#global-responsive-navigation)
- [Platform (videos)](#platform-videos)
- [Webfonts](#webfonts)

<!-- END doctoc -->

## Assemble.io

[Assemble.io](http://assemble.io) is a static site generator, a Node analog to Ruby's Jekyll.

- HTML within `/app/_pages/` are configured using YAML topmatter to be inserted within a layout.
- Layouts exist within `/app/_layouts/`
- Pages and layouts can use includes (partials) declared within `/app/_content` and `/app/_includes`
- The folder `/app/_content` is meant for per-project copy.
- The folder `/app/_includes` is meant for structural pieces.

Assemble parses [Handlebars](http://handlebarsjs.com/) template tags within HTML to build pages.

- Site-wide variables are set within _config.yml. They can be referenced by using the `site` object: `{{ site.fyreSiteID }}`
- Other variables can be declared within YAML topmatter on a per-page basis and are referenced using he `page` object: `{{ page.title }}`

## AddThis (social sharing)

1. Reference to the external script, config, and social share count script can be found in the [addthis.html partial](https://github.com/natgeo/specialprojects-isp-template/blob/master/app/_includes/addthis.html)
2. The target element for the popup and social count are located in [header-main.html partial](https://github.com/natgeo/specialprojects-isp-template/blob/master/app/_includes/header-main.html)
3. You need the:
  - `data_ga_property` which is `UA-28236326-1`
  - the production URL

## Create a Git Mirror

Adapted from the [Github instructions](https://help.github.com/articles/duplicating-a-repository/)

1. [Create a repository](https://help.github.com/articles/create-a-repo/) with the convention "specialprojects-projectname"
- Run these commands

```
  git clone --bare git@github.com:natgeo/specialprojects-isp-template.git
  # Make a bare clone of the repository

  cd specialprojects-isp-template
  git push --mirror git@github.com:natgeo/specialprojects-[newproject].git
  # Mirror-push to the new repository
```
3.  Add the following teams [as collaborators](https://help.github.com/articles/adding-collaborators-to-a-personal-repository/): "NGS - Push / Pull", "Special Projects Contributors - Push & Pull", and "Special Projects Contributors - Pull Only"

## Google Publisher Tags/GPT (ads)

1. Plugin included the [bower.json](https://github.com/natgeo/specialprojects-isp-template/blob/master/bower.json)
2. Referenced in the [scripts.html partial](https://github.com/natgeo/specialprojects-isp-template/blob/master/app/_includes/scripts.html)
3. Global config included in [gpt.html partial](https://github.com/natgeo/specialprojects-isp-template/blob/master/app/_includes/gpt.html)
4. The global ngs GPT identification number is `2994` and can be found in the [_config.yml](https://github.com/natgeo/specialprojects-isp-template/blob/master/_config.yml#L32)
5. The markup for a tag looks like

  ```liquid
  <div class="adunit" data-adunit="{{ site.gtpSiteID }}" data-dimensions="300x250"></div>
  ```
6. Each `data-adunit` value must be unique.

3. Make sure that you have:
  - the correct GUID
  - the correct feed ID
  - a unique id/data-instance for each video

**PRO TIP**: add `?googfc` to the end of your URL to debug GPT ads

## Icongs (icon font)

The ISP template comes with [icongs](https://github.com/natgeo/icongs), the National Geographic Society's icon font. You can preview available icons at [http://natgeo.github.io/icongs/]().

## Javascript Libraries

The ISP template comes with a minimal number of JS libraries to support common features.

- [jQuery](http://jquery.com/): The default library for uniform DOM traversal and manipluation
- [jquery.dfp.js](https://github.com/natgeo/jquery.dfp.js): An internal branch of the [main library](https://github.com/coop182/jquery.dfp.js), this powers our GPT ad tags
- [matchMedia](https://github.com/paulirish/matchMedia.js/): A library that polyfills matchMedia for [older browsers](http://caniuse.com/#search=matchme). This can be removed if we drop support for IE9

## LiveFyre (comments)

1. References to the external scripts, config, and comment count script are all contained in the [fyre.html partial](https://github.com/natgeo/specialprojects-isp-template/blob/master/app/_includes/fyre.html)
2. The target div for comment count is contained in the [header-main.html partial](https://github.com/natgeo/specialprojects-isp-template/blob/master/app/_includes/header-main.html#L14-L17)
3. You will need the
  - Site ID (you can make this up)
  - Article ID  (you can make this up)
  - Collection meta (this needs to be generated by [LiveFyre Collection Meta and Config Builder](http://ssosandbox.livefyre.com/ssosandbox/lf_sandbox_site/integration/CollectionMetaHelper.php))
  - Checksum (this needs to be generated by [LiveFyre Collection Meta and Config Builder](http://ssosandbox.livefyre.com/ssosandbox/lf_sandbox_site/integration/CollectionMetaHelper.php))
4. Site IDs are contained in a [Google Doc](https://docs.google.com/spreadsheet/ccc?key=0ArDi8FnJY4JLdEV6cEZJem5sRHh3bkRoejViNlFvUkE#gid=12). The WPF Site ID is `318027`.

## ISP-template Technology Stack

Consult the following documentation sets in order to debug problems:

- Package management
  - [Node](http://nodejs.org/) & [NPM](https://www.npmjs.com/) are used to supply our build tools (Grunt) packages.
  - [Bower](http://bower.io/) is used to supply our front end packages (jQuery, D3, etc.)
- [Assemble](http://assemble.io/) is used as the static site generator, parsing includes and variables into real HTML
- Assemble uses the [Handlebars]((http://handlebarsjs.com)) templating language.
- [Sass](http://sass-lang.com/) is used as a CSS PreProcessor. [[Docs](http://sass-lang.com/documentation/file.SASS_REFERENCE.html)]
- [Grunt](http://gruntjs.com/) is used to build the project wrapping most of the stand alone utilities (Sass, Assemble, Autoprefixer, HTMLmin...) in to a single workflow. [[Docs](http://gruntjs.com/getting-started)]
- This project was originally scaffolded with the [Yeoman](http://yeoman.io/) [Jekyllrb Generator](https://github.com/robwierzbowski/generator-jekyllrb). [[Docs and Source Code](https://github.com/robwierzbowski/generator-jekyllrb)]

## Mortar (style)

The ISP template comes pre-loaded with [Mortar](https://github.com/natgeo/mortar), the National Geographic Society's living styleguide. You can preview Mortar's styles and patterns at [http://natgeo.github.io/mortar/]().


## Global Responsive Navigation

The ISP template utilizes the global responsive navigation for header and footer. If you have any questions about how it functions please visit:

Global header: 

- [Documentation](https://github.com/natgeo/modules-global-nav) 
- [Test pages](http://assets.nationalgeographic.com/modules-global-nav/)

Global footer:

- [Documentation](https://github.com/natgeo/modules-global-footer) 
- [Test pages](http://assets.nationalgeographic.com/modules-global-footer/)

Tickets can be filed with the [GN Project on Jira](https://jira.nationalgeographic.com/browse/GN/).

## Platform (videos)

1. Examples of markup can be found in the [main index.html](https://github.com/natgeo/specialprojects-isp-template/blob/master/app/_pages/index.html)
2. Markup examples
  - For an inline video with controls your markup should look like:

  ```html
  <div id="inlinePlayer01"
       class="inline ngs-video"
       data-instance="inlinePlayer01"
       data-type="local"
       data-guid="00000145-a929-dd2e-a74d-f9af723b0000">
  </div>
  <script src="//assets.nationalgeographic.com/modules-video/build/video.min.js"></script>
  ```

  - For a "textural" video that autoplays without controls, you'll only need to change the type to textural and add the muted data attribute. e.g.,

  ```html
  <div id="topTexturalPlayer"
     class="ngs-video"
     data-instance="topTexturalPlayer"
     data-guid="00000145-28f8-d53d-abcf-ebfc72ba0000"
     data-type="textural"
     data-muted="false">
  </div>
  ```

  - NOTE: You need only include the video.min file once, but can create however
  many player instances you need. jQuery is required. For more information,
  please see the docs in the player repo [https://github.com/natgeo/modules-video#ngsvideo-setup-usage-and-instances]().

## Webfonts

The default NGS webfonts, documented at [https://confluence.nationalgeographic.com/display/DS/Web+Fonts](). Both [typekit](https://github.com/natgeo/specialprojects-isp-template/blob/master/app/_includes/typekit.html) and [hoefler](https://github.com/natgeo/specialprojects-isp-template/blob/master/app/_layouts/default.html#L21) fonts are included.
