// Mission Data
const missionsData = [
    {
      title: "Artemis Program",
      description: "NASA's mission to return humans to the Moon by 2025.",
      image: "moon.avif"
    },
    {
      title: "Mars 2020",
      description: "Exploring the Red Planet with the Perseverance rover.",
      image: "mars.avif"
    },
    {
      title: "James Webb Telescope",
      description: "Unveiling the secrets of the universe with the most advanced space telescope.",
      image: "cutie.avif"
    }
  ];
  
  // News Data
  const newsData = [
    {
      title: "NASA's New Mission to Mars",
      description: "Learn about the latest mission to explore the Red Planet.",
      image: "mars.avif"
    },
    {
      title: "Hubble Telescope's New Discovery",
      description: "Hubble captures stunning images of distant galaxies.",
      image: "galaxy.avif"
    },
    {
      title: "Artemis Program Update",
      description: "NASA prepares for the next moon landing mission.",
      image: "moon.avif"
    }
  ];
  
  // Gallery Data
  const galleryData = [
    {
      title: "Earth from Space",
      image: "earth.avif"
    },
    {
      title: "Milky Way Galaxy",
      image: "milkyway.avif"
    },
    {
      title: "Solar Eclipse",
      image: "eclipse.avif"
    }
  ];
  
  // Render Mission Cards
  const missionsContainer = document.getElementById('missionsContainer');
  missionsData.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <img src="${item.image}" alt="${item.title}">
      <h3>${item.title}</h3>
      <p>${item.description}</p>
    `;
    missionsContainer.appendChild(card);
  });
  
  // Render News Cards
  const newsContainer = document.getElementById('newsContainer');
  newsData.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <img src="${item.image}" alt="${item.title}">
      <h3>${item.title}</h3>
      <p>${item.description}</p>
    `;
    newsContainer.appendChild(card);
  });
  
  // Render Gallery Cards
  const galleryContainer = document.getElementById('galleryContainer');
  galleryData.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <img src="${item.image}" alt="${item.title}">
      <h3>${item.title}</h3>
    `;
    galleryContainer.appendChild(card);
  });
  
  // Button interaction
  document.getElementById('exploreBtn').addEventListener('click', () => {
    alert("Let's explore the universe together!");
  });