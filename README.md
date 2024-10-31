# 🚀 **JavaScript On/Off** 🚀

**MIT Super Simple JavaScript On/Off for Your Browser – Just One Thing Done Right!**

![JavaScript On/Off Icon](app-store/green_512x512.png)

## 📄 Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [How It Works](#how-it-works)
- [Permissions](#permissions)
- [Installation](#installation)
  - [From the Chrome Web Store](#from-the-chrome-web-store)
  - [Install Locally via GitHub](#install-locally-via-github)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Credits](#credits)

## Introduction

**JavaScript On/Off** is a lightweight and efficient Chrome extension that allows you to effortlessly toggle JavaScript execution on or off for any website. Whether you're a developer looking to debug, a privacy enthusiast aiming to enhance security, or someone who prefers a cleaner browsing experience, this extension provides the control you need with just a single click.

In a landscape crowded with bloated extensions offering numerous features, **JavaScript On/Off** stays true to its core functionality—delivering a reliable JavaScript switcher without unnecessary complexity.

## Features

- **Simple Toggle:** Easily enable or disable JavaScript on any website with a single click.
- **Visual Indicators:** The extension icon changes color to reflect the current state:
  - **Green:** JavaScript is enabled.
  - **Red:** JavaScript is blocked.
  - **Gray:** Default setting is active.
- **Automatic Updates:** Icons update in real-time as you navigate between tabs and windows.
- **Lightweight:** Minimal resource usage ensures your browser remains fast and responsive.
- **Easy Installation:** Available on the Chrome Web Store and GitHub for local installation.

## How It Works

The extension utilizes Chrome's `contentSettings` API to manage JavaScript execution on a per-site basis. When you toggle JavaScript for a website:

1. **Retrieve Current Settings:** It checks the current JavaScript setting (`allow`, `block`, or `default`) for the active site.
2. **Toggle Setting:** It switches the setting between `allow` and `block`.
3. **Update Icon:** The extension icon updates to reflect the new state.
4. **Reload Tab:** The current tab reloads to apply the new JavaScript setting immediately.

This streamlined approach ensures that you have precise control over JavaScript execution without the need for additional configurations or permissions.

## Permissions

**JavaScript On/Off** requires the following permissions to function correctly:

- **`contentSettings`**: To modify JavaScript execution settings for specific websites.
- **`tabs`**: To access information about the open tabs and perform actions like reloading them.
- **`activeTab`**: To interact with the currently active tab.

These permissions are essential for the extension to provide its core functionality of toggling JavaScript on a per-site basis.

## Installation

### From the Chrome Web Store

1. Visit the [JavaScript On/Off Extension Page](#) on the Chrome Web Store.
2. Click on the **"Add to Chrome"** button.
3. Confirm the installation by clicking **"Add Extension"** in the popup dialog.
4. Once installed, the extension icon will appear in your browser's toolbar.

### Install Locally via GitHub

If you prefer to install the extension locally or want to inspect the source code, follow these steps:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/FranzEnzenhofer/javascript-on-off.git
   ```

2. **Navigate to the Directory:**

   ```bash
   cd javascript-on-off
   ```

3. **Load the Extension in Chrome:**

   - Open Chrome and go to `chrome://extensions/`.
   - Enable **"Developer mode"** by toggling the switch in the top right corner.
   - Click on **"Load unpacked"**.
   - Select the cloned `javascript-on-off` directory.

4. **Enjoy!** The extension should now appear in your browser's toolbar.

> **Note:** Ensure that all files, including icons and the `manifest.json`, are present in the directory when loading the extension.

## Usage

1. **Toggle JavaScript:**
   - Click on the **JavaScript On/Off** extension icon in your browser's toolbar.
   - The icon will change color based on the current state:
     - **Green:** JavaScript is enabled.
     - **Red:** JavaScript is blocked.
     - **Gray:** Default setting is active.

2. **Automatic Updates:**
   - The extension automatically updates the icon when you navigate to a new tab, switch between tabs, or change window focus to reflect the current JavaScript setting for that site.

3. **Reloading:**
   - When you toggle JavaScript, the current tab reloads to apply the new setting immediately.

## Contributing

Contributions are welcome! If you have suggestions, bug reports, or want to contribute code, feel free to open an issue or submit a pull request on the [GitHub repository](https://github.com/FranzEnzenhofer/javascript-on-off).

## License

This project is licensed under the [MIT License](LICENSE.md).

## Credits

- **Creator:** Franz Enzenhofer
- **Code Director:** Franz Enzenhofer
- **AI Assistance:** 100% AI-created via ChatGPT o1 Preview and ChatGPT o1 Mini

**JavaScript On/Off** can be implemented using the Google Chrome Extension Store or installed locally via GitHub as detailed above. This ensures flexibility for users who prefer either distribution method.

---



# MIT License

```
MIT License

Copyright (c) [Year] Franz Enzenhofer

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```