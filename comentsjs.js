// const QuestionView = CollectionView.extend({

//     className: 'search-view',
//     template: questionview,
//     childViewContainer: '.search-view-container',
//     childView: QuestionItem,

//     // ui: {
//     //     'paginator': '.footer-view'
//     // },
    
//     initialize() {
//         this.collection = new Backbone.Collection();
//     },

//     onRender() {
//         // debugger;
//         const self = this;
//         const store = Radio.channel('app').request('store');
//         this.ui.paginator.pagination({
//             dataSource: store.question.models,
//             // showPageNumbers: false,
//             showNavigator: true,
//             callback: (models, options) => {
//                 // debugger;
                
//                 self.ui.paginator.find('.paginationjs');
//                 this.collection.reset(models);
//             }
//         });
//     },

//     onBeforeDestroy() {
//         // debugger;
//     }    
// });


// const QuestionView = View.extend({
//     template: questionview,
//     className: 'search-view',
//     regions: {
//         container: '.search-view-container',
//         footer: '.footer-view'

//     },
//     events: {
//         click: 'onClick'
//     },
//     childViewEvents: {
//         nextClick: 'onNextClick',
//         previousClick: 'onPreviousClick'
//     },
//     onRender() {
//         this.showChildView('container', new SidebarCollectionView());
//         this.showChildView('footer', new FooterView)


//     },

//     onNextClick(childView) {
//         // if (!this.options.next) {
//         //     return false;
//         // }
//         // $.ajax({
//         //     url: this.options.next,
//         //     context: this,
//         //     success: response => {
//         //         console.log(response.results);
//         //         this.options.next = response.next;
//         //         this.options.previous = response.previous;
//         //         this.collection.reset(response.results);
//         //         this.getChildView('footer').options.offset = response.offset;
//         //         this.getChildView('footer').options.count = response.count;
//         //         this.getChildView('footer').options.results = response.results.length;
//         //         this.getChildView('footer').render();
//         //     }
//         // });
//     },
//     onPreviousClick(e) {
//         // if (!this.options.previous) {
//         //     return false;
//         // }
//         // $.ajax({
//         //     url: this.options.previous,
//         //     success: response => {
//         //         this.options.next = response.next;
//         //         this.options.previous = response.previous;
//         //         this.collection.reset(response.results);
//         //         this.getChildView('footer').options.offset = response.offset;
//         //         this.getChildView('footer').options.count = response.count;
//         //         this.getChildView('footer').options.results = response.results.length;
//         //         this.getChildView('footer').render();
//         //     }
//         // });
//     }
// });



// onRender() {
    // const store = Radio.channel('app').request('store');
    // // debugger;
    // const models = store.answer.filter(model => {
    //     // debugger;
    //     const queries = model.get('text').toLowerCase().split(' ');
    //     // debugger;
    //         for (let i=0; i < queries.length; i++) {
    //             if (model.get('text').toLowerCase().indexOf(queries[i]) !== -1) {
    //                 return true;
    //             }
    //         }       
    //     return false;
    // });

    // view.collection.reset(models);
//     // console.log(this.$el);
//     // // debugger;
//     // const store = Radio.channel('app').request('store');
//     // debugger;
//     // this.$el.find('.search-pagination').pagination({
//     //     dataSource: qnQuestion.models,
//     //     callback: (models, options) => {
//     //         debugger;
//     //         if (this.open) {
//     //             this.getChildView('searchList').collection.reset(models);
//     //         }
//     //     }
//     // });

//     // $('#pagination-container').pagination({
//     //     dataSource: qnQuestion.models,
//     //     callback: (data, pagination) => {
//     //         debugger;
//     //         $('#data-container').html(html);
//     //         // debugger;
//     //     }
//     // });

// },

 // templateContext() {
    //     const id = this.model.get('id');
    //     let answers = _.filter(anAnswer.models, model => id == model.get('question'));
    //     answers = _.map(answers, model => {
    //         // function dateToShow(date) {
    //         //     if (!date) return '';
    //         //     const _date = moment(date);
    //         //     if (_date.isValid()) return _date.locale('ru').format('L HH:mm');
    //         //     return '';
    //         // }
            
    //         var dateCreated = model.get('date_created');
    //         moment.locale('ru');
    //         dateCreated = moment(dateCreated).format('L HH:mm');
    //         moment.suppressDeprecationWarnings = true;
    //         return model.set('date_created', dateCreated);
    //     })
    //     answers = _.map(answers, model => {
    //         var userid = model.get('user');
    //         const userModel = _.find(usUser.models, model => userid == model.get('id'))
    //         const firstName = userModel.get('first_name');
    //         const lastName = userModel.get('last_name');
    //         return model.set('user', `${firstName} ${lastName}`);
    //     })
    //     return {
    //         answers: answers
    //     }
    // },
    // clickMouse(){
    //     console.log('rabotaet(NET)')
    // }

    // const SidebarCollectionView = CollectionView.extend({
//     childView: QuestionItem,
//     collection: qnQuestion,
// });

// const FooterView = View.extend({
//     template: footer,
//     // triggers: {
//     //     'click .next-page': 'nextClick',
//     //     'click .previous-page': 'previousClick'
//     // },
//     // templateContext() {
//     //     return {
//     //         count: this.options.count,
//     //         offset: this.options.offset,
//     //         top: this.options.offset + this.options.results
//     //     }
//     // },
// });
// парсинг координат
  // const store = Radio.channel('app').request('store');
        // const zoomloc = store.answer.map(model => model.get('location'));
        // debugger;
        // let open_q = this.model.get('location').indexOf('(');
        // let close_q = this.model.get('location').indexOf(')');
        // let array_q = this.model.get('location').substring(open_q + 1, close_q).split(' ');
        // let lat_q = parseFloat(array_q[0]);
        // let lng_q = parseFloat(array_q[1]);
        // // let abc = fromLonLat([this.model.get('location').split(';')[1]]);
        // let finalyloc = [lng_q, lat_q];
        // debugger;
        // debugger;












        Map.js



    // this.storage = window.localStorage || {};
    // let _this = this;
    // const layers = this._map.getLayers().getArray();
    // const layerGroup = _.find(layers, layer => layer.get('title') == 'Выбор карты');
    // _.each(layerGroup.get('layers').getArray(), layer => layer.on('change:visible', e => {
    //     // debugger;
    //     if (e.target.get('visible' == true)){
    //         // debugger;
    //         _this.storage.setItem('mapkey', e.target.get('title'));
    //         debugger;
    //     }else{
    //         _this.storage.getItem('mapkey', e.target.get('title'));
    //         debugger;
    //     }
    // }))


// function StoredTileLayer() {
//     TileLayer.call()
// }


// function() {
//     const mapkey = localStorage.get('mapkey');

//     if (mapkey) {

//     }
// },





    // const nextClick = new Select({
    // condition: pointerMove
    // });



    // this._map.on("pointermove", function (e) {
    //     if (e.dragging) {
    //         return;
    //     }
    //     var map = e.map;
    //     console.log(e.pixel);
    //     var feature = map.forEachFeatureAtPixel(e.pixel, function(feature, layer) {
    //       return feature;
    //     }, null, function(layer) {return layer == vectorLayer});
    //     var hit = (feature) ? true : false;
    //     console.log(hit);
    //     olDraw.setActive(hit);
    // });


        

// попытка сделать ховер для фичи
    // this._map.on("pointermove", function (e) {
    //     if (e.dragging) {
    //         return;
    //     }
    //     let feature = this.forEachFeatureAtPixel(e.pixel, function(feature, layer) {
    //         debugger;
    //         return feature;
    //     },  null, function(layer) {
    //         return layer == vectorLayer
    //     });



    // this.getFeatures().forEach(feature => {
    //     const markStyle = new Style({
    //         image: new Icon({
    //             anchor: [0.5, 46],
    //             scale: 1.2,
    //             anchorXUnits: 'fraction',
    //             anchorYUnits: 'pixels',
    //             src: 'media/marker-red.png'
    //         })
    //     });
    //     feature.setStyle(markStyle);
    // });
// });

    // this._map.addInteraction(nextClick);
    // nextClick.on('select', e => {
    //     e.target.getFeatures().forEach(feature => {
    //         const markStyle = new Style({
    //             image: new Icon({
    //                 anchor: [0.5, 46],
    //                 scale: 1.2,
    //                 anchorXUnits: 'fraction',
    //                 anchorYUnits: 'pixels',
    //                 src: 'media/marker-red.png'
    //             })
    //         });
    //         feature.setStyle(markStyle);
    //     });
    // });



    // var iconFeature = new Feature({
    //     geometry: new Point(
    //         transform([39.71, 47.24], 'EPSG:4326', 'EPSG:3857')
    //     ),
    //     name: 'Метка голосования',
    //     population: 4000,
    //     rainfall: 500
    // });

    // var iconStyle = new Style({
    //     image: new Icon(/** @type {module:ol/style/Icon~Options} */ ({
    //         anchor: [0.5, 46],
    //         zIndex: 1000,
    //         anchorXUnits: 'fraction',
    //         anchorYUnits: 'pixels',
    //         src: 'media/marker-red.png'
    //     }))
    // });

    // iconFeature.setStyle(iconStyle);

    // var vectorSource = new VectorSource({
    //     features: [iconFeature]
    // });

    // var vectorLayer = new VectorLayer({
    //     source: vectorSource
        // });




    // Кастомный попап взятый из github
    // var popup = new Overlay({
    //     popupClass: "default", //"tooltips", "warning" "black" "default", "tips", "shadow",
    //     closeBox: true,
    //     onshow: function(){ console.log("You opened the box"); },
    //     onclose: function(){ console.log("You close the box"); },
    //     positioning: 'auto',
    //     autoPan: true,
    //     autoPanAnimation: { duration: 250 }
    // });





            // this._map.on('singleclick', function(evt) {
    //     var coordinate = evt.coordinate;
    //     var hdms = toStringHDMS(toLonLat(coordinate));

    //     content.innerHTML = '<p>You clicked here:</p><code>' + hdms +
    //         '</code>';
    //     overlay.setPosition(coordinate);
    // });


    // var pop = document.getElementById('popup');

    // var popup = new Overlay({
    //   element: pop,
    //   positioning: 'bottom-center',
    //   stopEvent: false,
    //   offset: [0, -50]
    // });
    
    // $.ajax({url:'/polls/answer/', success: (result) => {
    //     // debugger;
    //     // цикл проходит по всем элементам массива и создает для каждого попап
    //     for(let i = 0; i<result.length; i++){
    //         let item = result[i]; // отдельный элеменет массива
    //         // достать из item.location координаты и положить в
    //         let lng; 
    //         let lat;

    //         // создать попап с координатами lng и lat.
    //         var iconFeature = new Feature({
    //             geometry: new Point(
    //                 transform([lng, lat], 'EPSG:4326', 'EPSG:3857')
    //             ),
    //             name: item.text,
    //             population: 4000,
    //             rainfall: 500
    //         });
    
    //         // добавить попап на карту
    //         this._map.addOverlay(iconFeature);
    //         console.log(result[i].location);
    //     }
    // }})


    // this._map.addOverlay(popup);

    // display popup on click
    // this._map.on('click', function(evt) {
    //     // debugger;
    //     var feature = this.forEachFeatureAtPixel(evt.pixel,
    //         function(feature) {
    //             return feature;
    //         });
    //     if (feature) {
    //         var coordinates = feature.getGeometry().getCoordinates();
    //         popup.setPosition(coordinates);
    //         $('#popup').popover({
    //             placement: 'top',
    //             html: true,
    //             content: feature.get('name')
    //         });
    //         // debugger;
    //         $('#popup').popover('show');
    //     } else {
    //         // debugger;
    //         $('#popup').popover('destroy');
    //     }
    // });



    // this._map.on('singleclick', function(evt) {
    //     var coordinate = evt.coordinate;
    //     var hdms = toStringHDMS(toLonLat(coordinate));

    //     content.innerHTML = '<p>Координаты на карте </p><code>' + hdms +
    //         '</code>';
    //     overlay.setPosition(coordinate);
    //   });


// Кастомный попап взятый из github
    // var thing = new Point(
    //     transform([39.71, 47.24], 'EPSG:4326', 'EPSG:3857')
    // );
    // var featurething = new Feature({
    //     name: "Thing",
    //     geometry: thing
    // });

    // featurething.setStyle( new Style({
    //     image: new Icon({
    //         anchor:[0.5, 1],
    //         crossOrigin: 'anonymous',
    //         src: 'media/marker-red.png',
    //     }),
    // }))

    // vectorLayer.getSource().addFeature(featurething);




// Кастомный попап взятый из github
    // var select = new Select({});
    // this._map.addInteraction(select);
    // // On selected => show/hide popup
    // select.getFeatures().on(['add'], function(e)
    // {	var feature = e.element;
    //     var content = "";
    //     content += "<img src='"+feature.get("img")+"'/>";
    //     content += feature.get("text");
    //     // debugger;
    //     popup.options.onshow(feature.getGeometry().getFirstCoordinate(), content); 
    // })
    // // debugger;
    // select.getFeatures().on(['remove'], function(e)
    // {	popup.options.onclose();
    // })
    
            // const nextClick = new Select({
    //     condition: click
    // });
    // this._map.addInteraction(nextClick);
    // nextClick.on('select', e => {
    //     e.target.getFeatures().forEach(feature => {
    //         const markStyle = new Style({
    //             image: new Icon({
    //                 anchor: [0.5, 46],
    //                 scale: 1.2,
    //                 anchorXUnits: 'fraction',
    //                 anchorYUnits: 'pixels',
    //                 src: 'media/marker-red.png'
    //             })
    //         });
    //         feature.setStyle(markStyle);
    //     });
    // });
