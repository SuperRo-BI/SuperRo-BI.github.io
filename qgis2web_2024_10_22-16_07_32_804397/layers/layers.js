var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_CCAA_SCG_3857_1 = new ol.format.GeoJSON();
var features_CCAA_SCG_3857_1 = format_CCAA_SCG_3857_1.readFeatures(json_CCAA_SCG_3857_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CCAA_SCG_3857_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CCAA_SCG_3857_1.addFeatures(features_CCAA_SCG_3857_1);
var lyr_CCAA_SCG_3857_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CCAA_SCG_3857_1, 
                style: style_CCAA_SCG_3857_1,
                popuplayertitle: "CCAA_SCG_3857",
                interactive: true,
                title: '<img src="styles/legend/CCAA_SCG_3857_1.png" /> CCAA_SCG_3857'
            });
var format_PARQ_NAC_3857_2 = new ol.format.GeoJSON();
var features_PARQ_NAC_3857_2 = format_PARQ_NAC_3857_2.readFeatures(json_PARQ_NAC_3857_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PARQ_NAC_3857_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARQ_NAC_3857_2.addFeatures(features_PARQ_NAC_3857_2);
var lyr_PARQ_NAC_3857_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PARQ_NAC_3857_2, 
                style: style_PARQ_NAC_3857_2,
                popuplayertitle: "PARQ_NAC_3857",
                interactive: true,
                title: '<img src="styles/legend/PARQ_NAC_3857_2.png" /> PARQ_NAC_3857'
            });
var format_RIOS_3857_3 = new ol.format.GeoJSON();
var features_RIOS_3857_3 = format_RIOS_3857_3.readFeatures(json_RIOS_3857_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RIOS_3857_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RIOS_3857_3.addFeatures(features_RIOS_3857_3);
var lyr_RIOS_3857_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RIOS_3857_3, 
                style: style_RIOS_3857_3,
                popuplayertitle: "RIOS_3857",
                interactive: true,
                title: '<img src="styles/legend/RIOS_3857_3.png" /> RIOS_3857'
            });

lyr_OSMStandard_0.setVisible(true);lyr_CCAA_SCG_3857_1.setVisible(true);lyr_PARQ_NAC_3857_2.setVisible(true);lyr_RIOS_3857_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_CCAA_SCG_3857_1,lyr_PARQ_NAC_3857_2,lyr_RIOS_3857_3];
lyr_CCAA_SCG_3857_1.set('fieldAliases', {'ID': 'ID', 'TIPO_0101': 'TIPO_0101', 'CODIGO_INE': 'CODIGO_INE', 'ETIQUETA': 'ETIQUETA', 'COD_INE': 'COD_INE', 'TOT_FOR': 'TOT_FOR', 'ARB': 'ARB', 'NO_ARB': 'NO_ARB', });
lyr_PARQ_NAC_3857_2.set('fieldAliases', {'ENP_ID': 'ENP_ID', 'NOMBRE': 'NOMBRE', 'CCAA': 'CCAA', 'FIGURA': 'FIGURA', 'HECTARES': 'HECTARES', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'Image': 'Photo', });
lyr_RIOS_3857_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Texto': 'Texto', 'Longitud': 'Longitud', 'Categoria': 'Categoria', 'Imagen': 'Imagen', 'Shape_Leng': 'Shape_Leng', });
lyr_CCAA_SCG_3857_1.set('fieldImages', {'ID': 'TextEdit', 'TIPO_0101': 'TextEdit', 'CODIGO_INE': 'TextEdit', 'ETIQUETA': 'TextEdit', 'COD_INE': 'Range', 'TOT_FOR': 'TextEdit', 'ARB': 'TextEdit', 'NO_ARB': 'TextEdit', });
lyr_PARQ_NAC_3857_2.set('fieldImages', {'ENP_ID': 'TextEdit', 'NOMBRE': 'TextEdit', 'CCAA': 'TextEdit', 'FIGURA': 'TextEdit', 'HECTARES': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'Image': 'ExternalResource', });
lyr_RIOS_3857_3.set('fieldImages', {'OBJECTID': '', 'Texto': '', 'Longitud': '', 'Categoria': '', 'Imagen': '', 'Shape_Leng': '', });
lyr_CCAA_SCG_3857_1.set('fieldLabels', {'ID': 'no label', 'TIPO_0101': 'no label', 'CODIGO_INE': 'header label - always visible', 'ETIQUETA': 'no label', 'COD_INE': 'no label', 'TOT_FOR': 'no label', 'ARB': 'no label', 'NO_ARB': 'no label', });
lyr_PARQ_NAC_3857_2.set('fieldLabels', {'ENP_ID': 'no label', 'NOMBRE': 'header label - visible with data', 'CCAA': 'inline label - always visible', 'FIGURA': 'no label', 'HECTARES': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'Image': 'header label - visible with data', });
lyr_RIOS_3857_3.set('fieldLabels', {'OBJECTID': 'no label', 'Texto': 'header label - always visible', 'Longitud': 'no label', 'Categoria': 'no label', 'Imagen': 'inline label - visible with data', 'Shape_Leng': 'no label', });
lyr_RIOS_3857_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});