import "../lib/url_utils.js";

// TODO NOW: move useful stuff to kopium board and remove this kopium page

document.addEventListener("DOMContentLoaded", () => initDom());

document.addEventListener('keydown', function(event) {onKeyDown(event)});

async function initDom() {

  await Settings.onLoaded();
  // UserSearchEngines.set(Settings.get("searchEngines")); // FIXME: this is really bad/temporary?

  let key;
  let rowsHtml = "";
  for (key in MyFun) rowsHtml += `<li><code class="keys">${key}</code>${MyFun[key].name}</li>`
  document.querySelector("#local-keymaps").innerHTML = rowsHtml

  rowsHtml = "";
  // let kte = UserSearchEngines.keywordToEngine;
  // for (key in kte) rowsHtml += `<li><code class="keys">${key}</code>${kte[key].description}</li>`
  document.querySelector("#search-engines").innerHTML = rowsHtml
}

/** @param {KeyboardEvent} event */
function onKeyDown(event) {
  const f = MyFun[event.key];
  if (!f || event.ctrlKey || event.altKey) return;
  console.log(f.name);
  if (f.confirmation && !confirm(f.confirmation)) { console.log("Cancelled."); return; }
  f.fun();
  console.log("Done.");
}

const MyFun = {
  r: {
    name: "Reload Kopium",
    confirmation: "You have asked Kopium to RELOAD VIMIUM AND ALL TABS. Are you sure?",
    fun() { chrome.runtime.sendMessage({ handler: "reloadVimiumExtension" }); },
  },
  o: {
    name: "Open Kopium Options",
    fun() { chrome.runtime.sendMessage({ handler: "openOptionsPageInNewTab" }); },
  },
  l: {
    name: "Log Storage",
    fun() { chrome.storage.sync.get(console.log); },
  },

  m: {
    name: "Reset Mappings",
    confirmation: "Reset Kopium Key Mappings?",
    // FIXME: is removing fine? shouldn't I set to default?? Better: I should use Settings (higher level api)
    fun() { chrome.storage.sync.remove("keyMappings") },
  },
  e: {
    name: "Reset Engines",
    confirmation: "Reset Kopium Search Engines?",
    // FIXME: is removing fine? shouldn't I set to default?? Better: I should use Settings (higher level api)
    fun() { chrome.storage.sync.remove("searchEngines") },
  },
  c: {
    name: "Clear All Kopium Storage",
    confirmation: "You have asked Kopium to CLEAR ALL STORAGE (synced). Are you sure?",
    fun() { chrome.storage.sync.clear(); },
  },
  p: {
    name: "Playground",
    confirmation: "Run playground code. Are you sure?",
    fun() {
      console.log("Nothing here yet.");
    },
  },
}
