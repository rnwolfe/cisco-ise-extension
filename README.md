# Cisco ISE Assistant
A Google Chrome extension to help perform common tasks in Cisco ISE.
## Overview
This extension helps to quickly move endpoints to new endpoint identity groups in Cisco ISE deployments. 

Commonly, when operating a Cisco ISE deployment, I found myself staring at lines of events in the RADIUS Live Logs. I'd see an endpoint authentication come along that simply needed to be added to a particular endpoint identity group in order to successfully authenticate. Unfortunately, actually doing that simple task was quite burdensome in the ISE web interface. You would need to copy the MAC address, go to the Endpoint database (or Context Visibility), filter by the MAC address, open the endpoint, click edit, check "Static Group Assignment" and select the group you wanted to put it in. Generally speaking, this took a couple of minutes per endpoint. You could get faster by keeping a couple tabs open, and getting a good rhythm, but it just isn't efficient. 

For the love of god, I just wanted to be able to right click on a MAC address and say "add to identity group XYZ"! Well, this extension does just that. You highlight a MAC address, right click to present a list of Endpoint Identity Groups, and select the one you want. It fires off some API calls and it's done! You get a nice little notification stating as much after it's done!

Eventually, I'd like to add more functionality to this extension, but, as of now, this is the initial need and only feature.
## How to install
Right now, this is in a purely development state and will have to be loaded as an "unpacked extension." To do so, clone this repository:

1. `git clone https://github.com/rnwolfe/ise-extension-chrome.git`
2. Go to `chrome://extensions` in your Chrome browser address bar. 
3. Enable developer mode. 
4. Click "Load unpacked extension"
5. Select the folder the repository was cloned into.

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

## Feedback
While I create issues for enhancements, todos, etc, I want to add more functionality to this extension over time. Please open an issue for anything you'd like to see this extension do!

## Tested on
As of this commit, I have only tested this using:

- Windows 10 
- Google Chrome Version 67.0.3396.99
- Cisco ISE 2.4 

As this uses the Chrome Extension API, there should be no reason it doesn't work on other operating systems. Additionally, I don't believe there are significant API changes that would prevent this from working on any ISE 2.x version, I can't confirm it will work at this time. 

I will update as I test on further systems.
