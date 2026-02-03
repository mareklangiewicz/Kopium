import "../lib/utils.js";
import "../lib/settings.js";

// TODO: Move my frozenOptions to separate "data only" module, so I can import just that.

document.location.replace(Settings.frozenOptions.newTabCustomUrl);
// BTW Settings.get("customUrl") would require awaiting Settings.load() (chrome storage) -> slower
// BTW replace(..) instead of href = .. avoids adding to history

