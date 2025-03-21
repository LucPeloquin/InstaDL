# Quick Save Chrome Extension

A Chrome extension that allows you to save images, links, videos, and audio files to a specified folder with a simple Alt + left click, bypassing the file explorer dialog.

## Features

- **Alt + Left Click**: Quickly save any media element without opening the file explorer
- **Context Menu Option**: Right-click and select "Quick Save" as an alternative method
- **Customizable Save Location**: Set your preferred download folder
- **Visual Feedback**: Brief notification when saving files
- **Supports Multiple Media Types**: Works with images, links, videos, and audio elements

## Installation

### From Source Code

1. Clone this repository or download the source code
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" by toggling the switch in the top right corner
4. Click "Load unpacked" and select the extension directory
5. The extension is now installed and ready to use

## Usage

1. **Alt + Left Click Method**:
   - Hold the Alt key and left-click on any image, link, video, or audio element
   - The file will be saved automatically to your specified folder

2. **Context Menu Method**:
   - Right-click on any image, link, video, or audio element
   - Select "Quick Save" from the context menu
   - The file will be saved automatically to your specified folder

## Configuration

1. Click on the extension icon in the Chrome toolbar to open the options page
   - Or right-click the extension icon and select "Options"

2. Set your preferred save location:
   - The path should be relative to your Chrome downloads directory
   - Default is "Downloads/QuickSave"

3. Click "Save Settings" to apply your changes

## File Structure

quick-save-extension/
├── manifest.json # Extension configuration
├── background.js # Background service worker
├── content.js # Content script for detecting Alt+click
├── options.html # Options page HTML
├── options.js # Options page functionality
└── README.md # This documentation


## Limitations

- Chrome security restrictions prevent extensions from saving files to arbitrary locations on your computer. Files will be saved to subfolders within your default Chrome downloads folder.
- Some websites may prevent the extension from working due to their security policies or the way they handle media elements.

## Privacy

This extension:
- Does not collect any user data
- Does not communicate with external servers
- Only accesses the URLs of media elements you explicitly click on
- Requires minimal permissions to function

## License

[MIT License](LICENSE)

## Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue if you have suggestions for improvements or bug fixes.
