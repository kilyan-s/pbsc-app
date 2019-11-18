///DEVICE SIZE & SCREEN DENSITY
Ti.App.WIDTH   = Ti.Platform.displayCaps.platformWidth;
Ti.App.HEIGHT  = Ti.Platform.displayCaps.platformHeight;
Ti.App.DENSITY = Ti.Platform.displayCaps.logicalDensityFactor;


////DEVICE RESOLUTION
Ti.App.IPHONE4     = (Ti.App.WIDTH == 320 && Ti.App.HEIGHT == 480) ? true : false;
Ti.App.IPHONE_SE   = (Ti.App.WIDTH == 320 && Ti.App.HEIGHT == 568) ? true : false;
Ti.App.IPHONE      = (Ti.App.WIDTH == 375 && Ti.App.HEIGHT == 667) ? true : false;
Ti.App.IPHONE_PLUS = (Ti.App.WIDTH == 414 && Ti.App.HEIGHT == 736) ? true : false;
Ti.App.IPHONE_X    = (Ti.App.WIDTH == 375 && Ti.App.HEIGHT == 812) ? true : false;
Ti.App.IPHONE_MAX  = (Ti.App.WIDTH == 414 && Ti.App.HEIGHT == 896) ? true : false;


/***** GLOBALS *****/
Ti.App.OSNAME                = Ti.Platform.osname,
Ti.App.IS_FULL_SCREEN        = (Ti.App.IPHONE_X || Ti.App.IPHONE_MAX) ? true : false;
Ti.App.STATUS_BAR_HEIGHT     = (Ti.App.IS_FULL_SCREEN) ? 44 : 20;
Ti.App.NAVBAR_CONTENT_HEIGHT = 44;
Ti.App.NAVBAR_HEIGHT         = Ti.App.STATUS_BAR_HEIGHT + Ti.App.NAVBAR_CONTENT_HEIGHT;

/***** PHONE LANGUAGE *****/
Ti.App.LANGUAGE = (Ti.Locale.currentLanguage == 'fr') ? "fr" : "en";

var forgotPwdWin = require("ui/forgotPassword").getWin();

///NAVIGATION CONTROLLER FOR IOS
Ti.App.NAV_CTRL = Ti.UI.createNavigationWindow({window:forgotPwdWin});
Ti.App.NAV_CTRL.open();
