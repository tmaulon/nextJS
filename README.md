# Learning from NextJS!
## Next.JS
### Documentation
You can find Next.JS Docs at [nextjs.org/docs](https://nextjs.org/docs).
### Tutorial
If you prefer begin with tuts, [let's dive in](https://nextjs.org/learn/basics/getting-started)

## Summary
### Basics 
- [Getting started](#getting-started)
- [Navigate Between Pages](#navigate-between-pages)
- [Using Shared Components](#using-shared-components)
- [Create Dynamic Pages](#create-dynamic-pages)
- [Clean URLs with Route Masking](#clean-urls-with-route-masking)
- [Server Side Support for Clean URLs](#server-side-support-for-clean-urls)
- [Fetching Data for Pages](#fetching-data-for-pages)
- [Styling Components](#styling-components)
- [Deploying a Next.js App](#deploying-a-next-js-app)

### Excel 
- [Export into a Static HTML App](#export-into-a-static-html-app)
- [Lazy Loading Modules](#lazy-loading-modules)
- [Lazy Loading Components](#lazy-loading-components)
- [Create AMP Pages](#create-amp-pages)

## Getting started

Visit official [doc](https://nextjs.org/learn/basics/getting-started/setup)

### Setup
Next.js works with Windows, Mac and Linux alike. You only need to have **Node.js installed** on your system to begin building Next.js applications.
Create a simple project by running the following commands : 
```
mkdir hello-next
cd hello-next
npm init -y
npm install --save react react-dom next
mkdir pages
```
Then open the "package.json" in the hello-next directory and add the following **NPM script**:
```
{
  "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
  }
}
```
**Start the dev server**:
```
npm run dev
```
> We can see a **404 page** : This page could not be found

### Creating Our First Page
Here, we've created and exported a simple React Component from the pages/index.js module. 
> Make sure your React Component is the **default** export.

If you remove an html tag or have a syntax error in your template, by default, Next.js will track errors like these and show it in the browser. This helps you identify errors and fix them quickly.

**_Note :_**  _Once you fix the issue, the page will appear instantly without a full page reload. We do this with the help of **Webpack's hot module replacement** facility, which is supported in Next.js by default._