var wms_layers = [];


        var lyr_BingSatellite_0 = new ol.layer.Tile({
            'title': 'Bing Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://ecn.t3.tiles.virtualearth.net/tiles/a{q}.jpeg?g=0&dir=dir_n''
            })
        });
var format_WiupPTMuliaMakmurPerkasa_1 = new ol.format.GeoJSON();
var features_WiupPTMuliaMakmurPerkasa_1 = format_WiupPTMuliaMakmurPerkasa_1.readFeatures(json_WiupPTMuliaMakmurPerkasa_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WiupPTMuliaMakmurPerkasa_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WiupPTMuliaMakmurPerkasa_1.addFeatures(features_WiupPTMuliaMakmurPerkasa_1);
var lyr_WiupPTMuliaMakmurPerkasa_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WiupPTMuliaMakmurPerkasa_1, 
                style: style_WiupPTMuliaMakmurPerkasa_1,
                popuplayertitle: 'Wiup PT Mulia Makmur Perkasa',
                interactive: true,
                title: '<img src="styles/legend/WiupPTMuliaMakmurPerkasa_1.png" /> Wiup PT Mulia Makmur Perkasa'
            });
var format_BlokMSAMMP_2 = new ol.format.GeoJSON();
var features_BlokMSAMMP_2 = format_BlokMSAMMP_2.readFeatures(json_BlokMSAMMP_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BlokMSAMMP_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BlokMSAMMP_2.addFeatures(features_BlokMSAMMP_2);
var lyr_BlokMSAMMP_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BlokMSAMMP_2, 
                style: style_BlokMSAMMP_2,
                popuplayertitle: 'Blok MSA - MMP',
                interactive: true,
                title: '<img src="styles/legend/BlokMSAMMP_2.png" /> Blok MSA - MMP'
            });
var format_Blok_qdr_rajawali_3 = new ol.format.GeoJSON();
var features_Blok_qdr_rajawali_3 = format_Blok_qdr_rajawali_3.readFeatures(json_Blok_qdr_rajawali_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Blok_qdr_rajawali_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Blok_qdr_rajawali_3.addFeatures(features_Blok_qdr_rajawali_3);
var lyr_Blok_qdr_rajawali_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Blok_qdr_rajawali_3, 
                style: style_Blok_qdr_rajawali_3,
                popuplayertitle: 'Blok_qdr_rajawali',
                interactive: true,
                title: '<img src="styles/legend/Blok_qdr_rajawali_3.png" /> Blok_qdr_rajawali'
            });
var format_GISMMPIntersectionArea_4 = new ol.format.GeoJSON();
var features_GISMMPIntersectionArea_4 = format_GISMMPIntersectionArea_4.readFeatures(json_GISMMPIntersectionArea_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GISMMPIntersectionArea_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GISMMPIntersectionArea_4.addFeatures(features_GISMMPIntersectionArea_4);
var lyr_GISMMPIntersectionArea_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GISMMPIntersectionArea_4, 
                style: style_GISMMPIntersectionArea_4,
                popuplayertitle: 'GIS MMP — Intersection Area',
                interactive: true,
                title: '<img src="styles/legend/GISMMPIntersectionArea_4.png" /> GIS MMP — Intersection Area'
            });
var format_GISMMPTitikTestPit_5 = new ol.format.GeoJSON();
var features_GISMMPTitikTestPit_5 = format_GISMMPTitikTestPit_5.readFeatures(json_GISMMPTitikTestPit_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GISMMPTitikTestPit_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GISMMPTitikTestPit_5.addFeatures(features_GISMMPTitikTestPit_5);
var lyr_GISMMPTitikTestPit_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GISMMPTitikTestPit_5, 
                style: style_GISMMPTitikTestPit_5,
                popuplayertitle: 'GIS MMP — Titik Test Pit',
                interactive: true,
                title: '<img src="styles/legend/GISMMPTitikTestPit_5.png" /> GIS MMP — Titik Test Pit'
            });

lyr_BingSatellite_0.setVisible(true);lyr_WiupPTMuliaMakmurPerkasa_1.setVisible(true);lyr_BlokMSAMMP_2.setVisible(true);lyr_Blok_qdr_rajawali_3.setVisible(true);lyr_GISMMPIntersectionArea_4.setVisible(true);lyr_GISMMPTitikTestPit_5.setVisible(true);
var layersList = [lyr_BingSatellite_0,lyr_WiupPTMuliaMakmurPerkasa_1,lyr_BlokMSAMMP_2,lyr_Blok_qdr_rajawali_3,lyr_GISMMPIntersectionArea_4,lyr_GISMMPTitikTestPit_5];
lyr_WiupPTMuliaMakmurPerkasa_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'Luas': 'Luas', 'Luasan': 'Luasan', });
lyr_BlokMSAMMP_2.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Remark': 'Remark', 'Luas': 'Luas', 'Luasan': 'Luasan', });
lyr_Blok_qdr_rajawali_3.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Remark': 'Remark', 'Luas': 'Luas', 'Luasan': 'Luasan', });
lyr_GISMMPIntersectionArea_4.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Remark': 'Remark', 'Luas': 'Luas', 'Luasan': 'Luasan', });
lyr_GISMMPTitikTestPit_5.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Remark': 'Remark', });
lyr_WiupPTMuliaMakmurPerkasa_1.set('fieldImages', {'fid': '', 'id': '', 'Name': '', 'Luas': '', 'Luasan': '', });
lyr_BlokMSAMMP_2.set('fieldImages', {'fid': '', 'ID': '', 'Remark': '', 'Luas': '', 'Luasan': '', });
lyr_Blok_qdr_rajawali_3.set('fieldImages', {'fid': '', 'ID': '', 'Remark': '', 'Luas': '', 'Luasan': '', });
lyr_GISMMPIntersectionArea_4.set('fieldImages', {'fid': '', 'ID': '', 'Remark': '', 'Luas': '', 'Luasan': '', });
lyr_GISMMPTitikTestPit_5.set('fieldImages', {'fid': '', 'ID': '', 'Remark': '', });
lyr_WiupPTMuliaMakmurPerkasa_1.set('fieldLabels', {'fid': 'hidden field', 'id': 'no label', 'Name': 'hidden field', 'Luas': 'hidden field', 'Luasan': 'no label', });
lyr_BlokMSAMMP_2.set('fieldLabels', {'fid': 'hidden field', 'ID': 'no label', 'Remark': 'hidden field', 'Luas': 'hidden field', 'Luasan': 'no label', });
lyr_Blok_qdr_rajawali_3.set('fieldLabels', {'fid': 'hidden field', 'ID': 'no label', 'Remark': 'hidden field', 'Luas': 'hidden field', 'Luasan': 'no label', });
lyr_GISMMPIntersectionArea_4.set('fieldLabels', {'fid': 'hidden field', 'ID': 'no label', 'Remark': 'hidden field', 'Luas': 'hidden field', 'Luasan': 'no label', });
lyr_GISMMPTitikTestPit_5.set('fieldLabels', {'fid': 'hidden field', 'ID': 'no label', 'Remark': 'hidden field', });
lyr_GISMMPTitikTestPit_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});