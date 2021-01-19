export const queryTabs = (callback) => {
  chrome.tabs.query(
    {
      url: "*://*.youtube.com/watch*",
    },
    (tabs) => {
      callback(tabs);
    }
  );
};

export const getVideo = (tabId, callback) => {
  chrome.tabs.executeScript(
    tabId,
    {
      file: "/video/get.js",
    },
    (result) => {
      if (result && result.length > 0) {
        callback(result[0]);
      }
    }
  );
};

export const toggleVideoPlayback = (tabId, callback) => {
  chrome.tabs.executeScript(
    tabId,
    {
      file: "/video/togglePlayback.js",
    },
    (result) => {
      if (callback && result && result.length > 0) {
        callback(result[0]);
      }
    }
  );
};

export const toggleVideoMuted = (tabId, callback) => {
  chrome.tabs.executeScript(
    tabId,
    {
      file: "/video/toggleMuted.js",
    },
    (result) => {
      if (result && result.length > 0) {
        callback(result[0]);
      }
    }
  );
};

export const skipVideoBack = (tabId, callback) => {
  chrome.tabs.executeScript(
    tabId,
    {
      file: "/video/skipBack.js",
    },
    (result) => {
      if (callback && result && result.length > 0) {
        callback(result[0]);
      }
    }
  );
};

export const skipVideoForward = (tabId, callback) => {
  chrome.tabs.executeScript(
    tabId,
    {
      file: "/video/skipForward.js",
    },
    (result) => {
      if (callback && result && result.length > 0) {
        callback(result[0]);
      }
    }
  );
};

export const toggleTab = (tabId, active = true) => {
  chrome.tabs.update(tabId, {
    active,
  });
};
