function getParametersByName(e,a){a||(a=window.location.href);var t={};return e.forEach((function(e){var o=e.replace(/[\[\]]/g,"\\$&"),s=new RegExp("[?&]"+o+"(=([^&#]*)|&|#|$)").exec(a);s&&(s[2]?t[e]=decodeURIComponent(s[2].replace(/\+/g," ")):t[e]="")})),t}function updateTextElement(){var e=getParametersByName(["hello","hi"]),a=document.getElementById("textElement"),t="";switch(!0){case"ARUP"===e.hi:t=e.hi+" your password is 217";break;case"Capital Group"===e.hi:t=e.hi+" your password is 217";break;case"GT's"===e.hi:t=e.hi+" your password is 217";break;case"JJM"===e.hi:t=e.hi+" your password is 217";break;case"Live Nation"===e.hi:t=e.hi+" your password is 217";break;case"Vivian"===e.hello:t="";break;case"M13"===e.hello:t=e.hello+" your password is 141";break;case"Starz"===e.hello:t=e.hello+" your password is 151";break;case"iSpot"===e.hello:t=e.hello+" your password is 163";break}a.textContent=t}document.addEventListener("DOMContentLoaded",(function(){const e=document.getElementById("password-input"),a=document.getElementById("submit-button"),t=document.getElementById("content");a.addEventListener("click",(function(){let a="";switch(e.value){case"217":case"141":case"151":case"163":a="pages/1/work.html";break;case"2330":case"2771":case"2882":a="pages/ad1/work.html";break;case"33300":case"37711":case"38822":a="pages/xd1/work.html";break}a?window.location.href=a:t.textContent="Password not recognized. Please try again."}))}));