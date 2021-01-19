import { queryTabs, skipVideoBack, skipVideoForward } from "./util.js";

chrome.commands.onCommand.addListener((command) => {
  const tabIndex = 0;

  if (command.match("Rewind")) {
    queryTabs((tabs) => {
      if (tabs && tabs.length > tabIndex) {
        skipVideoBack(tabs[tabIndex].id);
      }
    });
  } else if (command.match("Fast-forward")) {
    queryTabs((tabs) => {
      if (tabs && tabs.length > tabIndex) {
        skipVideoForward(tabs[tabIndex].id);
      }
    });
  }
});
