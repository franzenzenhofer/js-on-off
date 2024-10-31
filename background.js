// MIT License
// JavaScript Toggle Chrome Extension
// Author: Your Name
// Date: YYYY-MM-DD

/**
 * @fileoverview
 * Service worker script for toggling JavaScript execution on or off
 * for the current website when the extension's icon is clicked.
 * The icon color reflects the current state: green for enabled, red for blocked.
 */

'use strict';

/**
 * Retrieves the active tab in the current window.
 * @return {Promise<chrome.tabs.Tab>} - A promise resolving to the current tab.
 */
const getCurrentTab = async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  return tab;
};

/**
 * Retrieves the JavaScript content setting for a URL.
 * @param {string} url - The URL to check.
 * @return {Promise<string>} - A promise resolving to 'allow', 'block', or 'default'.
 */
const getJavaScriptSetting = (url) => {
  return new Promise((resolve) => {
    chrome.contentSettings.javascript.get({ primaryUrl: url }, (details) => {
      resolve(details.setting || 'default');
    });
  });
};

/**
 * Sets the JavaScript content setting for a URL pattern.
 * @param {string} pattern - The URL pattern (e.g., 'https://example.com/*').
 * @param {string} setting - The setting to apply ('allow' or 'block').
 * @return {Promise<void>}
 */
const setJavaScriptSetting = (pattern, setting) => {
  return new Promise((resolve, reject) => {
    chrome.contentSettings.javascript.set({ primaryPattern: pattern, setting }, () => {
      if (chrome.runtime.lastError) {
        console.error('Error setting JavaScript content setting:', chrome.runtime.lastError);
        reject(chrome.runtime.lastError);
      } else {
        resolve();
      }
    });
  });
};

/**
 * Reloads a tab given its ID.
 * @param {number} tabId - The ID of the tab to reload.
 * @return {Promise<void>}
 */
const reloadTab = (tabId) => {
  return chrome.tabs.reload(tabId);
};

/**
 * Converts a URL into a pattern suitable for content settings.
 * @param {string} url - The URL to convert.
 * @return {string} - The content setting pattern.
 */
const getPatternFromURL = (url) => {
  try {
    const { protocol, hostname, port } = new URL(url);
    const portPart = port ? `:${port}` : '';
    return `${protocol}//${hostname}${portPart}/*`;
  } catch (error) {
    console.error('Invalid URL:', url);
    return '';
  }
};

/**
 * Updates the extension's icon based on the JavaScript setting.
 * @param {number} tabId - The ID of the tab.
 * @param {string} setting - The JavaScript setting ('allow', 'block', or 'default').
 */
const updateIcon = (tabId, setting) => {
  let iconColor;
  switch (setting) {
    case 'allow':
      iconColor = 'green';
      break;
    case 'block':
      iconColor = 'red';
      break;
    default:
      iconColor = 'gray';
  }

  chrome.action.setIcon({
    tabId: tabId,
    path: {
      '16': `icon_${iconColor}16.png`,
      '32': `icon_${iconColor}32.png`,
      '48': `icon_${iconColor}48.png`,
      '128': `icon_${iconColor}128.png`,
    },
  });
};

/**
 * Updates the icon for a given tab based on the current JavaScript setting.
 * @param {chrome.tabs.Tab} tab - The tab object.
 */
const updateIconForTab = async (tab) => {
  if (!tab || !tab.url || tab.url.startsWith('chrome://') || tab.url.startsWith('chrome-extension://')) {
    // Skip internal Chrome pages and extensions
    return;
  }
  const setting = await getJavaScriptSetting(tab.url);
  updateIcon(tab.id, setting);
};

/**
 * Toggles the JavaScript setting for the current site.
 * @param {chrome.tabs.Tab} tab - The tab where the action was clicked.
 */
const toggleJavaScript = async (tab) => {
  try {
    if (!tab || !tab.url) return;

    const url = tab.url;
    const pattern = getPatternFromURL(url);

    if (!pattern) {
      console.error('Could not create a pattern from URL:', url);
      return;
    }

    const currentSetting = await getJavaScriptSetting(url);
    const newSetting = currentSetting === 'block' ? 'allow' : 'block';

    await setJavaScriptSetting(pattern, newSetting);
    updateIcon(tab.id, newSetting);
    await reloadTab(tab.id);
  } catch (error) {
    console.error('Error toggling JavaScript:', error);
  }
};

// Listener for action icon click
chrome.action.onClicked.addListener(toggleJavaScript);

// Update icon when the tab is updated
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.active) {
    updateIconForTab(tab);
  }
});

// Update icon when the active tab changes
chrome.tabs.onActivated.addListener(async (activeInfo) => {
  const tab = await chrome.tabs.get(activeInfo.tabId);
  updateIconForTab(tab);
});

// Update icon when the window focus changes
chrome.windows.onFocusChanged.addListener(async () => {
  const tab = await getCurrentTab();
  if (tab) {
    updateIconForTab(tab);
  }
});

// Handle removed tabs to clean up any listeners if necessary
chrome.tabs.onRemoved.addListener((tabId, removeInfo) => {
  // Currently, there's no resource to clean up, but this is a placeholder for future use.
});
