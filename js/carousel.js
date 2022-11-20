'use strict';

class Carousel {
  constructor(el) {
    this.el = el;
    this.carouselOptions = ['previous', 'add', 'play', 'next'];
    this.carouselData = [
      {
        'id': 'p3_img_1',
        'src': 'https://f6-zpcloud.zdn.vn/797216512461421204/43ac49ed4a558c0bd544.jpg',
      },
      {
        'id': 'p3_img_2',
        'src': 'https://f8-zpcloud.zdn.vn/2595022385804836387/9f71325721efe7b1befe.jpg',
      },
      {
        'id': 'p3_img_3',
        'src': 'https://f6-zpcloud.zdn.vn/2159454828861365001/26f14fae6b16ad48f407.jpg',
      },
      {
        'id': 'p3_img_4',
        'src': 'https://scontent.fhan5-11.fna.fbcdn.net/v/t1.6435-9/74205731_2325854374204274_4455716870938427392_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e3f864&_nc_ohc=BxnFB8vlAAcAX8cuPkC&_nc_ht=scontent.fhan5-11.fna&oh=00_AfBHCkmFShneecPS_fUbJULvRg7TmMDqqDa5_Ff2IW2d5g&oe=638AB23A',
      },
      {
        'id': 'p3_img_5',
        'src': 'https://f7-zpcloud.zdn.vn/4918227599693308574/bc87f0771cceda9083df.jpg',
      }
    ];
    this.carouselInView = [1, 2, 3, 4, 5];
    this.carouselContainer;
    this.carouselPlayState;
  }

  mounted() {
    this.setupCarousel();
  }

  // Build carousel html
  setupCarousel() {
    const container = document.createElement('div');
    const controls = document.createElement('div');

    // Add container for carousel items and controls
    this.el.append(container, controls);
    container.className = 'carousel-container';
    controls.className = 'carousel-controls';

    // Take dataset array and append items to container
    this.carouselData.forEach((item, index) => {
      const carouselItem = item.src ? document.createElement('img') : document.createElement('div');

      container.append(carouselItem);
      
      // Add item attributes
      carouselItem.className = `carousel-item carousel-item-${index + 1}`;
      carouselItem.src = item.src;
      carouselItem.setAttribute('loading', 'lazy');
      // Used to keep track of carousel items, infinite items possible in carousel however min 5 items required
      carouselItem.setAttribute('data-index', `${index + 1}`);
    });

    this.carouselOptions.forEach((option) => {
      const btn = document.createElement('button');
      const axSpan = document.createElement('span');

      // Add accessibilty spans to button
      axSpan.innerText = option;
      axSpan.className = 'ax-hidden';
      btn.append(axSpan);

      // Add button attributes
      btn.className = `carousel-control carousel-control-${option}`;
      btn.setAttribute('data-name', option);

      // Add carousel control options
      controls.append(btn);
    });

    // After rendering carousel to our DOM, setup carousel controls' event listeners
    this.setControls([...controls.children]);

    // Set container property
    this.carouselContainer = container;
  }

  setControls(controls) {
    controls.forEach(control => {
      control.onclick = (event) => {
        event.preventDefault();

        // Manage control actions, update our carousel data first then with a callback update our DOM
        this.controlManager(control.dataset.name);
      };
    });
  }

  controlManager(control) {
    if (control === 'previous') return this.previous();
    if (control === 'next') return this.next();
    if (control === 'play') return this.play();

    return;
  }

  previous() {
    // Update order of items in data array to be shown in carousel
    this.carouselData.unshift(this.carouselData.pop());

    // Push the first item to the end of the array so that the previous item is front and center
    this.carouselInView.push(this.carouselInView.shift());

    // Update the css class for each carousel item in view
    this.carouselInView.forEach((item, index) => {
      this.carouselContainer.children[index].className = `carousel-item carousel-item-${item}`;
    });

    // Using the first 5 items in data array update content of carousel items in view
    this.carouselData.slice(0, 5).forEach((data, index) => {
      document.querySelector(`.carousel-item-${index + 1}`).src = data.src;
    });
  }

  next() {
    // Update order of items in data array to be shown in carousel
    this.carouselData.push(this.carouselData.shift());

    // Take the last item and add it to the beginning of the array so that the next item is front and center
    this.carouselInView.unshift(this.carouselInView.pop());

    // Update the css class for each carousel item in view
    this.carouselInView.forEach((item, index) => {
      this.carouselContainer.children[index].className = `carousel-item carousel-item-${item}`;
    });

    // Using the first 5 items in data array update content of carousel items in view
    this.carouselData.slice(0, 5).forEach((data, index) => {
      document.querySelector(`.carousel-item-${index + 1}`).src = data.src;
    });
  }

  play() {
    const playBtn = document.querySelector('.carousel-control-play');
    const startPlaying = () => this.next();

    if (playBtn.classList.contains('playing')) {
      // Remove class to return to play button state/appearance
      playBtn.classList.remove('playing');

      // Remove setInterval
      clearInterval(this.carouselPlayState); 
      this.carouselPlayState = null; 
    } else {
      // Add class to change to pause button state/appearance
      playBtn.classList.add('playing');

      // First run initial next method
      this.next();

      // Use play state prop to store interval ID and run next method on a 12 second interval
      this.carouselPlayState = setInterval(startPlaying, 8000);
    };
  }
}

// Refers to the carousel root element you want to target, use specific class selectors if using multiple carousels
const el = document.querySelector('.carousel');
// Create a new carousel object
const exampleCarousel = new Carousel(el);
// Setup carousel and methods
exampleCarousel.mounted();

