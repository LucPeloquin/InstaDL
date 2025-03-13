let quickSaveMode = false;
let defaultSaveFolder = 'Downloads/QuickSave';

// Initialize extension
chrome.runtime.onInstalled.addListener(() => {
  // Create context menu item for right-click option as well
  chrome.contextMenus.create({
    id: "quickSave",
    title: "Quick Save",
    contexts: ["link", "image", "video", "audio"]
  });

  // Load saved settings
  chrome.storage.sync.get('defaultSaveFolder', (data) => {
    if (data.defaultSaveFolder) {
      defaultSaveFolder = data.defaultSaveFolder;
    } else {
      // Save default value
      chrome.storage.sync.set({ defaultSaveFolder });
    }
  });
});

// Listen for messages from the content script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'quickSave' && message.url) {
    saveFile(message.url);
  }
});

// Handle context menu clicks (keeping this for right-click option)
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "quickSave") {
    let url;
    
    if (info.srcUrl) {
      // For images, videos, audio
      url = info.srcUrl;
    } else if (info.linkUrl) {
      // For links
      url = info.linkUrl;
    } else {
      return;
    }
    
    saveFile(url);
  }
});

// Function to save the file
function saveFile(url) {
  // Extract filename from URL
  const filename = url.split('/').pop().split('#')[0].split('?')[0];
  
  // Download the file
  chrome.downloads.download({
    url: url,
    filename: `${defaultSaveFolder}/${filename}`,
    saveAs: false // Don't show the save dialog
  });
} 