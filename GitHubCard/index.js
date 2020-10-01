/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
import axios from "axios";

const getInfo = () => {
  axios
    .get(`https://api.github.com/users/wesley-ryan`)
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      console.log("Error:", err);
    });
};
getInfo();
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

const followersArray = [];

const cardCreator = ({ user }) => {
  const card = document.createElement("div");
  const cardImg = document.createElement("img");
  const cardInfo = document.createElement("div");
  const cardTitle = document.createElement("h3");
  const cardSubtitle = document.createElement("p");
  const cardLocation = document.createElement("p");
  const cardProfile = document.createElement("p");
  const cardLink = document.createElement("a");
  const cardFollower = document.createElement("p");
  const cardFollowing = document.createElement("p");

  //position elements
  card.appendChild(cardImg);
  cardImg.appendChild(cardInfo);
  cardInfo.appendChild(cardTitle);
  cardTitle.appendChild(cardSubtitle);
  cardSubtitle.appendChild(cardLocation);
  cardLocation.appendChild(cardProfile);
  cardProfile.appendChild(cardLink);
  cardLink.appendChild(cardFollower);
  cardFollower.appendChild(cardFollowing);

  //add content to elements
  card.classList.add("card");
  cardImg.src = user.image;
  cardTitle.textContent = user.name;
  card.cardSubtitle.textContent = user.username;
  cardProfile.textContent = "Profile:";
  cardLink.src = user.url;
  cardFollower.textContent = user.followers;
  card.cardFollowing.textContent = user.following;

  //do some stuff

  return card;
};
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
