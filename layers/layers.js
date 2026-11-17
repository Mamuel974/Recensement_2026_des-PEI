ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:2975").setExtent([333602.524917, 7636319.264080, 357122.524918, 7649410.424859]);
var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_commune_2 = new ol.format.GeoJSON();
var features_commune_2 = format_commune_2.readFeatures(json_commune_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2975'});
var jsonSource_commune_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_commune_2.addFeatures(features_commune_2);
var lyr_commune_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_commune_2, 
                style: style_commune_2,
                popuplayertitle: 'commune',
                interactive: false,
                title: '<img src="styles/legend/commune_2.png" /> commune'
            });
var format_RendurecensementPEI2026_3 = new ol.format.GeoJSON();
var features_RendurecensementPEI2026_3 = format_RendurecensementPEI2026_3.readFeatures(json_RendurecensementPEI2026_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2975'});
var jsonSource_RendurecensementPEI2026_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RendurecensementPEI2026_3.addFeatures(features_RendurecensementPEI2026_3);
var lyr_RendurecensementPEI2026_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RendurecensementPEI2026_3, 
                style: style_RendurecensementPEI2026_3,
                popuplayertitle: 'Rendu  recensement PEI 2026 ',
                interactive: true,
                title: '<img src="styles/legend/RendurecensementPEI2026_3.png" /> Rendu  recensement PEI 2026 '
            });

lyr_ESRISatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_commune_2.setVisible(true);lyr_RendurecensementPEI2026_3.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_OSMStandard_1,lyr_commune_2,lyr_RendurecensementPEI2026_3];
lyr_commune_2.set('fieldAliases', {'ID': 'ID', 'PREC_PLANI': 'PREC_PLANI', 'NOM': 'NOM', 'CODE_INSEE': 'CODE_INSEE', 'STATUT': 'STATUT', 'CANTON': 'CANTON', 'ARRONDISST': 'ARRONDISST', 'DEPART': 'DEPART', 'REGION': 'REGION', 'POPUL': 'POPUL', 'MULTICAN': 'MULTICAN', });
lyr_RendurecensementPEI2026_3.set('fieldAliases', {'WKT': 'WKT', 'Numero': 'Numero', 'Date': 'Date', 'Heure': 'Heure', 'Lieu': 'Lieu', 'Intervenan': 'Intervenan', 'Anomalie_1': 'Anomalie_1', 'Anomalie_2': 'Anomalie_2', 'Anomalie_3': 'Anomalie_3', 'Anomalie_5': 'Anomalie_5', 'Destinat_1': 'Destinat_1', 'Destinat_2': 'Destinat_2', 'Destinat_3': 'Destinat_3', 'Info_compl': 'Info_compl', 'x': 'x', 'y': 'y', 'Logo_servi': 'Logo_servi', 'Logo_Mairi': 'Logo_Mairi', 'Photo_1': 'Photo_1', 'Photo_2': 'Photo_2', });
lyr_commune_2.set('fieldImages', {'ID': 'TextEdit', 'PREC_PLANI': 'TextEdit', 'NOM': 'TextEdit', 'CODE_INSEE': 'TextEdit', 'STATUT': 'TextEdit', 'CANTON': 'TextEdit', 'ARRONDISST': 'TextEdit', 'DEPART': 'TextEdit', 'REGION': 'TextEdit', 'POPUL': 'Range', 'MULTICAN': 'TextEdit', });
lyr_RendurecensementPEI2026_3.set('fieldImages', {'WKT': 'TextEdit', 'Numero': 'TextEdit', 'Date': 'TextEdit', 'Heure': 'TextEdit', 'Lieu': 'TextEdit', 'Intervenan': 'TextEdit', 'Anomalie_1': 'TextEdit', 'Anomalie_2': 'TextEdit', 'Anomalie_3': 'TextEdit', 'Anomalie_5': 'TextEdit', 'Destinat_1': 'TextEdit', 'Destinat_2': 'TextEdit', 'Destinat_3': 'TextEdit', 'Info_compl': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Logo_servi': 'TextEdit', 'Logo_Mairi': 'TextEdit', 'Photo_1': 'ExternalResource', 'Photo_2': 'ExternalResource', });
lyr_commune_2.set('fieldLabels', {'ID': 'hidden field', 'PREC_PLANI': 'hidden field', 'NOM': 'inline label - visible with data', 'CODE_INSEE': 'inline label - visible with data', 'STATUT': 'hidden field', 'CANTON': 'hidden field', 'ARRONDISST': 'hidden field', 'DEPART': 'hidden field', 'REGION': 'hidden field', 'POPUL': 'hidden field', 'MULTICAN': 'hidden field', });
lyr_RendurecensementPEI2026_3.set('fieldLabels', {'WKT': 'hidden field', 'Numero': 'inline label - visible with data', 'Date': 'inline label - visible with data', 'Heure': 'inline label - visible with data', 'Lieu': 'inline label - visible with data', 'Intervenan': 'hidden field', 'Anomalie_1': 'inline label - visible with data', 'Anomalie_2': 'inline label - visible with data', 'Anomalie_3': 'inline label - visible with data', 'Anomalie_5': 'inline label - visible with data', 'Destinat_1': 'inline label - visible with data', 'Destinat_2': 'inline label - visible with data', 'Destinat_3': 'inline label - visible with data', 'Info_compl': 'inline label - visible with data', 'x': 'inline label - visible with data', 'y': 'inline label - visible with data', 'Logo_servi': 'hidden field', 'Logo_Mairi': 'hidden field', 'Photo_1': 'inline label - always visible', 'Photo_2': 'inline label - always visible', });
lyr_RendurecensementPEI2026_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});