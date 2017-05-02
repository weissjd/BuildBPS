var yAxisType = "Learning_Environments";
var conditions = ["n/a", "Poor", "Fair", "Good", "Excellent"];

var yAxisInfoList = {
    "Building_Condition": {
        "title": "School Building Condition",
        "shortTitle": "Condition",
        "valueFunction": function (school) {
            return getConditionValue(school.buildingCondition);
        },
        "displayFunction": function (value) {
            return value > 0;
        },
        "categories": conditions
    },
    "Site_Condition": {
        "title": "School Site Condition",
        "shortTitle": "Site Condition",
        "valueFunction": function (school) {
            return getConditionValue(school.SiteCondition);
        },
        "displayFunction": function (value) {
            return value > 0;
        },
        "categories": conditions
    },
    "Learning_Environments": {
        "title": "Quality of School Learning Environments",
        "shortTitle": "Learning Environments",
        "valueFunction": function (school) {
            return getConditionValue(school.learningEnvironments);
        },
        "displayFunction": function (value) {
            return value > 0;
        },
        "categories": conditions
    },
    "Effectiveness_Spaces": {
        "title": "Effectiveness of Educational Spaces",
        "shortTitle": "Effectiveness of Spaces",
        "valueFunction": function (school) {
            return getConditionValue(school.EffectivenessSpaces);
        },
        "displayFunction": function (value) {
            return value > 0;
        },
        "categories": conditions
    },
};
var yAxisInfo = yAxisInfoList[yAxisType];

var xAxisType = "Percent_High_Needs";
var xAxisInfoList = {
    "Percent_High_Needs": {
        "title": "Percent High Needs",
        "shortTitle": "% high needs",
        "valueFunction": function (school) {
            return school.PctHighNeed;
        },
        "displayFunction": function (value) {
            return true;
        }
    },
    "Percent_FLNE": {
        "title": "Percent First Language not English",
        "shortTitle": "% 1st lang not Eng.",
        "valueFunction": function (school) {
            return school.PctFlne;
        },
        "displayFunction": function (value) {
            return true;
        }
    },
    "Percent_FELL": {
        "title": "Percent English Language Learners",
        "shortTitle": "% ELL",
        "valueFunction": function (school) {
            return school.PctEll;
        },
        "displayFunction": function (value) {
            return true;
        }
    }
};

var xAxisInfo = xAxisInfoList[xAxisType];

var earlyLearningData = [];
var elementaryData = [];
var k8Data = [];
var middleData = [];
var highSchoolData = [];
var specialData = [];

var titleControls =
    '<div class="dropdown">' +
    '<button class="btn btn-default dropdown-toggle" type="button" id="yAxisMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">' +
        '<span id="yAxisTitle">' + yAxisInfo.title + ' </span>' +
        '<span class="caret"></span>' +
    '</button> ' +
  '<ul class="dropdown-menu">';
for (var yAxisOption in yAxisInfoList) {
    titleControls += '<li><a href="#" class="yaxisoption" id="' + yAxisOption + '">' + yAxisInfoList[yAxisOption].title + '</a></li>';
}

titleControls += '</ul>' +
'</div>' +
'<div class="title"> by </div>' +
'<div class="dropdown">' +
    '<button class="btn btn-default dropdown-toggle" type="button" id="xAxisMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">' +
        '<span id="xAxisTitle">' + xAxisInfo.title + ' </span>' +
        '<span class="caret"></span>' +
    '</button> ' +
  '<ul class="dropdown-menu">';

for (var xAxisOption in xAxisInfoList) {
    titleControls += '<li><a href="#" class="xaxisoption" id="' + xAxisOption + '">' + xAxisInfoList[xAxisOption].title + '</a></li>';
}
titleControls += '</ul>' +
'</div>';
        
$("#title").html(titleControls);

$(".yaxisoption").click(function (e) {
    $("#yAxisTitle").text(e.target.text + ' ');

    yAxisInfo = yAxisInfoList[e.target.id];

    showChart();
});

$(".xaxisoption").click(function (e) {
    $("#xAxisTitle").text(e.target.text + ' ');

    xAxisInfo = xAxisInfoList[e.target.id];

    showChart();
});


function getConditionValue(condition) {
    var conditionValue = 0;
    switch (condition) {
        case "Poor":
            conditionValue = 1;
            break;
        case "Fair":
            conditionValue = 2;
            break;
        case "Good":
            conditionValue = 3;
            break;
        case "Excellent":
            conditionValue = 4;
            break;
    }
    return conditionValue;
}

function showChart() {
    earlyLearningData = [];
    elementaryData = [];
    k8Data = [];
    middleData = [];
    highSchoolData = [];
    specialData = [];

    schools.forEach(function (school) {

        var dataObject = {
            x: xAxisInfo.valueFunction(school),
            y: yAxisInfo.valueFunction(school),
            description: school.Name,
            name: school.gradeLevel
        };

        if (yAxisInfo.displayFunction(dataObject.y) && xAxisInfo.displayFunction(dataObject.x))
            switch (school.gradeLevel) {
                case "Early Learning":
                    earlyLearningData.push(dataObject);
                    break;
                case "Elementary School":
                    elementaryData.push(dataObject);
                    break;
                case "K-8":
                    k8Data.push(dataObject);
                    break;
                case "Middle School":
                    middleData.push(dataObject);
                    break;
                case "High School":
                    highSchoolData.push(dataObject);
                    break;
                case "Special":
                    specialData.push(dataObject);
                    break;
            }
    });

    Highcharts.chart('container', {
        xAxis: {
            title: { text: xAxisInfo.shortTitle },
        },
        yAxis: {
            title: { text: yAxisInfo.shortTitle },
            categories: yAxisInfo.categories,
            allowDecimals: false,
            min: 1,
            break: 1
        },
        title: {
            text: yAxisInfo.title + " by " + xAxisInfo.title,
            style: { "display": "none" }
        },
        tooltip: {
            // pointFormat:'{point.x}{point.y}{point.z}'
            formatter: function () {
                return '<b>' + this.point.description + '</b><br><b>' + yAxisInfo.shortTitle + ':</b> ' + yAxisInfo.categories[parseInt(this.y)] + '<br><b>' + xAxisInfo.shortTitle + ':</b> ' + this.x;
            }
        },
        series: [{
            name: "Early Learning",
            type: 'scatter',
            data: earlyLearningData,
            color: "#FCE077",
            marker: {
                radius: 8,
                symbol: "circle"
            }
        },
        {
            name: "Elementary Schools",
            type: 'scatter',
            data: elementaryData,
            color: "#2BACC9",
            marker: {
                radius: 8,
                symbol: "circle"
            }
        },
        {
            name: "K-8 Schools",
            type: 'scatter',
            data: k8Data,
            color: "#825C99",
            marker: {
                radius: 8,
                symbol: "circle"
            }
        }, {
            name: "Middle Schools",
            type: 'scatter',
            data: middleData,
            color: "#F3AF30",
            marker: {
                radius: 8,
                symbol: "circle"
            }
        },
        {
            name: "High Schools",
            type: 'scatter',
            data: highSchoolData,
            color: "#E56E6E",
            marker: {
                radius: 8,
                symbol: "circle"
            }
        }, {
            name: "Special",
            type: 'scatter',
            data: specialData,
            color: "#12CC80",
            marker: {
                radius: 8,
                symbol: "circle"
            }
        },
        ],
        legend: { enabled: true }
    });
}

showChart();
