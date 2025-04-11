console.clear();
function $(element) {
  return document.querySelector(element);
}
function $id(element) {
  return document.getElementById(element);
}
function _(selector) {
  return document.createElement(selector);
}

const originalUser = {
  profilePicture:
    "https://i.ibb.co/fVnZcTkD/302378601-1215176925714287-8195438817844794342-n.jpg",
  username: "classical_milan",
  caption: "One post at a time. 🚀 #StayStylish",
  comments: [],
};
const likedList = [
  {
    profilePicture: "https://i.ibb.co/mVC6ZJc1/spagetti.jpg",
    name: "Spaghetti McNoodle",
    username: "spag_mcnood",
  },
  {
    profilePicture: "https://i.ibb.co/v4vXt4wH/cheeseburger.jpg",
    name: "Cheeseburger Flapjack",
    username: "cheese_flap",
  },
  {
    profilePicture: "https://i.ibb.co/PGx3KYPZ/sir-III.jpg",
    name: "Sir Wobblesworth III",
    username: "wobbly_3",
  },
  {
    profilePicture: "https://i.ibb.co/rRZ4LwvQ/pickle.jpg",
    name: "Pickle Juice Supreme",
    username: "pickle_sup",
  },
  {
    profilePicture: "https://i.ibb.co/35qLXwKD/nacho.png",
    name: "Princess Nacho",
    username: "nacho_qn",
  },
  {
    profilePicture: "https://i.ibb.co/ynb081xp/Captain-Fluffernutter.png",
    name: "Captain Fluffernutter",
    username: "fluffer_cap",
  },
  {
    profilePicture: "https://i.ibb.co/pBhVMRCm/Dr-Waffleton.png",
    name: "Dr. Waffleton",
    username: "dr_waffle",
  },
  {
    profilePicture: "https://i.ibb.co/RGDj0fcn/Taco-Mc-Sauce.png",
    name: "Taco McSauce",
    username: "taco_sauce",
  },
  {
    profilePicture: "https://i.ibb.co/WN1Tzdrc/Pudding-Bandit.png",
    name: "Pudding Bandit",
    username: "pudding_b",
  },
  {
    profilePicture: "https://i.ibb.co/39Qr9C3Z/Snickerdoodle-Thunderpants.png",
    name: "Snickerdoodle Thunderpants",
    username: "snicker_thun",
  },
  {
    profilePicture: "https://i.ibb.co/tMtJ56X1/Butterbean-Mc-Squish.png",
    name: "Butterbean McSquish",
    username: "butter_squish",
  },
  {
    profilePicture: "https://i.ibb.co/hF0HMVXy/Mozzarella-Moonwalker.png",
    name: "Mozzarella Moonwalker",
    username: "mozz_moon",
  },
  {
    profilePicture: "https://i.ibb.co/kVDBkvDx/Noodle-Gigglesnort.png",
    name: "Noodle Gigglesnort",
    username: "noodle_g",
  },
  {
    profilePicture: "https://i.ibb.co/pDPwqZ5/Lord-Crouton.png",
    name: "Lord Crouton",
    username: "crouton_lord",
  },
  {
    profilePicture: "https://i.ibb.co/rfp30q3D/Duchess-Jellybean.png",
    name: "Duchess Jellybean",
    username: "jelly_duchess",
  },
  {
    profilePicture: "https://i.ibb.co/r2Wsmw4Y/Sir-Peanut-Butter.png",
    name: "Sir Peanut Butter",
    username: "sir_pb",
  },
  {
    profilePicture: "https://i.ibb.co/r2k24Tms/Marshmallow-Tater-Tot.png",
    name: "Marshmallow TaterTot",
    username: "mallow_tater",
  },
  {
    profilePicture: "https://i.ibb.co/1Yr7ZZjh/Boba-Fettuccino.png",
    name: "Boba Fettuccino",
    username: "boba_fett",
  },
  {
    profilePicture: "https://i.ibb.co/Q3ysGzbx/Lady-Pancakeston.png",
    name: "Lady Pancakeston",
    username: "lady_pancake",
  },
];
const randomComments = [
  "Amazing post!🎉",
  "Love this!😍",
  "Super insightful, thanks for sharing!🙌",
  "This made my day!😊",
  "Brilliant perspective!🔥",
  "I totally agree! 💯",
  "This is gold!🤩",
  "So well said!👏",
  "Mind-blowing stuff!🤯",
  "Couldn't have put it better myself!👌",
  "This deserves more attention!🚀",
  "Absolutely fantastic! ✨",
  "Pure genius! 🤓",
  "This just made me smile! 😊",
  "Iconic!🔥",
];
const randomReplies = [
  "Totally agree! 😎",
  "This feature is 🔥!",
  "I love it! 👍",
  "So true! 🤯",
  "Couldn’t have said it better. 👏",
  "Haha, same here! 😂",
  "Definitely a game-changer. 💥",
  "I feel you! 😅",
  "Totally! 💯",
  "I’m with you on this one! 🙌",
];
let commentsList = likedList.map((instaUser) => {
  const numReplies = Math.floor(Math.random() * 10);
  const replies = [];
  for (let i = 0; i < numReplies; i++) {
    const randomUser = likedList[Math.floor(Math.random() * likedList.length)];
    const randomReplyText =
      randomReplies[Math.floor(Math.random() * randomReplies.length)];
    replies.push({
      profilePicture: randomUser.profilePicture,
      username: randomUser.username,
      comment: randomReplyText,
    });
  }

  return {
    profilePicture: instaUser.profilePicture,
    username: instaUser.username,
    comment: randomComments[Math.floor(Math.random() * randomComments.length)],
    replies: replies,
  };
});
const emojis = [
  "😀",
  "😎",
  "😂",
  "😍",
  "😭",
  "🥺",
  "😡",
  "👍",
  "🙏",
  "🔥",
  "🎉",
  "💯",
  "😅",
  "🤔",
  "👀",
  "🙌",
  "😢",
  "🤩",
  "😳",
  "🤯",
  "🥳",
  "😴",
  "💀",
  "👻",
  "😇",
  "🤗",
  "🍕",
  "🍔",
  "🍟",
  "🌮",
  "🏀",
  "⚽",
  "🎮",
  "🎧",
  "🚀",
  "🌟",
  "❤️",
  "💔",
  "✨",
  "☀️",
  "🛹",
  "🎯",
  "🕶️",
  "🏄‍♂️",
  "🧃",
  "🍔",
  "🍟",
  "🍕",
  "🌭",
  "🥪",
  "🥗",
  "🍝",
  "🍜",
  "🍣",
  "🍤",
  "🍩",
  "🍪",
  "🍰",
  "🎂",
  "🍦",
  "🍧",
  "🍨",
  "🍫",
  "🍬",
  "🍭",
  "🇳🇵",
  "🇦🇺",
  "🇯🇵",
  "🇨🇦",
  "🇧🇷",
  "🇫🇷",
  "🇩🇪",
];

const post = $(".post");
const displayLikedPeople = $(".other-likers-count");
const displayLikes = $(".likes-section");
const closeButton = $(".close-button");
const unlovedSvg = $(".unloved-svg");
const lovedSvg = $(".loved-svg");
const commentIcon = $id("comment-svg");
const closeCommentsButton = $(".close-button2");
const commentContainer = $(".comment-container");
const displayOthersLikercount = $(".others-count");
const remainingLikers = likedList.length - 1;
const commentsInfo = $(".comments-info");
const totalCommentsCount = $(".total-comments");

//functions
function showLikedPeople() {
  displayLikes.style.display = "block";
  let likedUserContainer = $(".likedUserContainer");
  if (!likedUserContainer) {
    likedUserContainer = _("div");
    likedUserContainer.classList.add("likedUserContainer");
    displayLikes.appendChild(likedUserContainer);
  }
  likedUserContainer.innerHTML = "";

  for (let i = 0; i < likedList.length; i++) {
    const likedUserDetails = _("div");
    likedUserDetails.classList.add("liked-user-details", "flex");
    const anchorTag = _("a");
    anchorTag.href = "#";
    const img = _("img");
    img.src = likedList[i].profilePicture;
    img.classList.add("profile-picture");
    anchorTag.appendChild(img);
    likedUserDetails.appendChild(anchorTag);

    const usernameAndName = _("div");
    usernameAndName.classList.add("usernameAndID-container", "flex");

    const anchorTag2 = _("a");
    anchorTag2.href = "#";
    usernameAndName.appendChild(anchorTag2);

    const userId = _("div");
    userId.innerText = likedList[i].username;
    userId.classList.add("liked-username");

    const name = _("div");
    name.innerText = likedList[i].name;
    name.classList.add("name");

    usernameAndName.appendChild(userId);
    usernameAndName.appendChild(name);
    likedUserDetails.appendChild(usernameAndName);

    const followButton = _("div");
    followButton.classList.add("follow-button", "flex");
    const button = _("button");
    button.innerText = "Follow";
    button.addEventListener("click", () => {
      if (button.innerText === "Follow") {
        button.innerText = "Following";
        button.style.backgroundColor = "green";
      } else {
        button.innerText = "Follow";
        button.style.backgroundColor = "#0095f6";
      }
    });

    followButton.appendChild(button);
    likedUserDetails.appendChild(followButton);
    likedUserContainer.appendChild(likedUserDetails);
  }
}
function showLikeAvatars() {
  let likeAvatars1 = $(".like-avatars1");
  let likeAvatars2 = $(".like-avatars2");
  let likeAvatars3 = $(".like-avatars3");

  likeAvatars1.style.backgroundImage = `url(${likedList[0].profilePicture})`;
  likeAvatars2.style.backgroundImage = `url(${likedList[1].profilePicture})`;
  likeAvatars3.style.backgroundImage = `url(${likedList[2].profilePicture})`;
}
function displayLikersSummary() {
  const displayFirstLiker = $id("first-liker");
  displayFirstLiker.innerText = likedList[0].name;
  displayOthersLikercount.innerText = remainingLikers;
}
function displayCommentsCount() {
  commentsInfo.style.cursor = "pointer";
  commentsInfo.style.paddingBottom = "4px";
  commentsInfo.style.textDecoration = "underline";
  totalCommentsCount.innerText = `View ${commentsList.length} comments`;
}
function openCommentsContainer() {
  commentContainer.style.display = "block";
  post.style.display = "none";
}
function createProfileImage() {
  const profileLink = _("a");
  profileLink.href = "#";

  const profileImage = _("img");
  profileImage.classList.add("profile-picture");
  profileImage.src =
    "https://i.ibb.co/fVnZcTkD/302378601-1215176925714287-8195438817844794342-n.jpg";

  profileLink.appendChild(profileImage);
  return profileLink;
}
function createVerifiedBadge() {
  const div = _("div");
  // Inserts the SVG as a string, converting it into an actual SVG element inside the <div>
  div.innerHTML = `
    <svg aria-label="Verified" class="verify-badge" fill="rgb(0, 149, 246)" height="16" role="img" viewBox="0 0 40 40" width="16">
      <title>Verified</title>
      <path d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.905h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Zm7.415 11.225 2.254 2.287-11.43 11.5-6.835-6.93 2.244-2.258 4.587 4.581 9.18-9.18Z" fill-rule="evenodd"></path>
    </svg>
  `;
  return div.firstElementChild; // This extracts the SVG from the div
}
function likeAndReply() {
  const buttonsContainer = _("div");
  buttonsContainer.classList.add("like-reply-container", "flex");
  const likeButton = _("button");
  const replyButton = _("button");
  replyButton.innerText = "Reply";

  let originalLikes = Math.floor(Math.random() * 100);
  let randomNoOfLikes = originalLikes;

  function updateLikeButton() {
    if (randomNoOfLikes === 0) {
      likeButton.innerText = "Like";
    } else if (randomNoOfLikes === 1) {
      likeButton.innerText = `${randomNoOfLikes} Like`;
    } else {
      likeButton.innerText = `${randomNoOfLikes} Likes`;
    }
  }

  updateLikeButton(); //initially show like info
  let isLikeClicked = false;
  likeButton.addEventListener("click", () => {
    if (!isLikeClicked) {
      randomNoOfLikes += 1;
    } else {
      randomNoOfLikes = originalLikes;
    }
    updateLikeButton();
    isLikeClicked = !isLikeClicked; // Toggle the like button state
  });

  replyButton.addEventListener("click", () => {
    const replyFormContainer = $(".form");
    const textArea = replyFormContainer.querySelector("textarea");
    textArea.focus();
  });

  buttonsContainer.append(likeButton, replyButton);
  return buttonsContainer;
}
function createUserDetails(
  user,
  includeCaptionOrComment = false,
  showUnlovedIcon = false
) {
  const flexDColumn = _("div");
  flexDColumn.classList.add("flex-column");

  const userInfo = _("div");
  userInfo.classList.add("user-info");
  const usernameLink = _("a");
  usernameLink.href = "#";
  usernameLink.classList.add("username", "flex");

  const span = _("span");
  span.innerText = user.username;

  usernameLink.appendChild(span);
  const addVerifiedBadge = Math.random() > 0.5; // 50% chance to add the badge
  if (addVerifiedBadge) {
    userInfo.append(usernameLink, createVerifiedBadge());
  } else {
    userInfo.append(usernameLink);
  }

  flexDColumn.appendChild(userInfo);

  const captionDiv = _("div");
  captionDiv.classList.add("caption-div");

  if (includeCaptionOrComment) {
    const span = _("span");
    span.classList.add("caption-text", "flex");
    span.innerText = user.caption || user.comment;
    captionDiv.appendChild(span);
    flexDColumn.appendChild(captionDiv);
  }
  if (showUnlovedIcon) {
    const unlovedIcon = document.createElement("div");
    unlovedIcon.classList.add("unloved-div");

    const cloneUnlovedSvg = $(".unloved-svg").cloneNode(true);
    const cloneLovedSvg = $(".loved-svg").cloneNode(true);

    cloneUnlovedSvg.classList.add("cloned-svg");
    cloneLovedSvg.classList.add("cloned-svg");
    unlovedIcon.appendChild(cloneUnlovedSvg);
    captionDiv.appendChild(unlovedIcon);
    flexDColumn.appendChild(captionDiv);
    let liked = false; // Flag to track liked/unliked state

    unlovedIcon.addEventListener("click", () => {
      // Toggle the state
      liked = !liked;
      unlovedIcon.innerHTML = "";

      if (liked) {
        cloneLovedSvg.style.display = "block";
        unlovedIcon.appendChild(cloneLovedSvg);
      } else {
        cloneUnlovedSvg.style.display = "block";
        unlovedIcon.appendChild(cloneUnlovedSvg);
      }
    });
  }

  return flexDColumn;
}
function renderProfileDetails(
  includeMoreOptions = true,
  includeCaptionOrComment = false,
  showUnlovedIcon = false
) {
  const profileContainer = _("div");
  profileContainer.classList.add("profile", "flex");

  const leftSection = _("div");
  leftSection.classList.add("left-section", "flex");

  const imageBox = _("div");
  imageBox.classList.add("image-box");

  imageBox.appendChild(createProfileImage());
  leftSection.appendChild(imageBox);
  leftSection.appendChild(
    createUserDetails(originalUser, includeCaptionOrComment, showUnlovedIcon)
  );

  profileContainer.appendChild(leftSection);
  // use conditionally as i don't need this svg next time
  if (includeMoreOptions) {
    const rightSection = _("div");
    rightSection.classList.add("right-section");

    rightSection.innerHTML = `
    <svg aria-label="More options" height="24" width="24">
      <title>More options</title>
      <circle cx="12" cy="12" r="1.5"></circle>
      <circle cx="6" cy="12" r="1.5"></circle>
      <circle cx="18" cy="12" r="1.5"></circle>
    </svg>
  `;
    profileContainer.appendChild(rightSection);
  }

  return profileContainer;
}

function writeComments() {
  const formContainer = _("div");
  formContainer.classList.add("form", "flex");
  formContainer.appendChild(createProfileImage());

  const textArea = _("textarea");
  textArea.classList.add("textarea");
  formContainer.appendChild(textArea);
  textArea.placeholder = "Add a comment...";

  const button = _("button");
  button.classList.add("form-button");
  button.innerText = "Post";
  formContainer.appendChild(button);

  function showPostButton() {
    button.style.display = "block";
  }
  function hidePostButton() {
    button.style.display = "none";
  }
  textArea.addEventListener("mouseenter", showPostButton);
  formContainer.addEventListener("mouseleave", hidePostButton);

  function renderSingleComment(commenter) {
    const newCommentArea = $(".comments-collections");
    const newCommentInfo = _("div");
    newCommentInfo.classList.add("comment-profile", "flex");

    const profileImage = _("img");
    profileImage.classList.add("profile-picture");
    profileImage.src = commenter.profilePicture;
    newCommentInfo.appendChild(profileImage);

    const newCommenterDetails = createUserDetails(commenter, true, true);
    newCommentInfo.appendChild(newCommenterDetails);
    newCommentArea.appendChild(newCommentInfo);
  }

  function addComment() {
    const newCommentArea = $(".comments-collections");

    const commentText = textArea.value.trim();
    if (commentText !== "") {
      const newComment = {
        profilePicture: originalUser.profilePicture,
        username: originalUser.username,
        comment: commentText,
      };
      commentsList = [newComment, ...commentsList]; // Update the array
      newCommentArea.innerHTML = "";
      commentsList.forEach(renderSingleComment);
      textArea.value = "";
    }
  }

  const emojiButton = $(".emoji-button");
  emojiButton.style.display = "block";

  const emojiContainer = _("div");
  emojiContainer.classList.add("emoji-container");
  emojiContainer.style.display = "none";
  let emojisGenerated = false;

  emojiButton.addEventListener("click", () => {
    if (emojiContainer.style.display === "none") {
      emojiContainer.style.display = "block";

      if (!emojisGenerated) {
        emojis.forEach((symbol) => {
          const span = _("span");
          span.textContent = symbol; // Use textContent for better performance
          span.style.cursor = "pointer";
          span.style.fontSize = "32px";
          span.style.margin = "6px";
          emojiContainer.appendChild(span);

          // click event to each emoji
          span.addEventListener("click", () => {
            textArea.value += symbol;
            textArea.focus(); //    so the user can continue typing.
          });
        });

        emojisGenerated = true; // Flag emojis as generated
      }
    } else {
      emojiContainer.style.display = "none";
    }
  });
  emojiButton.appendChild(emojiContainer);
  formContainer.appendChild(emojiButton);

  textArea.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();

      const trimmedComment = textArea.value.trim();
      if (trimmedComment !== "") {
        addComment();
      }
    }
  });
  button.addEventListener("click", addComment);

  return formContainer;
}

function renderComments() {
  const comments = _("div");
  comments.classList.add("comments", "flex");
  const postContent = $(".content").cloneNode(true);
  postContent.style.width = "358px";
  postContent.style.height = "455px";
  const commentSection = _("div");
  commentSection.classList.add("comment-section");
  const commentHeader = _("div");
  commentHeader.classList.add("header");

  commentHeader.appendChild(renderProfileDetails(), createVerifiedBadge());
  const commentArea = _("div");
  commentArea.classList.add("comment-area", "flex");
  commentArea.appendChild(renderProfileDetails(false, true));
  const collectionComments = _("div");
  collectionComments.classList.add("comments-collections");

  // Iterate over commentsList and append each comment
  commentsList.forEach((comment) => {
    const commentDetails = _("div");
    commentDetails.classList.add("comment-profile", "flex");

    const profileImage = _("img");
    profileImage.classList.add("profile-picture");
    profileImage.src = comment.profilePicture;
    commentDetails.appendChild(profileImage);

    const userDetails = createUserDetails(comment, true, true);

    const likeReplyContainer = likeAndReply();

    const noOfReply = comment.replies.length;
    if (noOfReply > 0) {
      const viewReplies = _("button");
      viewReplies.classList.add("view-replies");
      viewReplies.innerText = `--- View all ${noOfReply} replies ---`;

      const repliesContainer = _("div");
      repliesContainer.classList.add("replies-container");
      repliesContainer.style.display = "none";

      comment.replies.forEach((reply) => {
        const replyDetails = _("div");
        replyDetails.classList.add("reply-profile", "flex");

        const replyProfileImage = _("img");
        replyProfileImage.classList.add("profile-picture");
        replyProfileImage.src = reply.profilePicture;
        replyDetails.appendChild(replyProfileImage);
        const replyUserDetails = createUserDetails(reply, true, true);
        const likeReplyContainerForReply = likeAndReply();
        replyUserDetails.appendChild(likeReplyContainerForReply);

        replyDetails.appendChild(replyUserDetails);
        repliesContainer.appendChild(replyDetails);
      });
      viewReplies.addEventListener("click", () => {
        if (repliesContainer.style.display === "none") {
          repliesContainer.style.display = "block";
          viewReplies.innerText = `--- Hide all replies ---`;
        } else {
          repliesContainer.style.display = "none";
          viewReplies.innerText = `--- View all ${noOfReply} replies ---`;
        }
      });

      userDetails.append(likeReplyContainer, viewReplies, repliesContainer);
    }

    commentDetails.appendChild(userDetails);
    commentDetails.appendChild(userDetails);

    collectionComments.appendChild(commentDetails);
    commentArea.appendChild(collectionComments);
  });

  commentSection.append(commentHeader, commentArea);
  comments.append(postContent, commentSection);
  const engagementBar = _("div");
  engagementBar.classList.add("engagement-bar");
  engagementBar.style.cssText = `
  width: 361px;
  height: 82px;
  padding: 2px 16px;
  border-top: 2px solid rgb(239, 239, 239);
  `;
  const cloneIcons = $(".icons").cloneNode(true);
  const likesContainer = $(".liked-container").cloneNode(true);
  const date = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  engagementBar.append(cloneIcons, likesContainer, date);
  commentSection.appendChild(engagementBar);
  commentSection.appendChild(writeComments());
  commentContainer.appendChild(comments);
}

//call functions
showLikeAvatars();
displayLikersSummary();
renderComments();
displayCommentsCount();

//events
displayLikedPeople.addEventListener("click", showLikedPeople);
closeButton.addEventListener("click", () => {
  displayLikes.style.display = "none";
});
unlovedSvg.addEventListener("click", () => {
  unlovedSvg.style.display = "none";
  lovedSvg.style.display = "block";
  displayOthersLikercount.innerText = remainingLikers + 1;
});
lovedSvg.addEventListener("click", () => {
  unlovedSvg.style.display = "block";
  lovedSvg.style.display = "none";
  displayOthersLikercount.innerText = remainingLikers;
});
commentIcon.addEventListener("click", () => {
  commentContainer.style.display = "block";
  post.style.display = "none";
});
commentIcon.addEventListener("click", openCommentsContainer);
commentsInfo.addEventListener("click", openCommentsContainer);
closeCommentsButton.addEventListener("click", () => {
  commentContainer.style.display = "none";
  post.style.display = "block";
});
