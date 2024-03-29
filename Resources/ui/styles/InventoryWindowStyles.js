function InventoryWindowStyles() {
  this.topViewHeight = 30;
  this.topViewWidth = 320;
  
  this.galleryImagePadding = 5;
  this.galleryImageWidth = (Ti.Platform.displayCaps.platformWidth - this.galleryImagePadding) / 3 - this.galleryImagePadding;
  this.galleryImageHeight = this.galleryImageWidth; //square
  
  this.rowHeight = this.galleryImageHeight + this.galleryImagePadding;
  
  this.borderColor = "#777";
  this.mainBodyBackgroundColor = "#BBB"
  return this;
};

InventoryWindowStyles.prototype.detailView = function() {
  return {
    width: this.galleryImageWidth, 
    height: this.galleryImageHeight, 
    left: this.galleryImageWidth + this.galleryImagePadding * 2, 
    top: this.galleryImagePadding,
    borderColor: this.borderColor,
    borderWidth: 1
  }
}

InventoryWindowStyles.prototype.leftView = function() {
  return {
    width: this.galleryImageWidth, 
    height: this.galleryImageHeight,
    left: this.galleryImagePadding,
    top: this.galleryImagePadding,
    borderColor: this.borderColor,
    borderWidth: 1
  }
}

InventoryWindowStyles.prototype.rightView = function() {
  return {
    width: this.galleryImageWidth, 
    height: this.galleryImageHeight,
    right: this.galleryImagePadding,
    top: this.galleryImagePadding,
    borderColor: this.borderColor,
    borderWidth: 1
  }
}

InventoryWindowStyles.prototype.leftImageView = function() {
  return { 
    width: this.leftViewWidth, 
    height: this.leftViewWidth, 
    left: 0, 
    top: 0
  }
}

InventoryWindowStyles.prototype.priceLabel = function() {
  return {
    height:"auto", 
    width:"auto",
    color:"#000", 
    font:{fontSize:14},
    top: this.leftViewWidth,
    left: 10,
    top: 32,
    textAlign:"center" 
  }
}

InventoryWindowStyles.prototype.titleLabel = function() {
  return { 
    height:"auto", 
    width:"auto", 
    color:"#000", 
    font:{fontSize:14},
    left: 10,
    top: 8,
    textAlign:"center"
  }
}

InventoryWindowStyles.prototype.sellButton = function() {
  return {
    title: "Sell",
    width: this.rightViewWidth - 10,
    height: this.rowHeight / 2
  }
}

InventoryWindowStyles.prototype.row = function() {
  return {
    height: this.rowHeight,
    selectedBackgroundColor: "transparent"
  }
}

InventoryWindowStyles.prototype.tableView = function() {
  return {
  	backgroundColor: this.mainBodyBackgroundColor,
    top: this.topViewHeight,
    separatorColor: "transparent"
  }
}
  
InventoryWindowStyles.prototype.topView = function() {
  return {
    backgroundColor: "#CCC",
    width: this.topViewWidth,
    height: this.topViewHeight,
    top: 0 
  }
};

InventoryWindowStyles.prototype.itemViewButton = function() {
  return {
    color: "#333",
    width: this.topViewWidth / 2,
    height: this.topViewHeight,
    textAlign: "center",
    left: 0,
    style:Titanium.UI.iPhone.SystemButtonStyle.PLAIN
  }  
}

InventoryWindowStyles.prototype.serviceViewButton = function() {
  return {
    color: "#333",
    width: this.topViewWidth / 2,
    height: this.topViewHeight,
    textAlign: "center",
    right: 0,
    style:Titanium.UI.iPhone.SystemButtonStyle.PLAIN
  }
}

module.exports = InventoryWindowStyles;