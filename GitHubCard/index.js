/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
import axios from "axios";

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

//add input to change user

const btn = document.createElement("div");
btn.classList.add("button");
btn.textContent = "Search";

const inputBox = document.createElement("input");

inputBox.setAttribute("type", "text");
inputBox.classList.add("input");

const entryPoint = document.querySelector(".cards");
const searchContainer = document.createElement("div");
searchContainer.classList.add("search-container");
searchContainer.appendChild(inputBox);
searchContainer.appendChild(btn);
entryPoint.append(searchContainer);

const getInput = () => {
  return inputBox.value;
};

btn.addEventListener("click", () => {
  userName = getInput();
  getInfo();
});

let userName = "Wesley-Ryan";

const getInfo = () => {
  axios
    .get(`https://api.github.com/users/${userName}`)
    .then((response) => {
      let user = response.data;
      let card = cardCreator(user);
      entryPoint.appendChild(card);
    })
    .catch((err) => {
      console.log("Error:", err);
    });
};

const followersArray = [];

const cardCreator = (user) => {
  console.log("THIS IS THE USER IN MY CARD CREATOR:", user);
  const card = document.createElement("div");
  const cardImg = document.createElement("img");
  const cardInfo = document.createElement("div");
  const cardTitle = document.createElement("h3");
  const cardSubtitle = document.createElement("p");
  const cardLocation = document.createElement("p");
  const cardProfile = document.createElement("p");
  const cardLink = document.createElement("a");
  const cardLinkText = document.createTextNode(user.html_url);

  const cardFollower = document.createElement("p");
  const cardFollowing = document.createElement("p");

  //position elements
  card.appendChild(cardImg);
  card.appendChild(cardInfo);
  cardInfo.appendChild(cardTitle);
  cardInfo.appendChild(cardSubtitle);
  cardInfo.appendChild(cardLocation);
  cardInfo.appendChild(cardProfile);
  cardLocation.appendChild(cardLink);
  cardInfo.appendChild(cardLink);
  cardInfo.appendChild(cardFollower);
  cardInfo.appendChild(cardFollowing);

  cardLink.appendChild(cardLinkText);

  //add content to elements
  card.classList.add("card");
  cardInfo.classList.add("card-info");
  cardTitle.classList.add("name");
  cardSubtitle.classList.add("username");
  cardImg.src = user.avatar_url;
  cardTitle.textContent = user.name;
  cardSubtitle.textContent = user.login;
  cardLocation.textContent = `Location:${user.location}`;
  cardProfile.textContent = `Profile:`;
  cardLink.setAttribute("href", user.html_url);

  cardFollower.textContent = `Followers:${user.followers}`;
  cardFollowing.textContent = `Following: ${user.following}`;

  //do some stuff

  return card;
};

getInfo();

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
