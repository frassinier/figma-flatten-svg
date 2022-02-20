const svgString = `
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Created by potrace 1.16, written by Peter Selinger 2001-2019
</metadata>
<g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M1337 5104 c-284 -51 -540 -265 -642 -537 -56 -150 -55 -117 -55
-1653 0 -778 2 -1414 4 -1414 2 0 27 16 56 35 127 85 297 146 466 165 70 8
523 10 1559 8 l1460 -3 76 -22 c42 -12 106 -35 144 -52 37 -17 69 -31 71 -31
2 0 4 706 4 1568 0 1713 3 1624 -57 1734 -31 57 -113 138 -171 167 -104 53
-52 51 -1497 50 -1104 -1 -1354 -3 -1418 -15z m1308 -643 c51 -23 89 -64 114
-121 11 -25 162 -425 336 -890 311 -828 317 -846 313 -907 -5 -77 -42 -135
-107 -170 -87 -45 -210 -22 -266 51 -14 18 -51 102 -83 187 l-58 154 -334 0
-334 0 -58 -154 c-32 -85 -69 -169 -83 -187 -56 -73 -179 -96 -266 -51 -65 35
-102 93 -107 170 -4 61 2 79 313 907 174 465 325 865 336 890 39 87 113 140
199 140 25 0 63 -9 85 -19z"/>
<path d="M2478 3438 c-42 -112 -79 -211 -83 -220 -7 -17 5 -18 165 -18 160 0
172 1 165 18 -4 9 -41 108 -83 220 -41 111 -78 202 -82 202 -4 0 -41 -91 -82
-202z"/>
<path d="M1150 1265 c-175 -35 -340 -156 -428 -315 -178 -321 -49 -724 283
-885 141 -68 69 -65 1654 -65 1008 0 1446 3 1483 11 157 33 293 170 327 327
15 70 15 534 0 604 -34 157 -170 294 -327 327 -82 17 -2905 14 -2992 -4z"/>
</g>
</svg>
`;

figma.showUI(__html__)

figma.ui.onmessage = msg => {
  if (msg.type === 'create-rectangles') {
    const nodes = [];
    const icon = figma.createNodeFromSvg(svgString)
    icon.name = "Icon_";
    icon.x = figma.viewport.center.x
    icon.y = figma.viewport.center.y
    figma.currentPage.appendChild(icon);
    figma.currentPage.selection = nodes;
    figma.viewport.scrollAndZoomIntoView(nodes);
  }

  figma.closePlugin()
}
