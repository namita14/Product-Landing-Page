var x = 0;
var span = document.querySelector('span'); // find the <span> element in the DOM
var increment = document.getElementById('increment'); // find the element with the ID 'increment'
var decrement = document.getElementById('decrement'); // find the element with the ID 'decrement'

increment.addEventListener('click', function () {
  // this function is executed whenever the user clicks the increment button
  span.textContent = x++;
});

decrement.addEventListener('click', function () {
  // this function is executed whenever the user clicks the decrement button
  span.textContent = x--;
});


var thumbnails = document.getElementsByClassName('thumbnail')
var activeImages = document.getElementsByClassName('active')
for (var i=0; i < thumbnails.length; i++){

			thumbnails[i].addEventListener('mouseover', function(){
				console.log(activeImages)

				if (activeImages.length > 0){
					activeImages[0].classList.remove('active')
				}


				this.classList.add('active')
				document.getElementById('featured').src = this.src
			})
		}

var buttonRight = document.getElementById('slideRight');
var buttonLeft = document.getElementById('slideLeft');

buttonLeft.addEventListener('click', function(){
  document.getElementById('slider').scrollLeft -= 180
});

buttonRight.addEventListener('click', function(){
  document.getElementById('slider').scrollLeft += 180
});
