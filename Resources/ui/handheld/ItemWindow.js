function ItemWindow(data) {
  var ItemWindowStyles = require("ui/styles/ItemWindowStyles");
  var styles = new ItemWindowStyles();
  
	var self = Ti.UI.createWindow({
		title: data.title,
		backgroundColor: styles.backgroundColor
	});
	
	var tableView = Ti.UI.createTableView({
		style: Ti.UI.iPhone.TableViewStyle.GROUPED	
	});
	
	var sectionData = [];
	/*
	 * title section starts
	 */
	var tvsTitle = Ti.UI.createTableViewSection();
	
	var rowTitle = Ti.UI.createTableViewRow();
	
	var titleLabel = Ti.UI.createLabel({
		height: 60,
		shadowColor:'#aaa',
    shadowOffset:{x:1,y:1},
    text: data.title
	})
	
	rowTitle.add(titleLabel);
	
	var rowPrice = Ti.UI.createTableViewRow({
		title: "$" + data.price
	});
	
	tvsTitle.add(rowTitle);
	tvsTitle.add(rowPrice);
	
	sectionData[0] = tvsTitle;
	/*
	 * title section ends
	 */
	
		/*
	 * image section starts
	 */
	var tvsImage = Ti.UI.createTableViewSection();
	
	var rowImage = Ti.UI.createTableViewRow();
	
	rowImage.add(Ti.UI.createImageView({
		image: data.image
	}));
	
	var rowDescription = Ti.UI.createTableViewRow();
	
	var descLabel = Ti.UI.createLabel({
		height: 150,
		text: data.description
	})
	rowDescription.add(descLabel);
	
	tvsImage.add(rowImage);
	tvsImage.add(rowDescription);
	
	sectionData[1] = tvsImage;
	/*
	 * image section ends
	 */
	
	tableView.data = sectionData;
	
	self.add(tableView);
	
	return self;
};

module.exports = ItemWindow;