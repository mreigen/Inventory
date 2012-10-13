function InventoryWindowStyles() {
  this.topViewHeight = 30;
  this.topViewWidth = 320;
  this.rowHeight = 70;
  this.leftViewWidth = 70;
  this.detailViewWidth = 170;
  this.rightViewWidth = 80;
  
  return this;
};

InventoryWindowStyles.prototype.detailView = function() {
  return {
    width: this.detailViewWidth, 
    height: this.rowHeight, 
    left: this.leftViewWidth, 
    top: 0
  }
}

InventoryWindowStyles.prototype.leftView = function() {
  return {
    width: this.leftViewWidth, 
    height: this.rowHeight, 
    left: 0
  }
}

InventoryWindowStyles.prototype.rightView = function() {
  return {
    width: this.rightViewWidth, 
    height: this.rowHeight, 
    right: 0
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
    height: this.rowHeight
  }
}

InventoryWindowStyles.prototype.tableView = function() {
  return {
    top: this.topViewHeight
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

InventoryWindowStyles.prototype.amountOwnedLabel = function() {
  return {
    color: "#333",
    width: this.topViewWidth / 2,
    height: this.topViewHeight,
    left: 20,
    textAlign: "center",
  }  
}

InventoryWindowStyles.prototype.amountGotBackLabel = function() {
  return {
    color: "#1C0C85",
    width: this.topViewWidth / 2,
    height: this.topViewHeight,
    right: 20,
    textAlign: "center",
  }
}

module.exports = InventoryWindowStyles;