/* Framework init object */
(function (global){
  var svgBox = {
      version: '0.0.1',
      desc: 'Micro framework for handling SVG path graphics'
    };

    if (global.svgBox) {
      console.warning ('svgBox is already initiated');
    } else {
      global.svgBox = svgBox;
    }
  }
)(typeof window === 'undefined' ? this : window);