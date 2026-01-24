
// region [[My Nice New Tab Pages]]

const myNiceNewTabPagesUrls = {
  // TODO my own black, dark, light, white, etc mini html only pages (with/without offline service workers??)
  miniDarkExample1: "https://scaulfield7.github.io/html-only-website-in-dark-mode/",
  kopiumBoard: "https://mareklangiewicz.pl/Kopium/board/", // defined here in kopium project, published by github actions.
  vimiumGithub: "https://vimium.github.io/new-tab/", // from yet another: https://github.com/vimium/vimium.github.io 
  chromeNewTabPage: "chrome://new-tab-page",
  chromeNewTabRedirecting: "chrome://newtab", // same as about:newtab ; DO NOT use to redirect new tab - potential loop!
  chromeAboutPages: "chrome://about", // nice list of all? chrome special pages, but not as new tab page
};

const myNewPageUrl = myNiceNewTabPagesUrls.kopiumBoard;

// endregion [[My Nice New Tab Pages]]

document.location.replace(myNewPageUrl);
// BTW replace(..) instead of href = .. avoids adding to history

