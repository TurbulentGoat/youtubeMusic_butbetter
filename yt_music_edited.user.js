// ==UserScript==
// @name         YouTube Music Button Colours
// @namespace    http://tampermonkey.net/
// @version      v1.3
// @description  Change Repeat All, Repeat One, and Shuffle buttons to red when activated for better visibility.
// @author       TurbulentGoat
// @match        *://*.music.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        GM_addStyle
// ==/UserScript==

window.addEventListener('load', function () {
    'use strict';

    /* ------------------------------------------------------------------
     * 1️⃣ Inject the custom CSS - Updated to match current stylesheet structure
     * ------------------------------------------------------------------ */
    GM_addStyle(`
        /* ────────────────────────────────────────────────
           Custom properties
          ──────────────────────────────────────────────── */

        /* ────────────────────────────────────────────────
           Shuffle Button Active State - Override the white color from stylesheet
          ──────────────────────────────────────────────── */
        ytmusic-player-bar[shuffle-on] .shuffle.ytmusic-player-bar,
        ytmusic-player-bar[shuffle-on] .expand-shuffle.ytmusic-player-bar {
            color: #ff0000 !important;
        }

        /* ────────────────────────────────────────────────
           Repeat Button Active State - Override the white color from stylesheet
          ──────────────────────────────────────────────── */
        ytmusic-player-bar:not([repeat-mode=NONE]) .repeat.ytmusic-player-bar {
            color: #ff0000 !important;
        }

        /* ────────────────────────────────────────────────
           Ensure disabled repeat button stays dimmed
          ──────────────────────────────────────────────── */
        ytmusic-player-bar[repeat-mode=DISABLED] .repeat.ytmusic-player-bar {
            color: rgba(255,255,255,.3) !important;
        }
    `);

    /* ------------------------------------------------------------------------------------------------------------------------------------
     * Change the page title after a short delay (feel free to remove this, it's just the browser tab title I found funny)
     * ------------------------------------------------------------------------------------------------------------------------------------ */
    function changeTitle() {
        const titleElement = document.querySelector("head > title");
        if (titleElement) {
            titleElement.textContent = "A Slightly Shitter Spotify";
        }
    }
    /* ------------------------------------------------------------------------------------------------------------------------------------
     * This is the end of the changeTitle function if you do want to remove it
     * ------------------------------------------------------------------------------------------------------------------------------------ */

    setTimeout(changeTitle, 1000);
});
