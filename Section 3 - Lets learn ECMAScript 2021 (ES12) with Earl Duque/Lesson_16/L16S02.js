//
// L16S02 - Computed property names
//

var propName = 'status';
var serviceNowObject = {
  ['is' + propName.charAt(0).toUpperCase() + propName.slice(1)]: true,  // Computed property name
  checkStatus() {
    gs.info('Status is: ' + this.isStatus);
  }
};

serviceNowObject.checkStatus(); // Outputs: Status is: true
