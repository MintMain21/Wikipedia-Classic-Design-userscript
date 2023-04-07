# Wikipedia-Classic-Design-userscript
A userscript for enforcing a classic Wikipedia design

This userscript is based predominantly on https://greasyfork.org/en/scripts/458494-old-wikipedia-layout/code, as well as https://github.com/MintMain21/Invidious-URL-Parameters-Userscript.
It is designed to redirect wikipedia pages using the modern (2022) design to pages using a more classic design.
By default, it redirects to a theme based on Wikipedia's appearence in 2008 (modern). Other themes are avalible based on designs from 2002 (cologneblue), 2010 (vector), etc. For more information, see https://en.wikipedia.org/wiki/Wikipedia:Skin

This script's functionality can also be recreated in [Redirector]() using the following rule.

 Redirect: `https://*.wikipedia.org/*`
 to: `https://$1.wikipedia.org/$2?useskin=modern`
 Example:`https://en.m.wikipedia.org/wiki/Beaver` to https://en.m.wikipedia.org/wiki/Beaver?useskin=modern

