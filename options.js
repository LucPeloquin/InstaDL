// Load saved settings when options page opens
document.addEventListener('DOMContentLoaded', () => {
  chrome.storage.sync.get('defaultSaveFolder', (data) => {
    document.getElementById('saveFolder').value = data.defaultSaveFolder || 'Downloads/QuickSave';
  });
  
  // Save settings when button is clicked
  document.getElementById('save').addEventListener('click', () => {
    const defaultSaveFolder = document.getElementById('saveFolder').value;
    
    chrome.storage.sync.set({ defaultSaveFolder }, () => {
      // Show saved message
      const status = document.createElement('p');
      status.textContent = 'Settings saved!';
      status.style.color = 'green';
      document.body.appendChild(status);
      
      // Remove message after 2 seconds
      setTimeout(() => {
        status.remove();
      }, 2000);
    });
  });
}); 