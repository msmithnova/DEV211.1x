var testVariable;
var isUndefined = (testVariable === undefined);
var isNull = (testVariable === null);
var isEmpty = (testVariable === '');
document.getElementById('isUndefined').innerHTML = isUndefined;
document.getElementById('isNull').innerHTML = isNull;
document.getElementById('isEmpty').innerHTML = isEmpty;

testVariable = '';
isUndefined = (testVariable === undefined);
isNull = (testVariable === null);
isEmpty = (testVariable === '');
document.getElementById('isUndefined2').innerHTML = isUndefined;
document.getElementById('isNull2').innerHTML = isNull;
document.getElementById('isEmpty2').innerHTML = isEmpty;

testVariable = null;
isUndefined = (testVariable === undefined);
isNull = (testVariable === null);
isEmpty = (testVariable === '');
document.getElementById('isUndefined3').innerHTML = isUndefined;
document.getElementById('isNull3').innerHTML = isNull;
document.getElementById('isEmpty3').innerHTML = isEmpty;