# Wikipedia-Classic-Design-userscript

![Greasy Fork](https://img.shields.io/greasyfork/v/463713-wikipedia-classic-design?style=flat-square)
![Greasy Fork](https://img.shields.io/greasyfork/dt/463713-wikipedia-classic-design?style=flat-square)
![GitHub](https://img.shields.io/github/license/MintMain21/Wikipedia-Classic-Design-userscript?style=flat-square) 

A userscript for enforcing a classic Wikipedia design

Avalible to install on [Greasyfork](https://greasyfork.org/en/scripts/463713-wikipedia-classic-design)

This userscript is based predominantly on [this script](https://greasyfork.org/en/scripts/458501-vector-layout-for-wikipedia/code), as well as [My Own Script](https://github.com/MintMain21/Invidious-URL-Parameters-Userscript.)
It is designed to redirect wikipedia pages using the modern (2022) design to pages using a more classic design.
By default, it redirects to a theme based on Wikipedia's appearence in 2008 (modern). Other themes are avalible based on designs from 2002 (cologneblue), 2010 (vector), etc. For more information, see https://en.wikipedia.org/wiki/Wikipedia:Skin

This script's functionality can also be recreated in [Redirector]() using the following rule.

 Redirect: `https://*.wikipedia.org/*`
 to: `https://$1.wikipedia.org/$2?useskin=modern`
 Excluding: `https://*.wikipedia.org/*?useskin=modern`
 Example:`https://en.m.wikipedia.org/wiki/Beaver` to https://en.m.wikipedia.org/wiki/Beaver?useskin=modern

