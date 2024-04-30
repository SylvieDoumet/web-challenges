console.clear();

// const headline = document.querySelector("h1");
// headline.textContent = "Social Media Post";
// headline.appendChild(body);

// const NewPost = document.createElement("article");
// NewPost.classList.add("post");
// const NewPostContent = document.createElement("p");
// NewPostContent.classList.add("post__content");
// NewPostContent.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
// NewPost.appendChild(NewPostContent);

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

// <body>
// <h1>Social Media Post</h1>
// <article class="post">
//   <p class="post__content">
//     Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//   </p>
//   <footer class="post__footer">
//     <span class="post__username">@username</span>
//     <button type="button" class="post__button" data-js="like-button">
//       ♥ Like
//     </button>
//   </footer>
// </article>
// </body>

const socialMediaPost = document.createElement("article");
socialMediaPost.classList.add("post");

// create first child (p)

const socialMediaPostContent = document.createElement("p");
socialMediaPostContent.classList.add("post__content");
socialMediaPostContent.textContent =
  "Lobsters having fun creating a new social media post.";

// create second child (footer)

const socialMediaPostFooter = document.createElement("footer");
socialMediaPostFooter.classList.add("post__footer");

// create 2 childern for the footer

// create span element

const newUserName = document.createElement("span");
newUserName.classList.add("post__username");
newUserName.textContent = "@lobster";

socialMediaPostFooter.append(newUserName);

// create button element

const newLikeButton = document.createElement("button");
package.classList.add("post__button");
newLikeButton.type = "button";
newLikeButton.textContent = "♥ Like";
newLikeButton.addEventListener("click", handleLikeButtonClick);

socialMediaPostFooter.append(newLikeButton);

// append footer to the article

socialMediaPost.append(socialMediaPostFooter);

document.body.append(socialMediaPost);
