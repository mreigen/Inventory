function ControlsWindow(title) {
	var self = Ti.UI.createWindow({
		title:title,
		backgroundColor:'white'
	});
/*	
	// create table view data object
	var data = [
		{title:'Slider', hasChild:true, test:'ui/common/controls/slider'},
		{title:'Switch', hasChild:true, test:'ui/common/controls/switch'},
		{title:'Activity Indicator', hasChild:true, test:'ui/common/controls/activity_indicator'},
		{title:'Progress Bar', hasChild:true, test:'ui/common/controls/progress_bar'},
		{title:'Button', hasChild:true, test:'ui/common/controls/button'},
		{title:'Label', hasChild:true, test:'ui/common/controls/label'},
		{title:'Text Field', hasChild:true, test:'ui/common/controls/textfield'},
		{title:'Text Area', hasChild:true, test:'ui/common/controls/textarea'}
	];
	
	if (Ti.Platform.osname !== 'mobileweb') {
		data.push({title:'Button States', hasChild:true, test:'ui/common/controls/button_state'});
		data.push({title:'Search Bar', hasChild:true, test:'ui/common/controls/searchbar'});
		data.push({title:'Picker', hasChild:true, test:'ui/common/controls/picker'});
	}
	
	// add iphone specific tests
	if (Titanium.Platform.name == 'iPhone OS') {
		data.push({title:'Button Bar', hasChild:true, test:'ui/handheld/ios/controls/buttonbar'});
		data.push({title:'Tabbed Bar', hasChild:true, test:'ui/handheld/ios/controls/tabbedbar'});
		data.push({title:'System Buttons', hasChild:true, test:'ui/handheld/ios/controls/system_buttons'});
		data.push({title:'Toolbar', hasChild:true, test:'ui/handheld/ios/controls/toolbar'});
	}
*/
  var data = [];
  var testImage = "https://fbcdn-creative-a.akamaihd.net/ads-ak-snc7/s110x80/v565063/flyers/112/63/13436905681963487944_1_64666224.jpg"; //"/images/flower.jpg";
  var testTitle = "Your item's title";
  var testPrice = "150";
  var testStatus = "sold";
  
  //var testItemData = {id: itemId, image: testImage, title: testTitle, price: testPrice, status: testStatus};
	var input = [
    {id: 1, image: testImage, title: testTitle + " 1", price: testPrice, status: testStatus},
    {id: 2, image: testImage, title: testTitle + " 2", price: testPrice, status: testStatus},
    {id: 3, image: testImage, title: testTitle + " 3", price: testPrice, status: testStatus},
    {id: 4, image: testImage, title: testTitle + " 4", price: testPrice, status: testStatus},
    {id: 5, image: testImage, title: testTitle + " 5", price: testPrice, status: testStatus},
    {id: 6, image: testImage, title: testTitle + " 6", price: testPrice, status: testStatus},
    {id: 7, image: testImage, title: testTitle + " 7", price: testPrice, status: testStatus},
    {id: 8, image: testImage, title: testTitle + " 8", price: testPrice, status: testStatus},
    {id: 9, image: testImage, title: testTitle + " 9", price: testPrice, status: testStatus},
    {id: 10, image: testImage, title: testTitle + " 10", price: testPrice, status: testStatus},
	];	
  	
	var rowHeight = 70;
	var leftViewWidth = 70;
	var detailViewWidth = 170;
	var rightViewWidth = 80;
	
	for (var i = 0; i < input.length; i++) {
    var row = buildRow(input[i], 
                      {
                        rowHeight: rowHeight, 
                        leftViewWidth: leftViewWidth,
                        detailViewWidth: detailViewWidth
                      });
    data.push(row);  
	}
	
	// create table view
	for (var i = 0; i < data.length; i++ ) { data[i].color = '#000'; data[i].font = {fontWeight:'bold'} };
	var tableview = Ti.UI.createTableView({
		data:data
	});
	
	// create table view event listener
	tableview.addEventListener('click', function(e) {
		if (e.rowData.test) {
			var ExampleWindow = require(e.rowData.test),
				win = new ExampleWindow({
					title:e.rowData.title,
					containingTab:self.containingTab,
					tabGroup:self.tabGroup
				});
			self.containingTab.open(win,{animated:true});
		}
	});
	
	// add table view to the window
	self.add(tableview);
	
  function buildRow(rawData, options) {
    var rowHeight = options["rowHeight"];
    var leftViewWidth = options["leftViewWidth"];
    var detailViewWidth = options["detailViewWidth"];
    
    var row = Ti.UI.createTableViewRow({
      height: rowHeight
    });
    
    var _detailView = Ti.UI.createView({
                                        width: detailViewWidth, 
                                        height: rowHeight, 
                                        left: leftViewWidth, 
                                        top: 0
                                       });
    
    var _leftView = Ti.UI.createView({
                                      width: leftViewWidth, 
                                      height: rowHeight, 
                                      left: 0
                                     });
    
    var _rightView = Ti.UI.createView({
                                  width: rightViewWidth, 
                                  height: rowHeight, 
                                  right: 0
                                 });
    
    var _leftImageView = Ti.UI.createImageView({ 
                                                width: leftViewWidth, 
                                                height: leftViewWidth, 
                                                left: 0, 
                                                top: 0, 
                                                image: testImage
                                               });
    
    var priceLabel = Ti.UI.createLabel({ 
      text: "$" + rawData.price, 
      height:'auto', 
      width:'auto',
      color:'#000', 
      font:{fontSize:14},
      top: leftViewWidth,
      left: 10,
      top: 32,
      textAlign:'center' });

    var titleLabel = Ti.UI.createLabel({ 
      text: rawData.title, 
      height:'auto', 
      width:'auto', 
      color:'#000', 
      font:{fontSize:14},
      left: 10,
      top: 8,
      textAlign:'center' });
    
    var sellButton = Ti.UI.createButton({
      title: "Sell",
      width: rightViewWidth - 10,
      height: rowHeight / 2
    });
    
    // detail view in the middle
    _detailView.add(titleLabel);          
    _detailView.add(priceLabel);
    // left view
    _leftView.add(_leftImageView);
    // right view
    _rightView.add(sellButton);
    
    //
    // adding events
    //
    // for sell button
    sellButton.addEventListener("click", function() {
      alert("sending AJAX request to item with id = " + rawData.id);  
    });
    // for _detailView
    _detailView.addEventListener("click", function() {
      openItemWindow(rawData);
    });
    // also for left view
    _leftView.addEventListener("click", function() {
      openItemWindow(rawData);
    });
    
    function openItemWindow(rawData){
      self.containingTab.open(Ti.UI.createWindow({
        title: L('Item ' + rawData.id),
        backgroundColor: 'white'
      }));
    }
    
    row.add(_leftView);
    row.add(_rightView);
    row.add(_detailView);
    return row;
  }
  
	return self;
};

module.exports = ControlsWindow;
