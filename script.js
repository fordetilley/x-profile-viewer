
const form = document.getElementById("analyze-form");
const usernameInput = document.getElementById("username");
const dashboard = document.getElementById("dashboard");
const message = document.getElementById("message");

// Sample data for development only.
const demoData = {
  name: "Alex Morgan",
  bio: "Technology, design, and building things on the internet.",
  followers: 12400,
  following: 580,
  postsCount: 2350,
  recentPosts: [
    "Exploring how simple design can make software easier to use.",
    "Working on a new project this week. More updates soon.",
    "What is one tool you use every day that saves you time?"
  ],
  insights: [
    "The sample profile has an established follower base.",
    "The sample posts cover technology and productivity.",
    "More posts would be needed to identify reliable engagement trends."
  ]
};

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = usernameInput.value.trim().replace(/^@/, "");

  if (!/^[A-Za-z0-9_]{1,15}$/.test(username)) {
    message.textContent =
      "Enter a valid X username (up to 15 letters, numbers, or underscores).";
    dashboard.hidden = true;
    return;
  }

  // Display the sample data using the entered username.
  document.getElementById("avatar").textContent =
    username.charAt(0).toUpperCase();

  document.getElementById("profile-name").textContent = demoData.name;
  document.getElementById("profile-handle").textContent = "@" + username;
  document.getElementById("bio").textContent = demoData.bio;

  document.getElementById("followers").textContent =
    demoData.followers.toLocaleString();

  document.getElementById("following").textContent =
    demoData.following.toLocaleString();

  document.getElementById("posts-count").textContent =
    demoData.postsCount.toLocaleString();

  const postsContainer = document.getElementById("recent-posts");
  postsContainer.replaceChildren();

  demoData.recentPosts.forEach(function (postText) {
    const post = document.createElement("div");
    post.className = "post";
    post.textContent = postText;
    postsContainer.appendChild(post);
  });

  const insightsContainer = document.getElementById("insights");
  insightsContainer.replaceChildren();

  demoData.insights.forEach(function (insightText) {
    const insight = document.createElement("p");
    insight.textContent = insightText;
    insightsContainer.appendChild(insight);
  });

  dashboard.hidden = false;
  message.textContent =
    "Demo data displayed. These are not the actual statistics for @" + username + ".";
});
