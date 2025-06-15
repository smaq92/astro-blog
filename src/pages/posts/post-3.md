---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'My Third Blog Post'
pubDate: 2025-05-31
description: 'Astro and CSS'
author: 'Sam A.'
tags: ["astro", "styling", "css"]
---

I finally went into styling the pages of Astro. It's still really similar with styling basic HTML and it's straight forward. I'm pretty sure I can incorporate SCSS here but to keep it simple, I'll stick to the good old fashioned import.

## What I've accomplished

1. **Make and connect globals.css**:
   
   As I said before, styling astro pages is pretty much similar as you do the basic HTML pages. The only difference is that instead of using `<link>`, I just do "import". I set up some pretty basic styling and put it in ==src/styles/globals.css== and import it in between the code fences for every page. Viola, everything is styled to perfection (almost!).

2. **Style about page**: 
  
  You can also bypass the global styling by styling the page directly using the good old `<style>`. I styled my about page a little bit differently. What will happen is that it will bypass any styling in globals that has conflict with my single page styling. The specific page style will prevail ^^.
   

## What's next

Going to learn and deep deeper about ASTRO components. 