// ==UserScript==
// @name         Wikipedia Classic Design
// @namespace    http://tampermonkey.net/
// @version      1
// @description  Redirect Wikipedia to the classic design
// @author       MintMain21
// @match        *://en.wikipedia.org/*
// @grant        none
// @license      MIT
// ==/UserScript==
/**
This userscript is based on https://github.com/MintMain21/Invidious-URL-Parameters-Userscript, which in turn is based on https://greasyfork.org/en/scripts/450983-genius-back-to-the-original-page-layout.
It is designed to redirect wikipedia pages using the modern (2022) design to pages using a more classic design.
By default, it redirects to a theme based on Wikipedia's appearence in 2008 (modern). Other themes are avalible based on designs from 2002 (cologneblue), 2010 (vector), etc. For more information, see https://en.wikipedia.org/wiki/Wikipedia:Skin
To edit the enforced theme, change both (!url.includes("?useskin=[theme here]") and (window.location.replace(url + "?useskin=[theme here]").
Anytime you load a wikipedia page, this script will check the URL for the desired parameters, and apply them if not found.
For a dark theme, it is reccomended this be used in conjuction with the web extension Sauron (https://addons.mozilla.org/en-US/firefox/addon/sauron-dark-mode/ or https://chrome.google.com/webstore/detail/sauron-dark-mode-for-all/fleolcdonmhbeppkijpfbhfhpceehiic)
 */

function getCurrentURL () {
  return window.location.href;
}

// Example
const url = getCurrentURL();

(function() {
    'use strict';

    if (url.includes("*.wikipedia.org") && !url.includes("?useskin=modern")) {
        window.location.replace(url + "?useskin=modern");
    }
})();
