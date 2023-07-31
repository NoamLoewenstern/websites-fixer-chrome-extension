# Chrome Browser Fixer Extension

<p style="text-align: center;">
<a href="https://github.com/NoamLoewenstern/websites-fixer-chrome-extension"><img src="public/logo512.png" alt="Browser Fixer" width="256" height="220">
</a>
</p>

## Description

Welcome to the Chrome Browser Fixer Extension repository! This tool is designed to help developers add plugins to their Chrome browser to fix specific issues that they might encounter on any website. This extension provides you with a base code where you can add, define and specify the function(s) to run, thus offering a more seamless browsing experience.

## Motivation

In an era of ubiquitous web applications, developers face numerous challenges while dealing with diverse websites. Issues like unappealing styling, script errors, or functionality mishaps can hinder the development process. The Chrome Browser Fixer Extension is our solution to these challenges. Its creation was driven by a commitment to enhance developer productivity, enable customization, and ultimately lead to a superior browsing experience.

## Tech Stack

This project is created with:

![React](https://img.shields.io/badge/React-%2320232a.svg?style=flat-square&logo=react&logoColor=%2361DAFB)
![Typescript](https://img.shields.io/badge/Typescript-%23007ACC.svg?style=flat-square&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-%23646CFF.svg?style=flat-square&logo=vite&logoColor=white)

![webext-bridge](https://img.shields.io/badge/webext_bridge-747a3F.svg?style=flat-square&logo=module&logoColor=white) [webext-bridge](https://github.com/zikaari/webext-bridge) is a chrome-extension utils library for easier and reliable communication between components in a chrome extension project.

## Features

- **Website-Specific Functionality**: Define fixes on a per-website basis. Tackle each challenge individually to create a bespoke solution.
- **Expandable Code Base**: Easily extend the code base to incorporate additional fixes as required. The possibilities are boundless.
- **Regenerate Functionality**: Quickly add new functions on the fly, allowing you to adapt to any issues that a website might throw at you.
- **Styling Fixes**: Address and amend styling issues to improve visual appearance and user experience.

## Installation

1. Download or clone this repository to your local machine using `https://github.com/NoamLoewenstern/websites-fixer-chrome-extension.git`.
2. Run `pnpm install` to install all dependencies.
3. Compile extension: `pnpm build`. Compiled extension will be in `dist` folder.
4. Open the Chrome browser, go to `chrome://extensions/`.
5. Check the box for Developer mode in the top right.
6. Click on 'Load unpacked' button and select the `dist` folder.

## Usage

The extension is meant to be fully customizable per the requirements of the specific website and its related issues. Once installed, the extension will be active in your Chrome browser. Click on the extension icon, and you will see options to add a new fix for a specific website.

To define a new fix:

Add a contentScript to run page, see example at google folder [src\contentScript\google\index.ts](src\contentScript\google\index.ts)

Define URL match to validate page running the fix, and define the function to run on the page.

The functions will run every time you visit the defined URL.

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Noam Loewenstern

[![linkedin-badge]][linkedin-profile-url]

Project Link: [https://github.com/NoamLoewenstern/websites-fixer-chrome-extension](https://github.com/NoamLoewenstern/websites-fixer-chrome-extension)

<!-- variables -->

[linkedin-profile-url]: https://www.linkedin.com/in/noaml/
[linkedin-badge]: https://img.shields.io/badge/LinkedIn_Noam_Loewenstern-0077B5?style=for-the-badge&logo=linkedin&logoColor=white
[link-to-logo]: public/logo512.png
