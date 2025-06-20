ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32718").setExtent([591025.450173, 5863028.912507, 777588.150187, 5962283.395039]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Proyecto_Final__1 = new ol.format.GeoJSON();
var features_Proyecto_Final__1 = format_Proyecto_Final__1.readFeatures(json_Proyecto_Final__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_Proyecto_Final__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Proyecto_Final__1.addFeatures(features_Proyecto_Final__1);
cluster_Proyecto_Final__1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Proyecto_Final__1
});
var lyr_Proyecto_Final__1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Proyecto_Final__1, 
                style: style_Proyecto_Final__1,
                popuplayertitle: 'Proyecto_Final_',
                interactive: true,
                title: '<img src="styles/legend/Proyecto_Final__1.png" /> Proyecto_Final_'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Proyecto_Final__1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Proyecto_Final__1];
lyr_Proyecto_Final__1.set('fieldAliases', {'Name': 'Name', 'Id': 'Id', 'Nombre': 'Nombre', 'Area': 'Area', 'hab_m2': 'hab_m2', 'Sum_Poblac': 'Sum_Poblac', 'av_hab': 'av_hab', 'Long_tLic': 'Long_tLic', 'Long_tNLic': 'Long_tNLic', 'Suma_Trans': 'Suma_Trans', 'porc_cober': 'porc_cober', 'Distance': 'Distance', 'LongcicloK': 'LongcicloK', 'Long_rvial': 'Long_rvial', 'CUT_REG': 'CUT_REG', 'CUT_PROV': 'CUT_PROV', 'CUT_COM': 'CUT_COM', 'REGION': 'REGION', 'PROVINCIA': 'PROVINCIA', 'COMUNA': 'COMUNA', 'SUPERFICIE': 'SUPERFICIE', 'Actividad': 'Actividad', 'Resumen': 'Resumen', 'Ubicación': 'Ubicación', 'Fec_Creac': 'Fec_Creac', 'Acceso': 'Acceso', 'Video': 'Video', });
lyr_Proyecto_Final__1.set('fieldImages', {'Name': 'TextEdit', 'Id': 'Range', 'Nombre': 'TextEdit', 'Area': 'TextEdit', 'hab_m2': 'TextEdit', 'Sum_Poblac': 'Range', 'av_hab': 'TextEdit', 'Long_tLic': 'TextEdit', 'Long_tNLic': 'TextEdit', 'Suma_Trans': 'TextEdit', 'porc_cober': 'TextEdit', 'Distance': 'TextEdit', 'LongcicloK': 'TextEdit', 'Long_rvial': 'TextEdit', 'CUT_REG': 'TextEdit', 'CUT_PROV': 'TextEdit', 'CUT_COM': 'TextEdit', 'REGION': 'TextEdit', 'PROVINCIA': 'TextEdit', 'COMUNA': 'TextEdit', 'SUPERFICIE': 'TextEdit', 'Actividad': 'TextEdit', 'Resumen': 'TextEdit', 'Ubicación': 'TextEdit', 'Fec_Creac': 'TextEdit', 'Acceso': 'TextEdit', 'Video': 'TextEdit', });
lyr_Proyecto_Final__1.set('fieldLabels', {'Name': 'inline label - always visible', 'Id': 'inline label - always visible', 'Nombre': 'inline label - always visible', 'Area': 'inline label - always visible', 'hab_m2': 'inline label - always visible', 'Sum_Poblac': 'inline label - always visible', 'av_hab': 'inline label - always visible', 'Long_tLic': 'inline label - always visible', 'Long_tNLic': 'inline label - always visible', 'Suma_Trans': 'inline label - always visible', 'porc_cober': 'inline label - always visible', 'Distance': 'inline label - always visible', 'LongcicloK': 'inline label - always visible', 'Long_rvial': 'inline label - always visible', 'CUT_REG': 'inline label - always visible', 'CUT_PROV': 'inline label - always visible', 'CUT_COM': 'inline label - always visible', 'REGION': 'inline label - always visible', 'PROVINCIA': 'inline label - always visible', 'COMUNA': 'inline label - always visible', 'SUPERFICIE': 'inline label - always visible', 'Actividad': 'inline label - always visible', 'Resumen': 'inline label - always visible', 'Ubicación': 'inline label - always visible', 'Fec_Creac': 'inline label - always visible', 'Acceso': 'inline label - always visible', 'Video': 'inline label - always visible', });
lyr_Proyecto_Final__1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});