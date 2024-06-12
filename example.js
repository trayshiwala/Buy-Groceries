var ul = document.querySelector('ul');
var newItemEnd = document.createElement('li');
newItemEnd.textContent = 'cream';
ul.appendChild(newItemEnd);

var newItemStart = document.createElement('li');
newItemStart.textContent = 'kale';
ul.insertBefore(newItemStart, ul.firstChild);

var listItems = ul.querySelectorAll('li');
for (var i = 0; i < listItems.length; i++) {
  listItems[i].classList.add('cool');
}

var heading = document.querySelector('h2');
var headingText = heading.firstChild.nodeValue;
var totalItems = listItems.length;
var newHeading = headingText + ' <span>' + totalItems + '</span>';
heading.innerHTML = newHeading;