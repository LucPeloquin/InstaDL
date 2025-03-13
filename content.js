// Listen for Alt + left click on images, links, videos, and audio
document.addEventListener('click', function(event) {
  // Check if Alt key is pressed and it's a left click (button 0)
  if (event.altKey && event.button === 0) {
    let url = null;
    let mediaType = null;
    
    // Check what type of element was clicked
    if (event.target.tagName === 'IMG') {
      url = event.target.src;
      mediaType = 'image';
      event.preventDefault(); // Prevent default action (like opening image in new tab)
    } 
    else if (event.target.tagName === 'A') {
      url = event.target.href;
      mediaType = 'link';
      event.preventDefault(); // Prevent default action (like following the link)
    }
    else if (event.target.tagName === 'VIDEO') {
      url = event.target.currentSrc || event.target.src;
      mediaType = 'video';
      event.preventDefault();
    }
    else if (event.target.tagName === 'AUDIO') {
      url = event.target.currentSrc || event.target.src;
      mediaType = 'audio';
      event.preventDefault();
    }
    
    // If we found a valid URL, send it to the background script
    if (url) {
      chrome.runtime.sendMessage({
        action: 'quickSave',
        url: url,
        mediaType: mediaType
      });
      
      // Show a small notification to the user
      showSaveNotification(event.clientX, event.clientY);
    }
  }
});

// Function to show a small notification when a file is saved
function showSaveNotification(x, y) {
  const notification = document.createElement('div');
  notification.textContent = 'Saving...';
  notification.style.position = 'fixed';
  notification.style.left = `${x + 10}px`;
  notification.style.top = `${y + 10}px`;
  notification.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
  notification.style.color = 'white';
  notification.style.padding = '5px 10px';
  notification.style.borderRadius = '4px';
  notification.style.zIndex = '9999';
  notification.style.fontSize = '12px';
  
  document.body.appendChild(notification);
  
  // Remove the notification after 1.5 seconds
  setTimeout(() => {
    notification.remove();
  }, 1500);
} 