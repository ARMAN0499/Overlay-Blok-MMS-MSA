var size = 0;
var placement = 'point';

var style_GISMMPIntersectionArea_4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "10.4px \'Arial\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "#fafafa";
    var bufferWidth = 3.0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("\"ID\" ||  '\n'  ||  \"Luasan\" ") !== null) {
        labelText = String(feature.get("\"ID\" ||  '\n'  ||  \"Luasan\" "));
    }
    var style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(15,130,243,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
