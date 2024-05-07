console.clear();

// Replicated Social Media Post

const header = document.querySelector("h1");
mainheading.textContent = "Social Media Post";
mainheading.classList.add("h1");

const newPost = document.createElement("article");
article.classList.add("post");
const newPostContent = document.createElement("p");
newPostContent.classList.add("post__content");
newPostContent.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
newPost.appendChild(newPostContent);

// newPost.classList.add("post");

// const newPostContent = document.createElement("p");
// newPostContent.classList.add("post__content");
// newPostContent.textContent =
//   "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
// newPost.appendChild(newPostContent);

const newPostFooter = document.createElement("footer");
newPostFooter.classList.add("post__footer");
newPost.appendChild(newPostFooter);

const newPostUsername = document.createElement("span");
newPostUsername.classList.add("post__username");
newPostUsername.textContent = "@username";
newPostFooter.appendChild(newPostUsername);

const newPostlikeButton = document.createElement("button");
newPostlikeButton.classList.add("post__button");
newPostlikeButton.textContent = "♥ Like";
newPostFooter.appendChild(newPostlikeButton);

// const newPostlikeButton = document.querySelector('[data-js="like-button"]');
// newPostlikeButton.addEventListener("click", handleLikeButtonClick);

// const likeButton = document.createElement("button");
// newPostButtons.classList.add("post__buttons");
// newPostFooter.appendChild(newPostButtons);

// Like Button

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

// Add Post to the body of the page

document.body.appendChild(NewPost);
// document.body.appendChild(header);
