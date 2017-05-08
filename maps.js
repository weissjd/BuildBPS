var earlyLearningMarkers;
var elementaryMarkers;
var k8Markers;
var middleMarkers;
var highSchoolMarkers;
var specialMarkers;

var mapBackground = "Non_White_Residents";
var backgroundInfoList = 
{
    "School_Age_Density": {
        "title": "Density of School Age Children",
        "keyRangeText": ["&nbsp;0&nbsp;Kids/mi<sup>2</sup>", "&nbsp;&gt;&nbsp;5K&nbsp;Kids/mi<sup>2</sup>"],
        "keyRangeTitle": ["Zero Children age 5-17 per Square Mile", "Greater Than 5,000 Children age 5-17 per Square Mile"],
        mapLayerFunction: function (feature) {
            var densityColor = Math.round((Math.min(feature.properties.Density, 5000) * (255.000 / 5000.000))).toString(16);
            if (densityColor.length == 1)
                densityColor = "0" + densityColor;

            var lowDensityColor = Math.round((5000 - Math.min(feature.properties.Density, 5000)) * (255.000 / 5000.000)).toString(16);
            if (lowDensityColor.length == 1)
                lowDensityColor = "0" + lowDensityColor;

            return {
                "color": "#" + lowDensityColor + "22" + densityColor,
                "weight": .6,
                "opacity": (feature.properties.TotalPop > 0) ? 0.35 : 0,
                "fillOpacity": (feature.properties.TotalPop > 0) ? 0.4 : 0
            };
        },
        popUpFunction: function (feature, layer) {
            var popupContent = Math.round(feature.properties.Density).toString() + " School age Children per Square Mile";
            layer.bindPopup(popupContent);
        }
    },
    "Median_Income": {
        "title": "Individual Median Income",
        "keyRangeText": ["$3K&nbsp;Med.&nbsp;Income", "&gt;&nbsp;$60K&nbsp;Med.&nbsp;Income"],
        "keyRangeTitle": ["Individual Median Income: $3,000", "Individual Median Income: Greater than $60,000"],
        mapLayerFunction: function (feature) {
            var incomeColorHigh = Math.round(((Math.min(feature.properties.MedianIncome , 60000) - 3000) * (255.000 / 57000.000))).toString(16);
            if (incomeColorHigh.length == 1)
                incomeColorHigh = "0" + incomeColorHigh;

            var incomeColorLow = Math.round((60000 - Math.min(feature.properties.MedianIncome , 60000)) * (255.000 / 57000.000)).toString(16);
            if (incomeColorLow.length == 1)
                incomeColorLow = "0" + incomeColorLow;

            return {
                "color": "#" + incomeColorLow + "22" + incomeColorHigh,
                "weight": .6,
                "opacity": (feature.properties.TotalPop > 0) ? 0.35 : 0,
                "fillOpacity": (feature.properties.TotalPop > 0) ? 0.4 : 0
            };
        },
        popUpFunction: function (feature, layer) {
            var popupContent = "Individual Median Income: " + Math.round(feature.properties.MedianIncome).toString();
            layer.bindPopup(popupContent);
        }
    },
    "Non_White_Residents": {
        "title": "Percentage of People of Color",
        "keyRangeText": ["&nbsp;0%&nbsp;PoC", "&nbsp;100%&nbsp;PoC"],
        "keyRangeTitle": ["0% People of Color", "100% People of Color"],
        mapLayerFunction: function (feature) {
            var nonWhiteColor = Math.round((feature.properties.NonWhite * 2.55)).toString(16);
            if (nonWhiteColor.length == 1)
                nonWhiteColor = "0" + nonWhiteColor;

            var whiteColor = Math.round(((100 - feature.properties.NonWhite) * 2.55)).toString(16);
            if (whiteColor.length == 1)
                whiteColor = "0" + whiteColor;

            return {
                "color": "#" + whiteColor + "22" + nonWhiteColor,
                "weight": .6,
                "opacity": (feature.properties.TotalPop > 0) ? 0.35 : 0,
                "fillOpacity": (feature.properties.TotalPop > 0) ? 0.4 : 0
            };
        },
        popUpFunction: function (feature, layer) {
            var popupContent = feature.properties.NonWhite.toString() + "% People of Color";
            layer.bindPopup(popupContent);
        }

    }
};

var backgroundInfo = backgroundInfoList[mapBackground];

var markerType = "Building_Condition";

var markerInfoList = {
    "Site_Condition": {
        "title": "School Site Condition",
        "legendTitle": "School Site Condition",
        "valueFunction": function (school) {
            return school.SiteCondition;
        }
    },
    "Building_Condition": {
        "title": "School Building Condition",
        "legendTitle": "Building Condition",
        "valueFunction": function (school) {
            return school.buildingCondition;
        }
    },
    "Effectiveness_Spaces": {
        "title": "Effectiveness of Educational Spaces",
        "legendTitle": "Effectiveness of Spaces",
        "valueFunction": function (school) {
            return school.EffectivenessSpaces;
        }
    },
    "Learning_Environments": {
        "title": "Quality of School Learning Environments",
        "legendTitle": "Learning Environments",
        "valueFunction": function (school) {
            return school.learningEnvironments;
        }
    },
    "Play_Areas": {
        "title": "Play Areas",
        "legendTitle": "Play Areas",
        "valueFunction": function (school) {
            return school.PlayAreas;
        }
    },
};

var markerInfo = markerInfoList[markerType];

var mymap = L.map('map', { zoomSnap: 0.1, zoomDelta: 0.5, zoomControl: false }).setView([42.316789, -71.075115], 12);

L.tileLayer('http://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright" target="_new">OpenStreetMap</a>, &copy;<a href="https://carto.com/attribution" target="_new">CARTO</a>',
}).addTo(mymap);

var boundShapes;
var tractShapes;

function addBackground() {
    tractShapes = L.geoJSON(tracts, {
        onEachFeature: backgroundInfo.popUpFunction,
        style: backgroundInfo.mapLayerFunction
    }).addTo(mymap);
}
       
addBackground();

if (window.location.href.toLowerCase().indexOf("dsni") >= 0) {
    boundShapes = L.geoJSON(dsni, {
        style: {"color": "#555",
                    "weight": 1.9,
                    "opacity": 1,
                    "fillOpacity": 0}

    }).addTo(mymap);
}
else {
    boundShapes = tractShapes;
}
mymap.fitBounds(boundShapes.getBounds());

var iconOptions = {
    icon: 'building',
    iconSize: [28, 35],
    markerColor: 'black'
};

var markerList = {
    "Deficient": { color: '#000000' },
    "Poor": { color: '#e51300' },
    "Fair": { color: '#ef8409' },
    "Good": { color: 'green' },
    "Excellent": { color: '#112bc1' },
    "Not_Assessed": { color: 'grey' },

    "Replace": { color: '#e51300' },
    "Minor": { color: '#ef8409' },
    "Moderate": { color: 'green' },
    "Adequate": { color: '#112bc1' },
    "Not_Present": { color: 'grey' },
};

var pageLoad = true;

function addMarkers() {
    earlyLearningMarkers = [];
    elementaryMarkers = [];
    k8Markers = [];
    middleMarkers = [];
    highSchoolMarkers = [];
    specialMarkers = [];

    for (var i = 0; i < schools.length; i++) {

        if (markerList[markerInfo.valueFunction(schools[i]).replace(" ", "_")]) {
            iconOptions.markerColor = markerList[markerInfo.valueFunction(schools[i]).replace(" ", "_")].color;
            
            marker = new L.marker(schools[i].latLng, {
                icon: L.VectorMarkers.icon(iconOptions)
            }).bindPopup(schools[i].Name);

            switch (schools[i].gradeLevel) {
                case "Early Learning":
                    earlyLearningMarkers.push(marker);
                    break;
                case "Elementary School":
                    elementaryMarkers.push(marker);
                    break;
                case "K-8":
                    k8Markers.push(marker);
                    break;
                case "Middle School":
                    middleMarkers.push(marker);
                    break;
                case "High School":
                    highSchoolMarkers.push(marker);
                    break;
                case "Special":
                    specialMarkers.push(marker);
                    break;
            }
        }
    }

    earlyLearningMarkers = L.featureGroup(earlyLearningMarkers);
    elementaryMarkers = L.featureGroup(elementaryMarkers);
    k8Markers = L.featureGroup(k8Markers);
    middleMarkers = L.featureGroup(middleMarkers);
    highSchoolMarkers = L.featureGroup(highSchoolMarkers);
    specialMarkers = L.featureGroup(specialMarkers);

    if (pageLoad || $("#earlylearning").is(":checked"))
        earlyLearningMarkers.addTo(mymap);
    if (pageLoad || $("#elementary").is(":checked"))
        elementaryMarkers.addTo(mymap);
    if (pageLoad || $("#k8").is(":checked"))
        k8Markers.addTo(mymap);
    if (pageLoad || $("#middle").is(":checked"))
        middleMarkers.addTo(mymap);
    if (pageLoad || $("#highschool").is(":checked"))
        highSchoolMarkers.addTo(mymap);
            
    pageLoad = false;
}

addMarkers();

var legend;

function addLegend() {
    legend = L.control({ position: 'bottomleft' });

    legend.onAdd = function (mymap) {
        var legendMarker = '<div class="vector-marker-icon-green vector-marker leaflet-zoom-animated leaflet-interactive" tabindex="0" style="float: left; position: relative;width: 10px;height: 15px;z-index: 147;"><svg width="10px" height="15px" viewBox="0 0 32 52" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M16,1 C7.7146,1 1,7.65636364 1,15.8648485 C1,24.0760606 16,51 16,51 C16,51 31,24.0760606 31,15.8648485 C31,7.65636364 24.2815,1 16,1 L16,1 Z" fill="#fill#"></path></svg></div>';

        var div = L.DomUtil.create('div', 'info legend');
        div.innerHTML += "<div style='margin-bottom: 5px; min-width: 140px;'>" + markerInfo.legendTitle + "</div>";
        if (markerInfo.title == "Play Areas") {
            div.innerHTML += "<div>" + legendMarker.replace("#fill#", "#112bc1") + "&nbsp;Adequate</div>";
            div.innerHTML += "<div>" + legendMarker.replace("#fill#", "green") + "&nbsp;Moderate</div>";
            div.innerHTML += "<div>" + legendMarker.replace("#fill#", "#ef8409") + "&nbsp;Minor</div>";
            div.innerHTML += "<div>" + legendMarker.replace("#fill#", "#e51300") + "&nbsp;Replace</div>";
            div.innerHTML += "<div>" + legendMarker.replace("#fill#", "#000000") + "&nbsp;Deficient</div>";
            div.innerHTML += "<div>" + legendMarker.replace("#fill#", "grey") + "&nbsp;Not&nbsp;Present</div>";
        }
        else {
            div.innerHTML += "<div>" + legendMarker.replace("#fill#", "#112bc1") + "&nbsp;Excellent</div>";
            div.innerHTML += "<div>" + legendMarker.replace("#fill#", "green") + "&nbsp;Good</div>";
            div.innerHTML += "<div>" + legendMarker.replace("#fill#", "#ef8409") + "&nbsp;Fair</div>";
            div.innerHTML += "<div>" + legendMarker.replace("#fill#", "#e51300") + "&nbsp;Poor</div>";
            div.innerHTML += "<div>" + legendMarker.replace("#fill#", "#000000") + "&nbsp;Deficient</div>";
            div.innerHTML += "<div>" + legendMarker.replace("#fill#", "grey") + "&nbsp;Not&nbsp;Assessed</div>";
        }
        div.innerHTML += "<div style='margin-top: 10px;margin-bottom: 5px;'>Map Colors</div>";
        div.innerHTML += "<div><div class='gradient'></div><div style='height:50px;'>" +
            "<div style='height:50%; line-height: 5px;' title='" + backgroundInfo.keyRangeTitle[1] + "'>" + backgroundInfo.keyRangeText[1] + "</div>" +
            "<div style='display:flex; align-items: flex-end; height:50%;line-height: 9px;' title='" + backgroundInfo.keyRangeTitle[0] + "'>" + backgroundInfo.keyRangeText[0] + "</div></div></div>";
        return div;
    }

    legend.addTo(mymap);
}

addLegend();

var bpsWorkshop = L.control({ position: 'topleft' });
bpsWorkshop.onAdd = function (mymap) {
    var div = L.DomUtil.create('div');
    div.innerHTML += '<a href="http://bpsworkshop.com" title="Go to BPSWorkshop.com"><div class="info"><img src="http://bpsworkshop.com/sites/all/themes/buildit/favicon.png"></div></a>';
    return div;
}
bpsWorkshop.addTo(mymap);

var home = L.control({ position: 'topleft' });
home.onAdd = function (mymap) {
    var div = L.DomUtil.create('div');
    div.innerHTML += '<a href="index.html" title="BuildBPS - Exploring Equity - Home"><div class="info fa fa-home" style="font: normal normal normal 18px/1 FontAwesome"></div></a>';
    return div;
}
home.addTo(mymap);

L.control.zoom({
    position: 'topleft'
}).addTo(mymap);

var title = L.control({ position: 'topright' });

title.onAdd = function (mymap) {
    var div = L.DomUtil.create('div', 'info title');
    var titleControls =
        '<div class="dropdown">' +
        '<button class="btn btn-default dropdown-toggle" type="button" id="markerMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">' +
            '<span id="markerTitle">' + markerInfo.title + ' </span>' +
            '<span class="caret"></span>' +
        '</button> ' +
      '<ul class="dropdown-menu">';
    for (var markerName in markerInfoList) {
        titleControls += '<li><a href="#" class="markeroption" id="' + markerName + '">' + markerInfoList[markerName].title + '</a></li>';
    }

    titleControls += '</ul>' +
    '</div>' +
    '<div class="dropdown">' +
        '<button class="btn btn-default dropdown-toggle" type="button" id="backgroundMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">' +
            '<span id="backgroundTitle">' + backgroundInfo.title + ' </span>' +
            '<span class="caret"></span>' +
        '</button> ' +
      '<ul class="dropdown-menu">';

    for (var backgroundName in backgroundInfoList) {
        titleControls += '<li><a href="#" class="backgroundoption" id="' + backgroundName + '">' + backgroundInfoList[backgroundName].title + '</a></li>';
    }
    titleControls += '</ul>' +
    '</div>';

    div.innerHTML += titleControls;
    return div;
}

title.addTo(mymap);

$(".markeroption").click(function (e) {
    $("#markerTitle").text(e.target.text + ' ');

    earlyLearningMarkers.removeFrom(mymap);
    elementaryMarkers.removeFrom(mymap);
    k8Markers.removeFrom(mymap);
    middleMarkers.removeFrom(mymap);
    highSchoolMarkers.removeFrom(mymap);
    specialMarkers.removeFrom(mymap);

    legend.remove();

    markerInfo = markerInfoList[e.target.id];

    addMarkers();
    addLegend();
});

$(".backgroundoption").click(function (e) {
    $("#backgroundTitle").text(e.target.text + ' ');

    tractShapes.removeFrom(mymap);

    legend.remove();

    backgroundInfo = backgroundInfoList[e.target.id];

    addBackground();
    addLegend();
});

var menu = L.control({ position: 'bottomright' });
menu.onAdd = function (mymap) {
    var div = L.DomUtil.create('div', 'info');

    div.innerHTML += "<div><input id='earlylearning' name='earlylearning' type='checkbox' onclick='schoolTypeChanged(this)' checked></input><label for='earlylearning'>Early Learning</label></div>";
    div.innerHTML += "<div><input id='elementary' name='elementary' type='checkbox' onclick='schoolTypeChanged(this)' checked></input><label for='elementary'>Elementary</label></div>";
    div.innerHTML += "<div><input id='k8' name='k8' type='checkbox' onclick='schoolTypeChanged(this)' checked></input><label for='k8'/label>K-8</label></div>";
    div.innerHTML += "<div><input id='middle' name='middle' type='checkbox' onclick='schoolTypeChanged(this)' checked></input><label for='middle'>Middle</label></div>";
    div.innerHTML += "<div><input id='highschool' name='highschool' type='checkbox' onclick='schoolTypeChanged(this)' checked></input><label for='highschool'>High School</label></div>";
    div.innerHTML += "<div><input id='special' name='special' type='checkbox' onclick='schoolTypeChanged(this)' checked></input><label for='special'>Special</label></div>";
    return div;
}
menu.addTo(mymap);

function schoolTypeChanged(checkbox) {
    var schoolLayer;
    switch (checkbox.id) {
        case "earlylearning":
            schoolLayer = earlyLearningMarkers;
            break;
        case "elementary":
            schoolLayer = elementaryMarkers;
            break;
        case "k8":
            schoolLayer = k8Markers;
            break;
        case "middle":
            schoolLayer = middleMarkers;
            break;
        case "highschool":
            schoolLayer = highSchoolMarkers;
            break;
        case "special":
            schoolLayer = specialMarkers;
            break;
    }

    if (checkbox.checked)
        schoolLayer.addTo(mymap);
    else
        schoolLayer.removeFrom(mymap);
}
