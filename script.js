const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

customname.focus();

function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

var storyText = 'На улице было 94 градуса по Фаренгейту, когда :insertx: вышел на прогулку. Подходя к :inserty:, он остановился и :insertz:. Перед ним стоял Димасик, который после каникул стал весить 300 фунтов и его жир таял под палящим солнцем.';

var insertX = ['Джонни',
    'Big Daddy',
    'Богдан']

var insertY = ['рыгаловке',
    'бичёрочке',
    'ПКГХ']

var insertZ = ['закурил',
    'покрылся холодным потом',
    'открыл рот от удивления']

randomize.addEventListener('click', result);

function result() {

    var newStory = storyText;
    if (customName.value !== '') {
        const name = customName.value;
        newStory = newStory.replace('Димасик', name);
    }

    if (document.getElementById("ru").checked) {
        const weight = Math.round(300*0.45359237) + ' килограмм';
        const temperature = Math.round((94-32)/1.8) + ' градуса по Цельсию';
        newStory = newStory.replace('300 фунтов', weight);
        newStory = newStory.replace('94 градуса по Фаренгейту', temperature);
    }

    var xItem = randomValueFromArray(insertX);
    var yItem = randomValueFromArray(insertY);
    var zItem = randomValueFromArray(insertZ);
    newStory = newStory.replace(':insertx:', xItem);
    newStory = newStory.replace(':inserty:', yItem);
    newStory = newStory.replace(':insertz:', zItem);
    story.textContent = newStory;
    story.style.visibility = 'visible';
}