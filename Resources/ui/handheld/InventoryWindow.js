function InventoryWindow(title) {
  var InventoryWindowStyles = require("ui/styles/InventoryWindowStyles");
  var styles = new InventoryWindowStyles();
  
  var ItemWindow = require("ui/handheld/ItemWindow");
  
	var self = Ti.UI.createWindow({
		title:title,
		backgroundColor:"white"
	});
	
	/*
	var search = Ti.UI.createSearchBar({
    showCancel: false,
    height: 44,
    width: 260,
    top: 0
  });
  
	self.setTitleControl(search);
	*/
	
	var listToggleButton = Titanium.UI.createButton({
		title: "List"
  });
  
	self.setRightNavButton(listToggleButton);
	
/*	
	// create table view data object
	var data = [
		{title:"Slider", hasChild:true, test:"ui/common/controls/slider"},
		{title:"Switch", hasChild:true, test:"ui/common/controls/switch"},
		{title:"Activity Indicator", hasChild:true, test:"ui/common/controls/activity_indicator"},
		{title:"Progress Bar", hasChild:true, test:"ui/common/controls/progress_bar"},
		{title:"Button", hasChild:true, test:"ui/common/controls/button"},
		{title:"Label", hasChild:true, test:"ui/common/controls/label"},
		{title:"Text Field", hasChild:true, test:"ui/common/controls/textfield"},
		{title:"Text Area", hasChild:true, test:"ui/common/controls/textarea"}
	];
	
	if (Ti.Platform.osname !== "mobileweb") {
		data.push({title:"Button States", hasChild:true, test:"ui/common/controls/button_state"});
		data.push({title:"Search Bar", hasChild:true, test:"ui/common/controls/searchbar"});
		data.push({title:"Picker", hasChild:true, test:"ui/common/controls/picker"});
	}
	
	// add iphone specific tests
	if (Titanium.Platform.name == "iPhone OS") {
		data.push({title:"Button Bar", hasChild:true, test:"ui/handheld/ios/controls/buttonbar"});
		data.push({title:"Tabbed Bar", hasChild:true, test:"ui/handheld/ios/controls/tabbedbar"});
		data.push({title:"System Buttons", hasChild:true, test:"ui/handheld/ios/controls/system_buttons"});
		data.push({title:"Toolbar", hasChild:true, test:"ui/handheld/ios/controls/toolbar"});
	}
*/
  var data = [];
  var testImage = "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTlhc34yq75661abqhBAleSexZPLJ5qUJkx5KoGfbYnPSoPc4b9";
  var testTitle = "Your item's title";
  var testPrice = "150";
  var testDescription = "The quick brown fox jumps over the lazy dog";
  var testStatus = "sold";
  
  //var testItemData = {id: itemId, image: testImage, title: testTitle, price: testPrice, status: testStatus};
	var input = [
    {id: 1, image: testImage, title: testTitle + " 1", price: testPrice, status: testStatus, description: testDescription},
    {id: 2, image: testImage, title: testTitle + " 2", price: testPrice, status: testStatus, description: testDescription},
    {id: 3, image: testImage, title: testTitle + " 3", price: testPrice, status: testStatus, description: testDescription},
    {id: 4, image: testImage, title: testTitle + " 4", price: testPrice, status: testStatus, description: testDescription},
    {id: 5, image: testImage, title: testTitle + " 5", price: testPrice, status: testStatus, description: testDescription},
    {id: 6, image: testImage, title: testTitle + " 6", price: testPrice, status: testStatus, description: testDescription},
    {id: 7, image: testImage, title: testTitle + " 7", price: testPrice, status: testStatus, description: testDescription},
    {id: 8, image: testImage, title: testTitle + " 8", price: testPrice, status: testStatus, description: testDescription},
    {id: 9, image: testImage, title: testTitle + " 9", price: testPrice, status: testStatus, description: testDescription},
    {id: 10, image: testImage, title: testTitle + " 10", price: testPrice, status: testStatus, description: testDescription},
	];
	
	// create top view
	var topView = Ti.UI.createView(styles.topView());
	// labels on top view
	var itemViewButton = Ti.UI.createButton(styles.itemViewButton());
	itemViewButton.title = "Items";
	
	var serviceViewButton = Ti.UI.createButton(styles.serviceViewButton());
	serviceViewButton.title = "Services";
	
	// add labels to top view
	topView.add(itemViewButton);
	topView.add(serviceViewButton);
	
	// create table view
	var tableView = buildTableView(input);
	
	
	// add top view to window
  self.add(topView);
	// add table view to the window
	self.add(tableView);
	
	function buildTableView(input, listView) {
		if (typeof listView === "undefined") listView = false;
		
		var data = [];
		if (listView) {
			for (var i = 0; i < input.length; i ++) {
	    	var row = buildListRow(input[i]);
	    	data.push(row);
			}
		} else {
			for (var i = 0; i < input.length; i += 3) {
	    	var row = buildImageRow([input[i], input[i+1], input[i+2]]);
	    	data.push(row);
			}
		}
		var _tableView = Ti.UI.createTableView(styles.tableView());
		_tableView.data = data;
		
		return _tableView;
	}
	
  function buildImageRow(rawData) {
    var row = Ti.UI.createTableViewRow(styles.row());
    
    for (var i = 0; i < rawData.length; i++) {
    	
    	if (rawData[i] == null) continue;
    	
    	var _buttonStyle = null;
    	if (i == 0) {
    		_buttonStyle = styles.leftView();
    	} else if (i == 1) {
    		_buttonStyle = styles.detailView();
    	} else {
    		_buttonStyle = styles.rightView();
    	}
	    var _imageButton = Ti.UI.createButton(_buttonStyle);
	    _imageButton.image = rawData[i].image;
	    _imageButton.data = rawData[i];
	    _imageButton.addEventListener("click", function() {
	      openItemWindow(this.data)
	    });
	    
	    row.add(_imageButton);
    }
    
    function openItemWindow(data){
    	var itemWindow = new ItemWindow(data);
      self.containingTab.open(itemWindow);
    }
		
    return row;
  }
  
	return self;
};

module.exports = InventoryWindow;
