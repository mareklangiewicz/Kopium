// The possible destinations for new tabs opened using Vimium's `createTab` command.
const newTabDestinations = {
  browserNewTabPage: "browserNewTabPage",
  vimiumNewTabPage: "vimiumNewTabPage",
  customUrl: "customUrl",
};

const vimiumNewTabPageUrl = "https://mareklangiewicz.pl/Kopium/board/";

const defaultOptions = {
  scrollStepSize: 60,
  smoothScroll: true,
  keyMappings: `
# Insert your preferred key mappings here.
# TODO NOW: update my custom keys
map ; passNextKey
map <c-;> passNextKey
map H scrollLeft
map L scrollRight
map <c-e> Vomnibar.activateTabSelection
unmap x
unmap X
unmap J
unmap K
unmap W
unmap <a-p>
unmap <a-m>
map <a-x> removeTab
map <a-X> restoreTab
map <a-z> nextTab
map <a-Z> previousTab
map ZZ removeTab
map ZX restoreTab
map ZH moveTabLeft
map ZL moveTabRight
map ZJ previousTab
map ZK nextTab
map ZW moveTabToNewWindow
map ZP togglePinTab
map ZM toggleMuteTab
map M toggleMuteTab
map <c-o> goBack
map <c-i> goForward
    `,
  linkHintCharacters: "sadfjklewcmpgh",
  linkHintNumbers: "0123456789",
  filterLinkHints: false,
  hideHud: false,
  hideUpdateNotifications: false,
  userDefinedLinkHintCss: `\
div > .vimiumHintMarker {
/* linkhint boxes */
background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#FFF785),
  color-stop(100%,#FFC542));
border: 1px solid #E3BE23;
}

div > .vimiumHintMarker span {
/* linkhint text */
color: black;
font-weight: bold;
font-size: 12px;
}

div > .vimiumHintMarker > .matchingCharacter {
}\
`,
  // Default exclusion rules.
  exclusionRules: [
    // Disable Vimium on Gmail.
    // {
    //   passKeys: "",
    //   pattern: "https?://mail.google.com/*",
    // },
  ],

  // NOTE: If a page contains both a single angle-bracket link and a double angle-bracket link,
  // then in most cases the single bracket link will be "prev/next page" and the double bracket
  // link will be "first/last page", so we put the single bracket first in the pattern string so
  // that it gets searched for first.

  // "\bprev\b,\bprevious\b,\bback\b,<,‹,←,«,≪,<<"
  previousPatterns: "prev,previous,back,older,<,\u2039,\u2190,\xab,\u226a,<<",
  // "\bnext\b,\bmore\b,>,›,→,»,≫,>>"
  nextPatterns: "next,more,newer,>,\u203a,\u2192,\xbb,\u226b,>>",
  // default/fall back search engine
  searchUrl: "https://www.google.com/search?q=",
  // put in an example search engine
  /*
  TODO_maybe: hardcode my search engines in some nicer way?
      maybe with more autocompletion?? see: https://github.com/philc/vimium/pull/4091
  # My custom (same as in: chrome://settings/searchEngines)
  # TODO NOW: test custom engines and add some for grok, chatgpt, etc
  */
  searchEngines: `

x: https://x.com/search?q=%s&src=typed_query X Top
xl: https://x.com/search?q=%s&src=typed_query&f=live X Latest
xp: https://x.com/search?q=%s&src=typed_query&f=user X People
xm: https://x.com/search?q=%s&src=typed_query&f=media X Media
xx: https://x.com/i/grok?text=%s Grok XAi

cai: https://chatgpt.com/?q=%s&hints=search Closed AI ChatGPT

y: https://you.com/search?q=%s You.com
yc: https://you.com/search?q=%s&tbm=youchat You.com chat

g: https://www.google.com/search?q=%s Google
gl: https://www.google.com/search?q=%s&btnI I'm feeling lucky...
gk: https://keep.google.com/#search/text=%s
gm: https://www.google.pl/maps/search/%s?hl=en&source=opensearch Google Maps
yt: https://www.youtube.com/results?search_query=%s YouTube

gh: https://github.com/search?q=%s&ref=opensearch GitHub

t: https://translate.google.pl/?sl=en&tl=pl&text=%s Translate EN -> PL
tpl: https://translate.google.pl/?sl=pl&tl=en&text=%s Translate PL -> EN

acs: https://cs.android.com/search?q=%s&ss=androidx%2Fplatform%2Fframeworks%2Fsupport Android Code Search
ads: https://developer.android.com/s/results?q=%s Android Developer Search

mdn: https://developer.mozilla.org/en-US/search?q=%s MDN Web Docs

r: https://www.reddit.com/search/?q=%s Reddit
rc: https://www.reddit.com/search/?q=%s&type=communities Reddit Communities
rm: https://www.reddit.com/search/?q=%s&type=media Reddit Media
rp: https://www.reddit.com/search/?q=%s&type=people Reddit People

pwn: https://encyklopedia.pwn.pl/szukaj/%s.html Encyklopedia PWN

f: https://www.facebook.com/search/top?q=%s Facebook
fp: https://www.facebook.com/search/people?q=%s Facebook People
fpo: https://www.facebook.com/search/posts?q=%s Facebook Posts
fph: https://www.facebook.com/search/photos?q=%s Facebook Photos
fvd: https://www.facebook.com/search/videos?q=%s Facebook Videos
fmw: https://www.facebook.com/marketplace/warsaw/search?query=%s Facebook Market Place Warsaw
fmwr: https://www.facebook.com/marketplace/110145572342035/search?query=%s Facebook Market Place Wroclaw
fmbr: https://www.facebook.com/marketplace/106013599429326/search?query=%s Facebook Market Place Brzeg
fmop: https://www.facebook.com/marketplace/112476435434769/search?query=%s Facebook Market Place Opole

w: https://en.wikipedia.org/wiki/Special:Search?search=%s Wikipedia (en)
wpl: https://pl.wikipedia.org/wiki/Specjalna:Szukaj?search=%s Wikipedia (pl)

wyk: https://wykop.pl/szukaj/wszystkie/%s Wykop.pl
yah: https://search.yahoo.com/search?p=%s Yahoo
ago: https://www.allegro.pl/search.php?string=%s Allegro
amz: https://www.amazon.com/s/?field-keywords=%s Amazon

ddg: https://duckduckgo.com/?q=%s DuckDuckGo
msb: https://www.bing.com/search?q=%s Microsoft Bing
`,
    // More examples from Vimium
    // w: https://www.wikipedia.org/w/index.php?title=Special:Search&search=%s Wikipedia
    // g: https://www.google.com/search?q=%s Google
    // l: https://www.google.com/search?q=%s&btnI I'm feeling lucky...
    // y: https://www.youtube.com/results?search_query=%s Youtube
    // gm: https://www.google.com/maps?q=%s Google maps
    // b: https://www.bing.com/search?q=%s Bing
    // d: https://duckduckgo.com/?q=%s DuckDuckGo
    // az: https://www.amazon.com/s/?field-keywords=%s
    // qw: https://www.qwant.com/?q=%s Qwant\

  newTabDestination: newTabDestinations.vimiumNewTabPage,
  newTabCustomUrl: "",
  openVomnibarOnNewTabPage: true,
  newTabUrl: "https://mareklangiewicz.pl/Kopium/board/",
  grabBackFocus: false,
  regexFindMode: false,
  waitForEnterForFilteredHints: true,
  helpDialog_showAdvancedCommands: false,
  ignoreKeyboardLayout: false,
};

/*
 * This class fetches and exposes the view over Vimium's settings data, which is stored in
 * chrome.storage. It merges the user's customizations into the default setting values.
 * It dispatches the "change" event when the settings have been changed.
 */
const Settings = {
  _settings: null,
  _chromeStorageListenerInstalled: false,

  defaultOptions,
  newTabDestinations,
  vimiumNewTabPageUrl,

  async onLoaded() {
    if (!this.isLoaded()) {
      await this.load();
    }
  },

  async chromeStorageOnChanged(_changes, area) {
    // We store data with keys [settings-v1, ...] into the local storage. Only broadcast an event if
    // the object stored with the settings key has changed.
    // We only store settings in the sync area, so storage.sync changes must be settings changes.
    if (area == "sync") {
      await this.load();
      this.dispatchEvent("change");
    }
  },

  async load() {
    // NOTE(philc): If we change the schema of the settings object in a backwards-incompatible way,
    // then we can fetch the whole storage object here and migrate any old settings the user has to
    // the new schema.
    if (!this._chromeStorageListenerInstalled) {
      this._chromeStorageListenerInstalled = true;
      chrome.storage.onChanged.addListener((changes, area) =>
        this.chromeStorageOnChanged(changes, area)
      );
    }

    let result = await chrome.storage.sync.get(null); // Get every key.
    result = this.migrateSettingsIfNecessary(result);
    result["settingsVersion"] = Utils.getCurrentVersion();
    this._settings = Object.assign(globalThis.structuredClone(defaultOptions), result);
  },

  isLoaded() {
    return this._settings != null;
  },

  get(key) {
    if (!this.isLoaded()) {
      throw new Error(`Getting the setting ${key} before settings have been loaded.`);
    }
    return globalThis.structuredClone(this._settings[key]);
  },

  async set(key, value) {
    if (!this.isLoaded()) {
      throw new Error(`Writing the setting ${key} before settings have been loaded.`);
    }
    this._settings[key] = value;
    await this.setSettings(this._settings);
  },

  getSettings() {
    return globalThis.structuredClone(this._settings);
  },

  migratePre2_0(settings) {
    // Prior to Vimium version 2.0.0:
    // - In chrome.storages.sync, the value of each setting was encoded as a JSON string using
    //   JSON.stringify. This was probably an artifact of originally using localStorage, but is no
    //   longer necessary now that chrome.storage exists and can store objects. Note that when
    //   exporting a backup of settings on the options page, the values were not encoded as JSON
    //   strings.
    // - We only stored the settingsVersion key in the JSON payload when a user exported a backup of
    //   their settings. It wasn't set when writing the settings to chrome.storage.sync.

    // NOTE(philc): We want to migrate settings which have JSON-encoded values. Based on the notes
    // above, that should mean we only need to migrate if the settings object is missing a
    // "settingsVersion" key.
    const shouldMigrate = settings["settingsVersion"] == null;
    if (!shouldMigrate) return settings;

    // Migration for v2.0.0: decode all values so that they're not JSON string encoded.
    const newSettings = {};
    for (const [k, v] of Object.entries(settings)) {
      // Most pre-2.0 settings were strings, but the global marks were stored as native values. See
      // #4323. So check the setting value's type before migrating.
      if (typeof v === "string") {
        newSettings[k] = JSON.parse(v);
      } else {
        newSettings[k] = v;
      }
    }
    // This key is no longer stored in our settings, but rather chrome.storage.session.
    delete newSettings.passNextKeyKeys;
    return newSettings;
  },

  migratePre2_4(settings) {
    const version = settings["settingsVersion"];
    // In 2.4 we added some new settings which control the URL that new tabs are opened in.
    const shouldMigrate = version && (Utils.compareVersions(version, "2.4") < 0);
    if (!shouldMigrate) return settings;
    const previousDefaultNewTabUrl = "about:newtab";
    if (settings.newTabUrl == previousDefaultNewTabUrl) {
      settings.newTabDestination = newTabDestinations.browserNewTabPage;
    } else if (settings.newTabUrl == "pages/blank.html") {
      // This was meant to be used as a blank page, but we no longer include this page in Vimium.
      // We use "vimium.github.io/new-tab/" instead.
      settings.newTabDestination = newTabDestinations.vimiumNewTabPage;
    } else if (settings.newTabUrl) {
      // It's some other custom URL the user has set.
      settings.newTabDestination = newTabDestinations.customUrl;
      settings.newTabCustomUrl = settings.newTabUrl;
    }
    delete settings.newTabUrl;
    return settings;
  },

  // Returns a settings object and performs any migrations required if the settings object is from
  // an older version of Vimium.
  migrateSettingsIfNecessary(settings) {
    settings = this.migratePre2_0(settings);
    settings = this.migratePre2_4(settings);
    return settings;
  },

  async setSettings(settings) {
    settings = this.migrateSettingsIfNecessary(settings);
    settings["settingsVersion"] = Utils.getCurrentVersion();
    const result = this.pruneOutDefaultValues(settings);
    // If, after pruning, some keys were removed because their values are now equal to the default
    // values, then explicitly clear those from storage. Otherwise they will remain.
    // NOTE(philc): This kind of sharp edge is a reason to switch to storing the settings object as
    // one big object, rather than as top-level keys in chrome.storage. The tradeoff is that each
    // value in chrome-storage has a maximum size.
    const resultKeys = Object.keys(result);
    const removedKeys = Object.keys(settings).filter((key) => !resultKeys.includes(key));
    await chrome.storage.sync.remove(removedKeys);
    await chrome.storage.sync.set(result);
    await this.load();
  },

  // Returns a new object, removing the keys from `settings` which are equal to the default values
  // for those keys.
  pruneOutDefaultValues(settings) {
    const clonedSettings = globalThis.structuredClone(settings);
    for (const [k, v] of Object.entries(settings)) {
      if (JSON.stringify(v) == JSON.stringify(defaultOptions[k])) {
        delete clonedSettings[k];
      }
    }
    return clonedSettings;
  },

  // Used only by tests.
  async clear() {
    this._settings = null;
    await chrome.storage.sync.clear();
  },
};

Object.assign(Settings, EventDispatcher);

globalThis.Settings = Settings;
