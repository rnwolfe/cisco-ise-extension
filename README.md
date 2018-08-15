# Cisco ISE Assistant
A Google Chrome and Firefox extension to help perform common tasks in Cisco ISE.
## Table of Contents
1. [Overview](#overview)
2. [Browser Support](#browser-support)
2. [How to Install](#how-to-install)
	1. [Google Chrome](#google-chrome)
	2. [Mozilla Firefox](#mozilla-firefox)
3. [Setting up](#setting-up)
    1. [Enable ISE ERS API](#enable-ise-ers-api)
    2. [Setup the Extension](#setup-the-extension)
4. [How to Use](#how-to-use)
    1. [Refresh Identity Group List](#refresh-identity-group-list)
    2. [Support for Bulk MAC Address Handling](#support-for-bulk-mac-address-handling)
    3. [Valid MAC Address Formats](#valid-mac-address-formats)
    4. [Invalid MAC Address Formats](#invalid-mac-address-formats)
5. [Feedback](#feedback)
6. [Tested on](#tested-on)
## Overview
This extension helps to quickly move endpoints to new endpoint identity groups in Cisco ISE deployments. 

Commonly, when operating a Cisco ISE deployment, I found myself staring at lines of events in the RADIUS Live Logs. I'd see an endpoint authentication come along that simply needed to be added to a particular endpoint identity group in order to successfully authenticate. Unfortunately, actually doing that simple task was quite burdensome in the ISE web interface. You would need to copy the MAC address, go to the Endpoint database (or Context Visibility), filter by the MAC address, open the endpoint, click edit, check "Static Group Assignment" and select the group you wanted to put it in. Generally speaking, this took a couple of minutes per endpoint. You could get faster by keeping a couple tabs open, and getting a good rhythm, but it just isn't efficient. 

For the love of god, I just wanted to be able to right click on a MAC address and say "add to identity group XYZ"! Well, this extension does just that. You highlight a MAC address, right click to present a list of Endpoint Identity Groups, and select the one you want. It fires off some API calls and it's done! You get a nice little notification stating as much after it's done!

The ability to perform change of authorization (CoA) requests is now supported. You can perform CoA with session rerun, port bounce, and port shutdown. You can do this for single or bulk MAC addresses.

## Browser Support
While this extension was initially built to be used with Google Chrome, I came to notice that Firefox supports most of the needed `chrome` namespace functionality in their own APIs. So, as of v0.4, the extension runs well in both Google Chrome and Mozilla Firefox. 

**Note**: the main difference for Firefox is its lack of support for the progress type notification (see #22). For this reason, bulk updates in Fierfox have to use a series of `basic` type notifications which are not as visually pleasing as they appear to flash due to the rapid change in status; however, this was the best way I saw to implement it. The final "Done!" notification is most noticeable as it persists for a few seconds at the end of the update operation. 
## How to Install
### Google Chrome
For the official release, you can download the [ISE Assistant from the Chrome Web Store](https://chrome.google.com/webstore/detail/bgcgpgjpecloagakaainoamfaedknpol). Updates will be provided via the Chrome Web Store. 

To run anything outside of the `master` branch, it will have to be loaded as an "unpacked extension" (at your own risk). To do so:

1. Clone this repo: `git clone https://github.com/rnwolfe/ise-extension-chrome.git`
2. Checkout the desired branch: `git checkout <desired_branch>`
3. Go to `chrome://extensions` in your Chrome browser address bar. 
4. Enable **Developer Mode**. 
5. Click **Load unpacked extension**
6. Select the folder the repository was cloned into.

### Mozilla Firefox
For the official release, you can download the [ISE Assistant from the Add-ons site](https://addons.mozilla.org/en-US/firefox/addon/ise-assistant/). Updates will be provided via Firefox Add-ons.

To run anything outside of the `master` branch, it will have to be loaded in developer mode (at your own risk):

1. Clone this repo: `git clone https://github.com/rnwolfe/ise-extension-chrome.git`
2. Go to `about:debugging#addons` in Firefox
3. Check "Enable add-on debugging" 
4. Click **Load Temporary Add-On**
5. Select a file from the cloned directory.
## Setting up
### Enable ISE ERS API
In order to operate, the extension uses the ISE External RESTful Services API. By default, this needs to be enabled in Cisco ISE.

1. Navigate to **Administration > System: Settings** in the Cisco ISE interface.
2. Go to **ERS Settings** in the sidebar. 
3. Set **ERS Setting for Administration Node** to **Enable ERS for Read/Write**.

**Note**: CSRF check is not supported for this extension as it maintains compatability with older versions of ISE than 2.3. Leave that setting disabled to use this extension.

### Setup the Extension
Once installed, simply click on the icon now present in your browser and a settings pane will come up. Fill out the settings for your ISE server, and click Save.

After saving, the extension will reload and build the context menus from your deployment's identity groups.

Select some text and right click to confirm the that the context menu exists with the expected groups in it.

## How to Use
To use, simply highlight a MAC address, right click and go to "Add to Identity Group.." and select the desired identity group. You also have the ability to perform CoAs with supported types being session rerun, port bounce, and port shutdown.

The context menu will appear only when text is selected. It should work on any webpage, tab, etc. as long as it is within the Chrome Browser. Even text files opened in Chrome will work. 

### Refresh Identity Group List
The identity groups listed in the context menu are pulled from ISE when you open Chrome. 

If you need to refresh the menu, you can click on the extension button and click save on the settings window. This will restart the extension, refreshing the menu. You can also restart Chrome entirely to refresh the list. 

### Support for Bulk MAC Address Handling
As of version 0.3, the extension supports handling of bulk endpoint move operations. This ultimately means that you can select a large blob of text (e.g. a page in the live logs) and it will ignore non-MAC address text. This is a very useful tool when performing bulk actions. 

Unfortunately, due to limitations of the BULK Operations function in the ISE ERS API, these are done as individual calls; however, since they run asynchronously, they are completed quickly. A progress bar will be displayed to give status of the bulk move.

I tested with up to 1096 endpoints in a single bulk move. The total operations took right at 10 minutes, and had 4 failures (0.36%) due to the server being "inaccessible" which may have been more of an overloading the API issue. At this time, no report of success vs failure is provided outside of a generic failure alert; however, this will likely be added in a future version.

### Valid MAC Address Formats
You will receive an error if the text you selected is not a valid MAC address.
```
// all valid
AA11.BB22.CC33
aa11.bb22.cc33
AA-BB-CC-11-22-33
aa-bb-cc-11-22-33
AA:BB:CC:11:22:33
aa:bb:cc:11:22:33

// whitespace will be stripped automatically to help with accidental selections
 aa:bb:cc:11:22:33
  aabb.cc11.2233
```
### Invalid MAC Address Formats
Basically anything else.
## Feedback
While I create issues for enhancements, todos, etc, I want to add more functionality to this extension over time. Please open an issue for anything you'd like to see this extension do!

## Tested on
As of this commit, I have only tested this using:

- Windows 10 
- macOS 10.13.6
- Google Chrome Version 67.0.3396.99
- Firefox Quantum 61.0.1 (64-bit)
- Cisco ISE 2.4 

As this uses the Chrome Extension API, there should be no reason it doesn't work on other operating systems. Additionally, I don't believe there are significant API changes that would prevent this from working on any ISE 2.x version, I can't confirm it will work at this time. 

I will update as I test on further systems.
