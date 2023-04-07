// ==UserScript==
// @name         Wikipedia Classic Design
// @namespace    http://tampermonkey.net/
// @version      1
// @description  Redirect Wikipedia to the classic design
// @author       MintMain21
// @match        *://en.wikipedia.org/*
// @match        *://es.wikipedia.org/*
// @match        *://de.wikipedia.org/*
// @match        *://it.wikipedia.org/*
// @match        *://fa.wikipedia.org/*
// @match        *://ru.wikipedia.org/*
// @match        *://ja.wikipedia.org/*
// @match        *://fr.wikipedia.org/*
// @match        *://zh.wikipedia.org/*
// @match        *://pt.wikipedia.org/*
// @match        *://*.m.wikipedia.org/*
// @grant        none
// @license      MIT
// ==/UserScript==
/**

This userscript is based predominantly on https://greasyfork.org/en/scripts/458494-old-wikipedia-layout/code, as well as https://github.com/MintMain21/Invidious-URL-Parameters-Userscript.
It is designed to redirect wikipedia pages using the modern (2022) design to pages using a more classic design.
By default, it redirects to a theme based on Wikipedia's appearence in 2008 (modern). Other themes are avalible based on designs from 2002 (cologneblue), 2010 (vector), etc. For more information, see https://en.wikipedia.org/wiki/Wikipedia:Skin
To edit the enforced theme, change the skinchoice below. */


const skinchoice = 'modern';


/**Anytime you load a wikipedia page, this script will check the URL for the desired parameters, and apply them if not found. */



function test(url){
    return !url.includes(skinchoice);
}

function getNewPage(url){
    var que = '?';
    if(url.includes("?")){que = '&'};
    return url.concat(que,"useskin=",skinchoice);
}

function fixLinks(){
    var links = Array.prototype.slice.call(document.links, 0);
    links.filter(function(link){
        if(test(link.href)){
            var greatNewLink = getNewPage(link.href);
            if(link.hasAttribute('data-outbound-url')) link.setAttribute('data-outbound-url', greatNewLink);
            link.setAttribute('href', greatNewLink);
        }
    });
}

if(test(window.location.href)){window.location.assign(getNewPage(window.location.href));}

window.onload = fixLinks;
setInterval(fixLinks, 50);

