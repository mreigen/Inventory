function ItemWindow(data) {
  var ItemWindowStyles = require("ui/styles/ItemWindowStyles");
  var styles = new ItemWindowStyles();
  
	var self = Ti.UI.createWindow({
		title: data.title,
		backgroundColor: styles.backgroundColor
	});
	
	return self;
};

module.exports = ItemWindow;