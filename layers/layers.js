var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var lyr_arturo3_index_ndvi_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "arturo 3_index_ndvi",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/arturo3_index_ndvi_0.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-12202294.963734, 3145826.927997, -12201035.931501, 3147536.003277]
                            })
                        });

lyr_arturo3_index_ndvi_0.setVisible(true);
var layersList = [baseLayer,lyr_arturo3_index_ndvi_0];
