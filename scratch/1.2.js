/*
 * Copyright (c) 2013-2020 Vanessa Freudenberg
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

var fullscreen = navigator.standalone ||
    window.matchMedia('(max-device-width: 800px) and (max-device-height: 800px)').matches;

window.onload = function() {
    var url = "Scratch1.2.image";
    SqueakJS.runSqueak(url, sqCanvas, {
        appName: "Scratch",
        fullscreen: fullscreen,
        header: sqHeader,
        footer: sqFooter,
        spinner: sqSpinner,
        fullscreenCheckbox: sqFullscreen,
        root: "/Scratchy",
        templates: ["Projects", "Media", "Help", "locale"],
    });
};

if (addToHomescreen.isStandalone)
    fullscreen = true;
else addToHomescreen({
    appID: 'squeakjs.scratch.add2home',
});
