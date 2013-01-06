function ApplicationTabGroup(Window) {
	//create module instance
	var self = Ti.UI.createTabGroup();
	
	var InventoryWindow = require('ui/handheld/InventoryWindow');
	
	//create app tabs
	var win1 = new InventoryWindow(L('Barzit')),
		win2 = new Window(L('Add'));
	
	var tab1 = Ti.UI.createTab({
		title: L('Inventory'),
		icon: '/images/KS_nav_ui.png',
		window: win1
	});
	win1.containingTab = tab1;
	
	var tab2 = Ti.UI.createTab({
		title: L('History'),
		icon: '/images/KS_nav_views.png',
		window: win2
	});
	win2.containingTab = tab2;

	var tab3 = Ti.UI.createTab({
		title: L('Settings'),
		icon: '/images/KS_nav_views.png',
		window: win2
	});
	win2.containingTab = tab3;
		
	self.addTab(tab1);
	self.addTab(tab2);
	self.addTab(tab3);
	
	return self;
};

module.exports = ApplicationTabGroup;
