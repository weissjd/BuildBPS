var schools = [
{ "Name": "Lee Academy at the Fifield", "gradeLevel": "Early Learning", "TotalStudents": 196, "SiteCondition": "Fair", "EffectivenessSpaces": "Poor", "PctHighNeed": 80.7, "PctEll": 28.9, "PctFlne": 30.5, "latLng": [42.2868, -71.0727], "buildingCondition": "Fair", "learningEnvironments": "Poor" },
{ "Name": "Baldwin Early Learning Pilot Academy", "gradeLevel": "Early Learning", "TotalStudents": 142, "SiteCondition": "Good", "EffectivenessSpaces": "Poor", "PctHighNeed": 79.2, "PctEll": 59.1, "PctFlne": 64.8, "latLng": [42.342, -71.1405], "buildingCondition": "Good", "learningEnvironments": "Poor" },
{ "Name": "Lyon, Mary K-8", "gradeLevel": "K-8", "TotalStudents": 137, "SiteCondition": "Fair", "EffectivenessSpaces": "Poor", "PctHighNeed": 54.7, "PctEll": 5.8, "PctFlne": 23, "latLng": [42.3511, -71.1615], "buildingCondition": "Good", "learningEnvironments": "Poor" },
{ "Name": "West Zone Early Learning Center*", "gradeLevel": "Early Learning", "TotalStudents": 93, "SiteCondition": "Good", "EffectivenessSpaces": "Poor", "PctHighNeed": 71.9, "PctEll": 40.4, "PctFlne": 43, "latLng": [42.326, -71.1068], "buildingCondition": "Good", "learningEnvironments": "Fair" },
{ "Name": "Ellison/Parks Early Education School", "gradeLevel": "Early Learning", "TotalStudents": 189, "SiteCondition": "Good", "EffectivenessSpaces": "Fair", "PctHighNeed": 84.7, "PctEll": 54, "PctFlne": 56.6, "latLng": [42.2718, -71.0917], "buildingCondition": "Excellent", "learningEnvironments": "Excellent" },
{ "Name": "East Boston Early Education Center", "gradeLevel": "Early Learning", "TotalStudents": 184, "SiteCondition": "Good", "EffectivenessSpaces": "Not Assessed", "PctHighNeed": 84.1, "PctEll": 55.3, "PctFlne": 63.5, "latLng": [42.3698, -71.0341], "buildingCondition": "Excellent", "learningEnvironments": "Not Assessed" },
{ "Name": "Haynes Early Education Center", "gradeLevel": "Early Learning", "TotalStudents": 175, "SiteCondition": "Good", "EffectivenessSpaces": "Fair", "PctHighNeed": 86.6, "PctEll": 47.6, "PctFlne": 50.3, "latLng": [42.3151, -71.0789], "buildingCondition": "Excellent", "learningEnvironments": "Good" },
{ "Name": "Boston Teachers Union K-8 School", "gradeLevel": "K-8", "TotalStudents": 326, "SiteCondition": "Fair", "EffectivenessSpaces": "Poor", "PctHighNeed": 56.1, "PctEll": 13.5, "PctFlne": 24.3, "latLng": [42.2947, -71.116], "buildingCondition": "Good", "learningEnvironments": "Fair" },
{ "Name": "Jackson/Mann K-8*", "gradeLevel": "K-8", "TotalStudents": 775, "SiteCondition": "Fair", "EffectivenessSpaces": "Poor", "PctHighNeed": 82.5, "PctEll": 36.6, "PctFlne": 48.1, "latLng": [42.352, -71.1377], "buildingCondition": "Good", "learningEnvironments": "Poor" },
{ "Name": "Shaw, Pauline A. Elementary", "gradeLevel": "Elementary School", "TotalStudents": 160, "SiteCondition": "Fair", "EffectivenessSpaces": "Poor", "PctHighNeed": 78.3, "PctEll": 23.2, "PctFlne": 24.1, "latLng": [42.2821, -71.0869], "buildingCondition": "Fair", "learningEnvironments": "Fair" },
{ "Name": "Higginson Elementary", "gradeLevel": "Elementary School", "TotalStudents": 186, "SiteCondition": "Fair", "EffectivenessSpaces": "Poor", "PctHighNeed": 91.3, "PctEll": 41, "PctFlne": 43.9, "latLng": [42.3177, -71.0916], "buildingCondition": "Fair", "learningEnvironments": "Poor" },
{ "Name": "Curley K-8 (Lower School)", "gradeLevel": "K-8", "TotalStudents": 632, "SiteCondition": "Fair", "EffectivenessSpaces": "Poor", "PctHighNeed": 69.6, "PctEll": 36.5, "PctFlne": 47.5, "latLng": [42.3191, -71.1141], "buildingCondition": "Good", "learningEnvironments": "Fair" },
{ "Name": "Curley K-8 (Upper School)", "gradeLevel": "K-8", "TotalStudents": 263, "SiteCondition": "Fair", "EffectivenessSpaces": "Poor", "PctHighNeed": 69.6, "PctEll": 36.5, "PctFlne": 47.5, "latLng": [42.3185, -71.1136], "buildingCondition": "Good", "learningEnvironments": "Fair" },
{ "Name": "Beethoven, Ludwig Van Elementary", "gradeLevel": "Elementary School", "TotalStudents": 342, "SiteCondition": "Fair", "EffectivenessSpaces": "Poor", "PctHighNeed": 60.2, "PctEll": 26.1, "PctFlne": 29.8, "latLng": [42.2635, -71.1558], "buildingCondition": "Excellent", "learningEnvironments": "Fair" },
{ "Name": "Carter Development Center", "gradeLevel": "Special", "TotalStudents": 28, "SiteCondition": "Good", "EffectivenessSpaces": "Deficient", "PctHighNeed": 100, "PctEll": 31, "PctFlne": 55.2, "latLng": [42.3405, -71.0831], "buildingCondition": "Good", "learningEnvironments": "Good" },
{ "Name": "Sumner, Charles Elementary", "gradeLevel": "Elementary School", "TotalStudents": 540, "SiteCondition": "Good", "EffectivenessSpaces": "Poor", "PctHighNeed": 73.8, "PctEll": 40.3, "PctFlne": 45.2, "latLng": [42.2864, -71.1269], "buildingCondition": "Fair", "learningEnvironments": "Fair" },
{ "Name": "Taylor, Charles H. Elementary", "gradeLevel": "Elementary School", "TotalStudents": 508, "SiteCondition": "Fair", "EffectivenessSpaces": "Poor", "PctHighNeed": 82.4, "PctEll": 32.5, "PctFlne": 37.1, "latLng": [42.2774, -71.0776], "buildingCondition": "Fair", "learningEnvironments": "Fair" },
{ "Name": "Guild, Curtis Elementary", "gradeLevel": "Elementary School", "TotalStudents": 338, "SiteCondition": "Good", "EffectivenessSpaces": "Poor", "PctHighNeed": 89.3, "PctEll": 66.7, "PctFlne": 76.4, "latLng": [42.3887, -71.0043], "buildingCondition": "Good", "learningEnvironments": "Fair" },
{ "Name": "Alighieri, Dante Montessori School", "gradeLevel": "Elementary School", "TotalStudents": 90, "SiteCondition": "Fair", "EffectivenessSpaces": "Poor", "PctHighNeed": 71.9, "PctEll": 49, "PctFlne": 59.4, "latLng": [42.3716, -71.0376], "buildingCondition": "Good", "learningEnvironments": "Fair" },
{ "Name": "Ellis, David A. Elementary", "gradeLevel": "Elementary School", "TotalStudents": 444, "SiteCondition": "Fair", "EffectivenessSpaces": "Poor", "PctHighNeed": 87.2, "PctEll": 37.4, "PctFlne": 44.3, "latLng": [42.3169, -71.0923], "buildingCondition": "Fair", "learningEnvironments": "Poor" },
{ "Name": "Haley K - 8, Dennis", "gradeLevel": "K-8", "TotalStudents": 452, "SiteCondition": "Good", "EffectivenessSpaces": "Poor", "PctHighNeed": 62.4, "PctEll": 17.5, "PctFlne": 22.6, "latLng": [42.2864, -71.1078], "buildingCondition": "Good", "learningEnvironments": "Fair" },
{ "Name": "McKay, Donald K-8", "gradeLevel": "K-8", "TotalStudents": 690, "SiteCondition": "Fair", "EffectivenessSpaces": "Poor", "PctHighNeed": 88.3, "PctEll": 59.4, "PctFlne": 84.8, "latLng": [42.3694, -71.0344], "buildingCondition": "Fair", "learningEnvironments": "Poor" },
{ "Name": "Everett, Edwards Elementary", "gradeLevel": "Elementary School", "TotalStudents": 275, "SiteCondition": "Good", "EffectivenessSpaces": "Deficient", "PctHighNeed": 83.5, "PctEll": 34.9, "PctFlne": 46.8, "latLng": [42.3136, -71.0598], "buildingCondition": "Fair", "learningEnvironments": "Poor" },
{ "Name": "Eliot, John K-8 (Lower School)", "gradeLevel": "K-8", "TotalStudents": 190, "SiteCondition": "Fair", "EffectivenessSpaces": "Poor", "PctHighNeed": 38.7, "PctEll": 9.7, "PctFlne": 16.1, "latLng": [42.3661, -71.0534], "buildingCondition": "Fair", "learningEnvironments": "Fair" },
{ "Name": "Eliot, John K-8 (Upper School)", "gradeLevel": "K-8", "TotalStudents": 327, "SiteCondition": "Fair", "EffectivenessSpaces": "Poor", "PctHighNeed": 38.7, "PctEll": 9.7, "PctFlne": 16.1, "latLng": [42.3679, -71.0578], "buildingCondition": "Good", "learningEnvironments": "Fair" },
{ "Name": "Mendell, Ellis Elementary", "gradeLevel": "Elementary School", "TotalStudents": 232, "SiteCondition": "Fair", "EffectivenessSpaces": "Poor", "PctHighNeed": 52.9, "PctEll": 23.8, "PctFlne": 27.5, "latLng": [42.3166, -71.1017], "buildingCondition": "Fair", "learningEnvironments": "Fair" },
{ "Name": "Roosevelt, Franklin D. K-8 (Lower School)", "gradeLevel": "K-8", "TotalStudents": 128, "SiteCondition": "Excellent", "EffectivenessSpaces": "Poor", "PctHighNeed": 65.1, "PctEll": 17.9, "PctFlne": 30.5, "latLng": [42.2339, -71.1328], "buildingCondition": "Excellent", "learningEnvironments": "Excellent" },
{ "Name": "Roosevelt, Franklin D. K-8 (Upper School)", "gradeLevel": "K-8", "TotalStudents": 330, "SiteCondition": "Fair", "EffectivenessSpaces": "Poor", "PctHighNeed": 65.1, "PctEll": 17.9, "PctFlne": 30.5, "latLng": [42.243, -71.1241], "buildingCondition": "Excellent", "learningEnvironments": "Fair" },
{ "Name": "Conley, George H. Elementary", "gradeLevel": "Elementary School", "TotalStudents": 220, "SiteCondition": "Fair", "EffectivenessSpaces": "Poor", "PctHighNeed": 66.7, "PctEll": 24.8, "PctFlne": 32.4, "latLng": [42.2746, -71.1273], "buildingCondition": "Fair", "learningEnvironments": "Fair" },
{ "Name": "Grew, Henry Elementary", "gradeLevel": "Elementary School", "TotalStudents": 262, "SiteCondition": "Good", "EffectivenessSpaces": "Poor", "PctHighNeed": 76.2, "PctEll": 20.5, "PctFlne": 27.6, "latLng": [42.2568, -71.1272], "buildingCondition": "Good", "learningEnvironments": "Good" },
{ "Name": "Holmes, Oliver Wendell Elementary", "gradeLevel": "Elementary School", "TotalStudents": 367, "SiteCondition": "Fair", "EffectivenessSpaces": "Poor", "PctHighNeed": 85.3, "PctEll": 17.4, "PctFlne": 21.5, "latLng": [42.2967, -71.0749], "buildingCondition": "Fair", "learningEnvironments": "Poor" },
{ "Name": "O'Donnell, Hugh R. Elementary", "gradeLevel": "Elementary School", "TotalStudents": 295, "SiteCondition": "Fair", "EffectivenessSpaces": "Poor", "PctHighNeed": 93, "PctEll": 73.5, "PctFlne": 84.2, "latLng": [42.3782, -71.0381], "buildingCondition": "Fair", "learningEnvironments": "Fair" },
{ "Name": "Condon, James F. Elementary", "gradeLevel": "Elementary School", "TotalStudents": 837, "SiteCondition": "Good", "EffectivenessSpaces": "Fair", "PctHighNeed": 79.8, "PctEll": 34, "PctFlne": 43.3, "latLng": [42.3382, -71.0525], "buildingCondition": "Good", "learningEnvironments": "Fair" },
{ "Name": "Hennigan, James W. K-8*", "gradeLevel": "K-8", "TotalStudents": 624, "SiteCondition": "Good", "EffectivenessSpaces": "Poor", "PctHighNeed": 85.3, "PctEll": 47.6, "PctFlne": 57.8, "latLng": [42.326, -71.1068], "buildingCondition": "Good", "learningEnvironments": "Fair" },
{ "Name": "Chittick, James J. Elementary", "gradeLevel": "Elementary School", "TotalStudents": 310, "SiteCondition": "Poor", "EffectivenessSpaces": "Poor", "PctHighNeed": 79.7, "PctEll": 17.6, "PctFlne": 21.3, "latLng": [42.2674, -71.1044], "buildingCondition": "Fair", "learningEnvironments": "Fair" },
{ "Name": "Otis, James Elementary", "gradeLevel": "Elementary School", "TotalStudents": 402, "SiteCondition": "Fair", "EffectivenessSpaces": "Poor", "PctHighNeed": 85.2, "PctEll": 63.3, "PctFlne": 71.4, "latLng": [42.3753, -71.0339], "buildingCondition": "Fair", "learningEnvironments": "Fair" },
{ "Name": "Kennedy, John F Elementary", "gradeLevel": "Elementary School", "TotalStudents": 394, "SiteCondition": "Fair", "EffectivenessSpaces": "Poor", "PctHighNeed": 86.1, "PctEll": 51, "PctFlne": 57.6, "latLng": [42.3219, -71.1063], "buildingCondition": "Fair", "learningEnvironments": "Fair" },
{ "Name": "Kenny, Thomas J. Elementary", "gradeLevel": "Elementary School", "TotalStudents": 312, "SiteCondition": "Good", "EffectivenessSpaces": "Poor", "PctHighNeed": 84.8, "PctEll": 33.2, "PctFlne": 45.1, "latLng": [42.2865, -71.0532], "buildingCondition": "Fair", "learningEnvironments": "Fair" },
{ "Name": "UP Academy Holland", "gradeLevel": "Elementary School", "TotalStudents": 753, "SiteCondition": "Good", "EffectivenessSpaces": "Fair", "PctHighNeed": 84.8, "PctEll": 33.2, "PctFlne": 45.1, "latLng": [42.306, -71.0736], "buildingCondition": "Good", "learningEnvironments": "Fair" },
{ "Name": "Philbrick, John D. Elementary", "gradeLevel": "Elementary School", "TotalStudents": 165, "SiteCondition": "Fair", "EffectivenessSpaces": "Poor", "PctHighNeed": 60.5, "PctEll": 19.2, "PctFlne": 23.3, "latLng": [42.2854, -71.1177], "buildingCondition": "Fair", "learningEnvironments": "Poor" },
{ "Name": "McCormack, John W Middle", "gradeLevel": "Middle School", "TotalStudents": 519, "SiteCondition": "Good", "EffectivenessSpaces": "Fair", "PctHighNeed": 89.2, "PctEll": 30.2, "PctFlne": 55.4, "latLng": [42.318, -71.0437], "buildingCondition": "Good", "learningEnvironments": "Fair" },
{ "Name": "Winthrop, John Elementary", "gradeLevel": "Elementary School", "TotalStudents": 349, "SiteCondition": "Fair", "EffectivenessSpaces": "Poor", "PctHighNeed": 82.1, "PctEll": 25.5, "PctFlne": 35.6, "latLng": [42.3184, -71.0753], "buildingCondition": "Fair", "learningEnvironments": "Fair" },
{ "Name": "Tynan, Joseph P. Elementary", "gradeLevel": "Elementary School", "TotalStudents": 342, "SiteCondition": "Fair", "EffectivenessSpaces": "Fair", "PctHighNeed": 92.5, "PctEll": 30.2, "PctFlne": 34.3, "latLng": [42.3345, -71.039], "buildingCondition": "Good", "learningEnvironments": "Fair" },
{ "Name": "Hurley, Joseph K-8", "gradeLevel": "K-8", "TotalStudents": 346, "SiteCondition": "Good", "EffectivenessSpaces": "Poor", "PctHighNeed": 71.4, "PctEll": 53.3, "PctFlne": 65.2, "latLng": [42.3387, -71.0777], "buildingCondition": "Good", "learningEnvironments": "Good" },
{ "Name": "Lee, Joseph K-8", "gradeLevel": "K-8", "TotalStudents": 629, "SiteCondition": "Good", "EffectivenessSpaces": "Fair", "PctHighNeed": 82, "PctEll": 17.8, "PctFlne": 27.5, "latLng": [42.2921, -71.0803], "buildingCondition": "Good", "learningEnvironments": "Fair" },
{ "Name": "Manning, Joseph P. Elementary", "gradeLevel": "Elementary School", "TotalStudents": 162, "SiteCondition": "Fair", "EffectivenessSpaces": "Poor", "PctHighNeed": 49.4, "PctEll": 7.6, "PctFlne": 12.7, "latLng": [42.3055, -71.1314], "buildingCondition": "Fair", "learningEnvironments": "Fair" },
{ "Name": "Kilmer, Joyce K-8 (Lower School)", "gradeLevel": "K-8", "TotalStudents": 243, "SiteCondition": "Good", "EffectivenessSpaces": "Poor", "PctHighNeed": 48, "PctEll": 12, "PctFlne": 23, "latLng": [42.2718, -71.1625], "buildingCondition": "Fair", "learningEnvironments": "Poor" },
{ "Name": "Kilmer, Joyce K-8 (Upper School)", "gradeLevel": "K-8", "TotalStudents": 195, "SiteCondition": "Fair", "EffectivenessSpaces": "Poor", "PctHighNeed": 48, "PctEll": 12, "PctFlne": 23, "latLng": [42.2926, -71.1522], "buildingCondition": "Fair", "learningEnvironments": "Fair" },
{ "Name": "Harvard/Kent Elementary", "gradeLevel": "Elementary School", "TotalStudents": 520, "SiteCondition": "Good", "EffectivenessSpaces": "Fair", "PctHighNeed": 91.3, "PctEll": 47.1, "PctFlne": 56.4, "latLng": [42.3769, -71.0576], "buildingCondition": "Fair", "learningEnvironments": "Good" },
{ "Name": "Dorchester Academy*", "gradeLevel": "High School", "TotalStudents": 69, "SiteCondition": "Fair", "EffectivenessSpaces": "Poor", "PctHighNeed": 91.3, "PctEll": 47.1, "PctFlne": 56.4, "latLng": [42.3009, -71.0619], "buildingCondition": "Good", "learningEnvironments": "Good" },
{ "Name": "Bradley, Manassah E. Elementary", "gradeLevel": "Elementary School", "TotalStudents": 309, "SiteCondition": "Fair", "EffectivenessSpaces": "Poor", "PctHighNeed": 75.5, "PctEll": 38.1, "PctFlne": 59.8, "latLng": [42.3916, -71.0051], "buildingCondition": "Fair", "learningEnvironments": "Poor" },
{ "Name": "Mattahunt Elementary", "gradeLevel": "Elementary School", "TotalStudents": 616, "SiteCondition": "Fair", "EffectivenessSpaces": "Fair", "PctHighNeed": 83, "PctEll": 30.8, "PctFlne": 35.6, "latLng": [42.2763, -71.1034], "buildingCondition": "Excellent", "learningEnvironments": "Fair" },
{ "Name": "Mather Elementary", "gradeLevel": "Elementary School", "TotalStudents": 601, "SiteCondition": "Fair", "EffectivenessSpaces": "Fair", "PctHighNeed": 82.3, "PctEll": 43.6, "PctFlne": 49.6, "latLng": [42.308, -71.0624], "buildingCondition": "Fair", "learningEnvironments": "Fair" },
{ "Name": "Tobin, Maurice J. K-8", "gradeLevel": "K-8", "TotalStudents": 453, "SiteCondition": "Fair", "EffectivenessSpaces": "Poor", "PctHighNeed": 86.7, "PctEll": 33.8, "PctFlne": 42.4, "latLng": [42.333, -71.0983], "buildingCondition": "Fair", "learningEnvironments": "Poor" },
{ "Name": "Perkins, Michael J. Elementary", "gradeLevel": "Elementary School", "TotalStudents": 230, "SiteCondition": "Fair", "EffectivenessSpaces": "Deficient", "PctHighNeed": 89.1, "PctEll": 18.5, "PctFlne": 26.1, "latLng": [42.3312, -71.0531], "buildingCondition": "Fair", "learningEnvironments": "Fair" },
{ "Name": "Mozart, Wolfgang A. Elementary", "gradeLevel": "Elementary School", "TotalStudents": 176, "SiteCondition": "Fair", "EffectivenessSpaces": "Poor", "PctHighNeed": 60, "PctEll": 20.6, "PctFlne": 25.1, "latLng": [42.2812, -71.141], "buildingCondition": "Fair", "learningEnvironments": "Fair" },
{ "Name": "Murphy, Richard K-8", "gradeLevel": "K-8", "TotalStudents": 917, "SiteCondition": "Fair", "EffectivenessSpaces": "Fair", "PctHighNeed": 66.5, "PctEll": 24.9, "PctFlne": 47.3, "latLng": [42.2943, -71.0493], "buildingCondition": "Good", "learningEnvironments": "Fair" },
{ "Name": "UP Academy Boston", "gradeLevel": "Middle School", "TotalStudents": 472, "SiteCondition": "Poor", "EffectivenessSpaces": "Fair", "PctHighNeed": 66.5, "PctEll": 24.9, "PctFlne": 47.3, "latLng": [42.3336, -71.0508], "buildingCondition": "Fair", "learningEnvironments": "Fair" },
{ "Name": "Hale, Nathan Elementary", "gradeLevel": "Elementary School", "TotalStudents": 169, "SiteCondition": "Poor", "EffectivenessSpaces": "Poor", "PctHighNeed": 69, "PctEll": 14.9, "PctFlne": 23.6, "latLng": [42.3252, -71.0912], "buildingCondition": "Fair", "learningEnvironments": "Fair" },
{ "Name": "Perry, Oliver Hazard K-8", "gradeLevel": "K-8", "TotalStudents": 232, "SiteCondition": "Fair", "EffectivenessSpaces": "Poor", "PctHighNeed": 58.1, "PctEll": 18.9, "PctFlne": 22.5, "latLng": [42.3324, -71.0302], "buildingCondition": "Fair", "learningEnvironments": "Fair" },
{ "Name": "Orchard Gardens K-8", "gradeLevel": "K-8", "TotalStudents": 844, "SiteCondition": "Good", "EffectivenessSpaces": "Good", "PctHighNeed": 89.8, "PctEll": 54.3, "PctFlne": 66.8, "latLng": [42.3306, -71.0773], "buildingCondition": "Excellent", "learningEnvironments": "Good" },
{ "Name": "Ohrenberger, William H. K-8", "gradeLevel": "K-8", "TotalStudents": 629, "SiteCondition": "Fair", "EffectivenessSpaces": "Poor", "PctHighNeed": 66.1, "PctEll": 25.1, "PctFlne": 42, "latLng": [42.2608, -71.1497], "buildingCondition": "Good", "learningEnvironments": "Good" },
{ "Name": "Lyndon, Patrick K-8", "gradeLevel": "K-8", "TotalStudents": 552, "SiteCondition": "Good", "EffectivenessSpaces": "Poor", "PctHighNeed": 46, "PctEll": 19.1, "PctFlne": 30.4, "latLng": [42.2829, -71.1586], "buildingCondition": "Good", "learningEnvironments": "Poor" },
{ "Name": "Kennedy, Patrick Elementary", "gradeLevel": "Elementary School", "TotalStudents": 302, "SiteCondition": "Fair", "EffectivenessSpaces": "Poor", "PctHighNeed": 91.6, "PctEll": 74.4, "PctFlne": 88.2, "latLng": [42.3785, -71.0305], "buildingCondition": "Fair", "learningEnvironments": "Fair" },
{ "Name": "Henderson, Dr. William W. Inclusion (Lower School)", "gradeLevel": "Elementary School", "TotalStudents": 217, "SiteCondition": "Fair", "EffectivenessSpaces": "Poor", "PctHighNeed": 63.1, "PctEll": 25.8, "PctFlne": 26.3, "latLng": [42.2938, -71.0621], "buildingCondition": "Fair", "learningEnvironments": "Poor" },
{ "Name": "Bates, Phineas Elementary", "gradeLevel": "Elementary School", "TotalStudents": 297, "SiteCondition": "Fair", "EffectivenessSpaces": "Poor", "PctHighNeed": 65, "PctEll": 25, "PctFlne": 34.6, "latLng": [42.2777, -71.1354], "buildingCondition": "Fair", "learningEnvironments": "Fair" },
{ "Name": "Quincy, Josiah Elementary", "gradeLevel": "Elementary School", "TotalStudents": 796, "SiteCondition": "Good", "EffectivenessSpaces": "Poor", "PctHighNeed": 82.2, "PctEll": 57.7, "PctFlne": 66, "latLng": [42.348, -71.065], "buildingCondition": "Fair", "learningEnvironments": "Fair" },
{ "Name": "Quincy, Josiah Upper (Modulars)", "gradeLevel": "High School", "TotalStudents": 0, "SiteCondition": "Not Assessed", "EffectivenessSpaces": "Not Assessed", "PctHighNeed": 82.2, "PctEll": 57.7, "PctFlne": 66, "latLng": [42.3476, -71.0639], "buildingCondition": "Not Assessed", "learningEnvironments": "Not Assessed" },
{ "Name": "Clap Innovation School", "gradeLevel": "Elementary School", "TotalStudents": 158, "SiteCondition": "Good", "EffectivenessSpaces": "Poor", "PctHighNeed": 72.4, "PctEll": 27.1, "PctFlne": 32.4, "latLng": [42.3231, -71.0585], "buildingCondition": "Fair", "learningEnvironments": "Poor" },
{ "Name": "Adams, Samuel Elementary", "gradeLevel": "Elementary School", "TotalStudents": 302, "SiteCondition": "Fair", "EffectivenessSpaces": "Poor", "PctHighNeed": 90.8, "PctEll": 72.1, "PctFlne": 77.2, "latLng": [42.3656, -71.0349], "buildingCondition": "Poor", "learningEnvironments": "Poor" },
{ "Name": "Mason, Samuel W. Elementary", "gradeLevel": "Elementary School", "TotalStudents": 231, "SiteCondition": "Poor", "EffectivenessSpaces": "Poor", "PctHighNeed": 81.4, "PctEll": 26.8, "PctFlne": 36.4, "latLng": [42.3261, -71.0713], "buildingCondition": "Fair", "learningEnvironments": "Poor" },
{ "Name": "Greenwood, Sarah K-8", "gradeLevel": "K-8", "TotalStudents": 0, "SiteCondition": "Good", "EffectivenessSpaces": "Poor", "PctHighNeed": 87.7, "PctEll": 47.9, "PctFlne": 61.7, "latLng": [42.2966, -71.0807], "buildingCondition": "Fair", "learningEnvironments": "Fair" },
{ "Name": "Gardner Pilot Academy K-8", "gradeLevel": "K-8", "TotalStudents": 368, "SiteCondition": "Good", "EffectivenessSpaces": "Poor", "PctHighNeed": 82, "PctEll": 48.9, "PctFlne": 66.8, "latLng": [42.3608, -71.134], "buildingCondition": "Good", "learningEnvironments": "Poor" },
{ "Name": "Dearborn STEM Academy*", "gradeLevel": "High School", "TotalStudents": 262, "SiteCondition": "Not Assessed", "EffectivenessSpaces": "Not Assessed", "PctHighNeed": 82, "PctEll": 48.9, "PctFlne": 66.8, "latLng": [42.3264, -71.0808], "buildingCondition": "Not Assessed", "learningEnvironments": "Not Assessed" },
{ "Name": "Warren/Prescott K-8 Lower", "gradeLevel": "K-8", "TotalStudents": 486, "SiteCondition": "Fair", "EffectivenessSpaces": "Fair", "PctHighNeed": 54.3, "PctEll": 12.4, "PctFlne": 22.2, "latLng": [42.3779, -71.0646], "buildingCondition": "Good", "learningEnvironments": "Fair" },
{ "Name": "Warren/Prescott K-8 Upper", "gradeLevel": "K-8", "TotalStudents": 59, "SiteCondition": "Not Assessed", "EffectivenessSpaces": "Not Assessed", "PctHighNeed": 54.3, "PctEll": 12.4, "PctFlne": 22.2, "latLng": [42.3782, -71.0651], "buildingCondition": "Not Assessed", "learningEnvironments": "Not Assessed" },
{ "Name": "Channing, William E. Elementary", "gradeLevel": "Elementary School", "TotalStudents": 292, "SiteCondition": "Poor", "EffectivenessSpaces": "Poor", "PctHighNeed": 67.6, "PctEll": 22.1, "PctFlne": 30.3, "latLng": [42.2516, -71.1333], "buildingCondition": "Fair", "learningEnvironments": "Poor" },
{ "Name": "McKinley Middle", "gradeLevel": "Special", "TotalStudents": 55, "SiteCondition": "Poor", "EffectivenessSpaces": "Poor", "PctHighNeed": 99.7, "PctEll": 21.7, "PctFlne": 27.9, "latLng": [42.3479, -71.1068], "buildingCondition": "Fair", "learningEnvironments": "Poor" },
{ "Name": "McKinley, Wm So. End Academy", "gradeLevel": "Special", "TotalStudents": 222, "SiteCondition": "Good", "EffectivenessSpaces": "Fair", "PctHighNeed": 99.7, "PctEll": 21.7, "PctFlne": 27.9, "latLng": [42.3443, -71.0735], "buildingCondition": "Good", "learningEnvironments": "Poor" },
{ "Name": "McKinley, Wm. Preparatory High ", "gradeLevel": "Special", "TotalStudents": 103, "SiteCondition": "Poor", "EffectivenessSpaces": "Poor", "PctHighNeed": 99.7, "PctEll": 21.7, "PctFlne": 27.9, "latLng": [42.3435, -71.0991], "buildingCondition": "Fair", "learningEnvironments": "Poor" },
{ "Name": "Russell, William E. Elementary", "gradeLevel": "Elementary School", "TotalStudents": 402, "SiteCondition": "Fair", "EffectivenessSpaces": "Poor", "PctHighNeed": 89.6, "PctEll": 59.2, "PctFlne": 67.3, "latLng": [42.3204, -71.0595], "buildingCondition": "Fair", "learningEnvironments": "Fair" },
{ "Name": "Trotter, William Monroe K-8", "gradeLevel": "K-8", "TotalStudents": 511, "SiteCondition": "Fair", "EffectivenessSpaces": "Poor", "PctHighNeed": 83.6, "PctEll": 16.4, "PctFlne": 19.4, "latLng": [42.3158, -71.088], "buildingCondition": "Good", "learningEnvironments": "Fair" },
{ "Name": "Winship, F. Lyman Elementary", "gradeLevel": "Elementary School", "TotalStudents": 258, "SiteCondition": "Fair", "EffectivenessSpaces": "Poor", "PctHighNeed": 74.1, "PctEll": 30.5, "PctFlne": 47.3, "latLng": [42.3477, -71.155], "buildingCondition": "Fair", "learningEnvironments": "Poor" },
{ "Name": "Edison, Thomas A. K-8", "gradeLevel": "K-8", "TotalStudents": 765, "SiteCondition": "Fair", "EffectivenessSpaces": "Poor", "PctHighNeed": 84.9, "PctEll": 48.5, "PctFlne": 61.2, "latLng": [42.3455, -71.1602], "buildingCondition": "Good", "learningEnvironments": "Poor" },
{ "Name": "King, Martin Luther, Jr K-8", "gradeLevel": "K-8", "TotalStudents": 497, "SiteCondition": "Good", "EffectivenessSpaces": "Poor", "PctHighNeed": 85.3, "PctEll": 22, "PctFlne": 28.8, "latLng": [42.3111, -71.0765], "buildingCondition": "Fair", "learningEnvironments": "Fair" },
{ "Name": "Higginson/Lewis K-8", "gradeLevel": "K-8", "TotalStudents": 406, "SiteCondition": "Fair", "EffectivenessSpaces": "Poor", "PctHighNeed": 88.2, "PctEll": 19.4, "PctFlne": 27, "latLng": [42.3205, -71.0866], "buildingCondition": "Fair", "learningEnvironments": "Poor" },
{ "Name": "Mildred Avenue K-8", "gradeLevel": "K-8", "TotalStudents": 421, "SiteCondition": "Excellent", "EffectivenessSpaces": "Good", "PctHighNeed": 82.4, "PctEll": 25.9, "PctFlne": 36.2, "latLng": [42.2768, -71.0906], "buildingCondition": "Excellent", "learningEnvironments": "Excellent" },
{ "Name": "Young Achievers Science & Math K-8", "gradeLevel": "K-8", "TotalStudents": 542, "SiteCondition": "Fair", "EffectivenessSpaces": "Poor", "PctHighNeed": 79.2, "PctEll": 30.2, "PctFlne": 37.8, "latLng": [42.282, -71.0939], "buildingCondition": "Good", "learningEnvironments": "Fair" },
{ "Name": "Mission Hill K-8*", "gradeLevel": "K-8", "TotalStudents": 227, "SiteCondition": "Good", "EffectivenessSpaces": "Fair", "PctHighNeed": 62.7, "PctEll": 17.1, "PctFlne": 22.1, "latLng": [42.3073, -71.1145], "buildingCondition": "Good", "learningEnvironments": "Good" },
{ "Name": "Frederick, Lilla G. Middle", "gradeLevel": "Middle School", "TotalStudents": 472, "SiteCondition": "Excellent", "EffectivenessSpaces": "Good", "PctHighNeed": 90.8, "PctEll": 41.4, "PctFlne": 54.9, "latLng": [42.3092, -71.0756], "buildingCondition": "Excellent", "learningEnvironments": "Excellent" },
{ "Name": "Blackstone, William Elementary", "gradeLevel": "Elementary School", "TotalStudents": 595, "SiteCondition": "Fair", "EffectivenessSpaces": "Fair", "PctHighNeed": 91.1, "PctEll": 46.5, "PctFlne": 56.8, "latLng": [42.341, -71.0721], "buildingCondition": "Good", "learningEnvironments": "Fair" },
{ "Name": "Henderson, Dr. William W. Inclusion (Upper School)", "gradeLevel": "High School", "TotalStudents": 431, "SiteCondition": "Fair", "EffectivenessSpaces": "Poor", "PctHighNeed": 80.4, "PctEll": 11.5, "PctFlne": 25.1, "latLng": [42.2809, -71.0697], "buildingCondition": "Fair", "learningEnvironments": "Poor" },
{ "Name": "Edwards, Clarence R. Middle", "gradeLevel": "Middle School", "TotalStudents": 366, "SiteCondition": "Poor", "EffectivenessSpaces": "Poor", "PctHighNeed": 88.7, "PctEll": 42.4, "PctFlne": 68.4, "latLng": [42.3786, -71.0674], "buildingCondition": "Good", "learningEnvironments": "Poor" },
{ "Name": "Irving, Washington Middle", "gradeLevel": "Middle School", "TotalStudents": 380, "SiteCondition": "Fair", "EffectivenessSpaces": "Poor", "PctHighNeed": 75, "PctEll": 18, "PctFlne": 37.8, "latLng": [42.2834, -71.1254], "buildingCondition": "Good", "learningEnvironments": "Poor" },
{ "Name": "Timilty, James P. Middle", "gradeLevel": "Middle School", "TotalStudents": 432, "SiteCondition": "Fair", "EffectivenessSpaces": "Poor", "PctHighNeed": 87.3, "PctEll": 37.5, "PctFlne": 59, "latLng": [42.3306, -71.0912], "buildingCondition": "Fair", "learningEnvironments": "Poor" },
{ "Name": "Brighton High", "gradeLevel": "High School", "TotalStudents": 931, "SiteCondition": "Fair", "EffectivenessSpaces": "Poor", "PctHighNeed": 86.2, "PctEll": 41.6, "PctFlne": 59.3, "latLng": [42.349, -71.1455], "buildingCondition": "Fair", "learningEnvironments": "Poor" },
{ "Name": "Boston International Newcomers Academy", "gradeLevel": "High School", "TotalStudents": 375, "SiteCondition": "Poor", "EffectivenessSpaces": "Poor", "PctHighNeed": 99.5, "PctEll": 79.6, "PctFlne": 100, "latLng": [42.2812, -71.0809], "buildingCondition": "Fair", "learningEnvironments": "Poor" },
{ "Name": "Charlestown High", "gradeLevel": "High School", "TotalStudents": 958, "SiteCondition": "Good", "EffectivenessSpaces": "Fair", "PctHighNeed": 87.4, "PctEll": 41.5, "PctFlne": 61.9, "latLng": [42.3801, -71.0611], "buildingCondition": "Good", "learningEnvironments": "Fair" },
{ "Name": "Community Academy", "gradeLevel": "Special", "TotalStudents": 40, "SiteCondition": "Poor", "EffectivenessSpaces": "Poor", "PctHighNeed": 75, "PctEll": 9.1, "PctFlne": 15.9, "latLng": [42.3089, -71.1035], "buildingCondition": "Poor", "learningEnvironments": "Poor" },
{ "Name": "Excel High", "gradeLevel": "High School", "TotalStudents": 519, "SiteCondition": "Fair", "EffectivenessSpaces": "Fair", "PctHighNeed": 84.4, "PctEll": 29.7, "PctFlne": 53.9, "latLng": [42.3329, -71.0448], "buildingCondition": "Fair", "learningEnvironments": "Poor" },
{ "Name": "Burke, Jeremiah E. High*", "gradeLevel": "High School", "TotalStudents": 532, "SiteCondition": "Good", "EffectivenessSpaces": "Fair", "PctHighNeed": 82.6, "PctEll": 34.4, "PctFlne": 49.7, "latLng": [42.3072, -71.0812], "buildingCondition": "Fair", "learningEnvironments": "Poor" },
{ "Name": "East Boston High", "gradeLevel": "High School", "TotalStudents": 1495, "SiteCondition": "Good", "EffectivenessSpaces": "Poor", "PctHighNeed": 80.2, "PctEll": 43.4, "PctFlne": 76.7, "latLng": [42.3809, -71.0351], "buildingCondition": "Good", "learningEnvironments": "Poor" },
{ "Name": "English High, The", "gradeLevel": "High School", "TotalStudents": 586, "SiteCondition": "Good", "EffectivenessSpaces": "Fair", "PctHighNeed": 82.6, "PctEll": 37.8, "PctFlne": 54.2, "latLng": [42.3066, -71.1092], "buildingCondition": "Good", "learningEnvironments": "Fair" },
{ "Name": "Madison Park Technical Vocational High", "gradeLevel": "High School", "TotalStudents": 903, "SiteCondition": "Good", "EffectivenessSpaces": "Fair", "PctHighNeed": 87.9, "PctEll": 33.7, "PctFlne": 57.1, "latLng": [42.3321, -71.0908], "buildingCondition": "Good", "learningEnvironments": "Good" },
{ "Name": "Fenway High", "gradeLevel": "High School", "TotalStudents": 337, "SiteCondition": "Good", "EffectivenessSpaces": "Fair", "PctHighNeed": 66.9, "PctEll": 20, "PctFlne": 50.8, "latLng": [42.3307, -71.0993], "buildingCondition": "Excellent", "learningEnvironments": "Good" },
{ "Name": "Another Course to College*", "gradeLevel": "High School", "TotalStudents": 237, "SiteCondition": "Good", "EffectivenessSpaces": "Poor", "PctHighNeed": 73.1, "PctEll": 17, "PctFlne": 48, "latLng": [42.3504, -71.1456], "buildingCondition": "Good", "learningEnvironments": "Fair" },
{ "Name": "New Mission High*", "gradeLevel": "High School", "TotalStudents": 319, "SiteCondition": "Fair", "EffectivenessSpaces": "Fair", "PctHighNeed": 60.9, "PctEll": 5.9, "PctFlne": 32.5, "latLng": [42.2628, -71.1179], "buildingCondition": "Good", "learningEnvironments": "Fair" },
{ "Name": "Greater Egleston Community High", "gradeLevel": "High School", "TotalStudents": 182, "SiteCondition": "Not Assessed", "EffectivenessSpaces": "Poor", "PctHighNeed": 75.1, "PctEll": 24, "PctFlne": 55.1, "latLng": [42.3141, -71.0993], "buildingCondition": "Not Assessed", "learningEnvironments": "Excellent" },
{ "Name": "Boston Latin Academy", "gradeLevel": "High School", "TotalStudents": 1718, "SiteCondition": "Fair", "EffectivenessSpaces": "Fair", "PctHighNeed": 36.6, "PctEll": 1.8, "PctFlne": 41.6, "latLng": [42.3162, -71.0845], "buildingCondition": "Good", "learningEnvironments": "Poor" },
{ "Name": "Boston Arts Academy", "gradeLevel": "High School", "TotalStudents": 437, "SiteCondition": "Poor", "EffectivenessSpaces": "Fair", "PctHighNeed": 55.3, "PctEll": 4.5, "PctFlne": 35.8, "latLng": [42.3462, -71.095], "buildingCondition": "Good", "learningEnvironments": "Fair" },
{ "Name": "Boston Adult Technical Academy", "gradeLevel": "Special", "TotalStudents": 170, "SiteCondition": "Fair", "EffectivenessSpaces": "Poor", "PctHighNeed": 93.4, "PctEll": 74.6, "PctFlne": 78.2, "latLng": [42.3488, -71.0682], "buildingCondition": "Good", "learningEnvironments": "Good" },
{ "Name": "Muniz, Margarita Academy*", "gradeLevel": "High School", "TotalStudents": 302, "SiteCondition": "Good", "EffectivenessSpaces": "Poor", "PctHighNeed": 86.3, "PctEll": 50.7, "PctFlne": 84.5, "latLng": [42.3073, -71.1145], "buildingCondition": "Excellent", "learningEnvironments": "Good" },
{ "Name": "Boston Community Leadership Academy*", "gradeLevel": "High School", "TotalStudents": 506, "SiteCondition": "Fair", "EffectivenessSpaces": "Fair", "PctHighNeed": 77.2, "PctEll": 24.6, "PctFlne": 61, "latLng": [42.2628, -71.1179], "buildingCondition": "Good", "learningEnvironments": "Fair" },
{ "Name": "Boston Latin School", "gradeLevel": "High School", "TotalStudents": 2439, "SiteCondition": "Good", "EffectivenessSpaces": "Fair", "PctHighNeed": 20.8, "PctEll": 3.2, "PctFlne": 32.7, "latLng": [42.338, -71.1013], "buildingCondition": "Good", "learningEnvironments": "Fair" },
{ "Name": "Quincy, Josiah Upper School", "gradeLevel": "High School", "TotalStudents": 507, "SiteCondition": "Not Assessed", "EffectivenessSpaces": "Not Assessed", "PctHighNeed": 76.7, "PctEll": 16.2, "PctFlne": 68.2, "latLng": [42.3484, -71.0689], "buildingCondition": "Not Assessed", "learningEnvironments": "Not Assessed" },
{ "Name": "O'Bryant, John D. School of Mathematics & Science", "gradeLevel": "High School", "TotalStudents": 1428, "SiteCondition": "Excellent", "EffectivenessSpaces": "Poor", "PctHighNeed": 52, "PctEll": 3.5, "PctFlne": 53, "latLng": [42.3308, -71.0884], "buildingCondition": "Good", "learningEnvironments": "Good" },
{ "Name": "Urban Science Academy*", "gradeLevel": "High School", "TotalStudents": 497, "SiteCondition": "Good", "EffectivenessSpaces": "Fair", "PctHighNeed": 69.2, "PctEll": 12.7, "PctFlne": 37.3, "latLng": [42.2822, -71.1745], "buildingCondition": "Good", "learningEnvironments": "Fair" },
{ "Name": "Community Academy of Science & Health*", "gradeLevel": "High School", "TotalStudents": 414, "SiteCondition": "Fair", "EffectivenessSpaces": "Fair", "PctHighNeed": 86.6, "PctEll": 31, "PctFlne": 45.8, "latLng": [42.3009, -71.0619], "buildingCondition": "Fair", "learningEnvironments": "Fair" },
{ "Name": "Lyon, Mary High", "gradeLevel": "High School", "TotalStudents": 131, "SiteCondition": "Fair", "EffectivenessSpaces": "Poor", "PctHighNeed": 78.6, "PctEll": 9.5, "PctFlne": 34.1, "latLng": [42.3522, -71.1608], "buildingCondition": "Good", "learningEnvironments": "Poor" },
{ "Name": "Umana Academy, Mario K-8", "gradeLevel": "K-8", "TotalStudents": 837, "SiteCondition": "Fair", "EffectivenessSpaces": "Poor", "PctHighNeed": 86.2, "PctEll": 53.7, "PctFlne": 78.6, "latLng": [42.3784, -71.0407], "buildingCondition": "Good", "learningEnvironments": "Poor" },
{ "Name": "TechBoston Academy", "gradeLevel": "High School", "TotalStudents": 982, "SiteCondition": "Fair", "EffectivenessSpaces": "Fair", "PctHighNeed": 81.7, "PctEll": 22.7, "PctFlne": 45.4, "latLng": [42.2853, -71.0759], "buildingCondition": "Fair", "learningEnvironments": "Fair" },
{ "Name": "Snowden International School at Copley", "gradeLevel": "High School", "TotalStudents": 373, "SiteCondition": "Not Assessed", "EffectivenessSpaces": "Poor", "PctHighNeed": 75.6, "PctEll": 18.9, "PctFlne": 52.6, "latLng": [42.3505, -71.078], "buildingCondition": "Not Assessed", "learningEnvironments": "Poor" },
{ "Name": "Hernandez, Rafael K-8", "gradeLevel": "K-8", "TotalStudents": 399, "SiteCondition": "Fair", "EffectivenessSpaces": "Poor", "PctHighNeed": 82.8, "PctEll": 61.2, "PctFlne": 76.2, "latLng": [42.3139, -71.0978], "buildingCondition": "Fair", "learningEnvironments": "Poor" },
{ "Name": "Horace Mann School for the Deaf and Hard of Hearing*", "gradeLevel": "Special", "TotalStudents": 101, "SiteCondition": "Fair", "EffectivenessSpaces": "Poor", "PctHighNeed": 100, "PctEll": 44.4, "PctFlne": 60, "latLng": [42.352, -71.1377], "buildingCondition": "Good", "learningEnvironments": "Poor" },
{ "Name": "Dudley Street Neighborhood School", "gradeLevel": "Elementary School", "TotalStudents": 292, "SiteCondition": "Fair", "EffectivenessSpaces": "Poor", "PctHighNeed": 68.2, "PctEll": 17.8, "PctFlne": 35.3, "latLng": [42.3236, -71.0731], "buildingCondition": "Fair", "learningEnvironments": "Fair" },
{ "Name": "Boston Green Academy*", "gradeLevel": "High School", "TotalStudents": 437, "SiteCondition": "Good", "EffectivenessSpaces": "Poor", "PctHighNeed": 75, "PctEll": 13, "PctFlne": 33, "latLng": [42.3504, -71.1456], "buildingCondition": "Good", "learningEnvironments": "Fair" },
{ "Name": "Kennedy, Edward M. Academy for Health Careers 11-12", "gradeLevel": "High School", "TotalStudents": 166, "SiteCondition": "Not Assessed", "EffectivenessSpaces": "Deficient", "PctHighNeed": 68, "PctEll": 13.6, "PctFlne": 50.7, "latLng": [42.3415, -71.0915], "buildingCondition": "Not Assessed", "learningEnvironments": "Fair" }
]
