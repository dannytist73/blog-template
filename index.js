import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

let posts = {
  post1: {
    title: "My Culinary Adventure in Davao",
    body: "Last week, I explored the vibrant food scene in Davao City. From the famous durian to the freshest seafood, I indulged in some incredible dishes. I'll share my top picks and must-try places!",
    date: "2024-12-20",
    author: "April Wayne",
    tags: ["foodie", "travel", "Davao"],
    comments: [
      {
        user: "DanDoe",
        comment: "Looks delicious! Can't wait to try these places.",
      },
      { user: "DanSmith", comment: "Thanks for the recommendations!" },
    ],
    htmlContent: `
              <h2>My Culinary Adventure in Davao</h2>
              <p>Last week, I explored the vibrant food scene in Davao City. From the famous durian to the freshest seafood, I indulged in some incredible dishes. I'll share my top picks and must-try places!</p>
              <h3>Top Picks</h3>
              <ul>
                  <li>Durian Ice Cream at Roxas Night Market</li>
                  <li>Seafood Platter at Marina Tuna</li>
                  <li>Grilled Pork Belly at Lachi's</li>
              </ul>
              <p>Davao City offers a unique culinary experience that every foodie should try at least once!</p>
          `,
  },
  post2: {
    title: "Staying Productive as a Virtual Assistant",
    body: "As a virtual assistant, managing time and staying productive can be challenging. Here are my top tips and tools that help me stay on track and deliver the best service to my clients.",
    date: "2024-12-18",
    author: "April Wayne",
    tags: ["virtual assistant", "productivity", "work from home"],
    comments: [
      { user: "DannyR", comment: "Great tips! I'll definitely try these out." },
      { user: "DanyT", comment: "Very helpful, thank you!" },
    ],
    htmlContent: `
              <h2>Staying Productive as a Virtual Assistant</h2>
              <p>As a virtual assistant, managing time and staying productive can be challenging. Here are my top tips and tools that help me stay on track and deliver the best service to my clients.</p>
              <h3>Top Tips</h3>
              <ol>
                  <li>Use a task management tool like Trello or Asana.</li>
                  <li>Set clear boundaries and work hours.</li>
                  <li>Take regular breaks to avoid burnout.</li>
              </ol>
              <p>With these strategies, you can enhance your productivity and deliver top-notch services!</p>
          `,
  },
  post3: {
    title: "A Day in the Life of an Introvert",
    body: "Being an introvert comes with its own set of joys and challenges. In this post, I share a glimpse into my daily routine and how I recharge my energy while balancing work and family life.",
    date: "2024-12-15",
    author: "April Wayne",
    tags: ["introvert", "lifestyle", "personal"],
    comments: [
      { user: "DannyB", comment: "I can relate to this so much!" },
      { user: "DannyG", comment: "Thanks for sharing your experience." },
    ],
    htmlContent: `
              <h2>A Day in the Life of an Introvert</h2>
              <p>Being an introvert comes with its own set of joys and challenges. In this post, I share a glimpse into my daily routine and how I recharge my energy while balancing work and family life.</p>
              <h3>Morning Routine</h3>
              <p>I start my day with a quiet cup of coffee and some light reading. It's my way of easing into the day without feeling overwhelmed.</p>
              <h3>Work Schedule</h3>
              <p>My work hours are flexible, but I make sure to take breaks to avoid burnout. I often work in a cozy corner of my home, surrounded by my favorite things.</p>
              <p>Being an introvert has taught me to find balance and peace in my daily routine.</p>
          `,
  },
  post4: {
    title: "Why I Call My Dogs 'Babis'",
    body: "My dogs are a huge part of my life, and I lovingly refer to them as 'babis.' In this post, I'll share the story behind the name and why they mean so much to me.",
    date: "2024-12-10",
    author: "April Wayne",
    tags: ["dogs", "pets", "family"],
    comments: [
      { user: "Dan K", comment: "Aww, that's so sweet!" },
      { user: "Dancle", comment: "Your babis are adorable!" },
    ],
    htmlContent: `
              <h2>Why I Call My Dogs 'Babis'</h2>
              <p>My dogs are a huge part of my life, and I lovingly refer to them as 'babis.' In this post, I'll share the story behind the name and why they mean so much to me.</p>
              <h3>The Story</h3>
              <p>The nickname 'babis' started as a playful term of endearment, and it just stuck. Each of my dogs has their own unique personality, and they bring so much joy and love into my life.</p>
              <p>They are more than just pets to me—they are family. My Akio, my Baching, my Callista, my Coco, my Melon, my Cairo, and my ever handsome baby, not babi, Danny!!!</p>
          `,
  },
};

const aboutImages = [
  {
    url: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Working on new blog content in my home office",
  },
  {
    url: "/images/walkbabi.jpg",
    description: "Morning walks with my beloved babi",
  },
  {
    url: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?q=80&w=2526&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Testing new recipes for the blog",
  },
  {
    url: "https://images.unsplash.com/photo-1650469332308-ceff98eeae1b?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Weekend adventures and explorations",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1719943510748-4b4354fbcf56?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Finding peace in nature",
  },
];

const pnwImages = [
  {
    url: "https://images.unsplash.com/photo-1628004871713-f3fb98af6e14?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Exploring the rugged Oregon coast",
  },
  {
    url: "https://images.unsplash.com/photo-1595259734744-a1d3d69d61f5?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Sunset at Mount Rainier National Park",
  },
  {
    url: "https://images.unsplash.com/photo-1465652044861-81e32c824058?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Hiking through old-growth forests",
  },
];

const europeImages = [
  {
    url: "https://images.unsplash.com/photo-1662022226576-e3b72e13ccd0?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Charming streets of Paris",
  },
  {
    url: "https://images.unsplash.com/photo-1511169060089-e946a0db5d69?q=80&w=2540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Venice canals at sunset",
  },
];

const foodImages = [
  {
    url: "https://images.unsplash.com/photo-1607919966473-dd0aa8cf9085?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Homemade Artisan Sourdough Bread",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1689596509741-f275e7f4b287?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Fresh Garden Salad with Citrus Vinaigrette",
  },
  {
    url: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?q=80&w=2594&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Classic Italian Pasta alla Norma",
  },
  {
    url: "https://images.unsplash.com/photo-1691201090878-1b9eab935bdd?q=80&w=1937&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Grilled Salmon with Seasonal Vegetables",
  },
  {
    url: "https://images.unsplash.com/photo-1606756790138-261d2b21cd75?q=80&w=2565&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Weekend Brunch Spread",
  },
];

function generatePostId() {
  const existingIds = Object.keys(posts).map(
    (id) => parseInt(id.replace("post", "")) || 0
  );
  const maxId = Math.max(...existingIds);
  return `post${maxId + 1}`;
}

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/blog", (req, res) => {
  res.render("blog.ejs", { posts });
});

app.get("/blog/create", (req, res) => {
  res.render("create.ejs");
});

app.post("/blog/submit", (req, res) => {
  const { title, body, date, author, tags, comments, htmlContent } = req.body;

  const newPostId = generatePostId();
  const parsedTags = tags.split(",").map((tag) => tag.trim());
  const parsedComments = comments ? parseComments(comments) : [];

  posts[newPostId] = {
    id: newPostId,
    title,
    body,
    date,
    author,
    tags: parsedTags,
    comments: parsedComments,
    htmlContent,
  };

  res.redirect("/blog");
});

app.get("/blog/edit/:postId", (req, res) => {
  const post = posts[req.params.postId];
  if (!post) {
    res.status(404).send("Post not found");
    return;
  }
  res.render("edit.ejs", { post });
});

app.post("/blog/update/:postId", (req, res) => {
  const { title, body, date, author, tags, comments, htmlContent } = req.body;
  const postId = req.params.postId;

  if (!posts[postId]) {
    res.status(404).send("Post not found");
    return;
  }

  posts[postId] = {
    ...posts[postId],
    title,
    body,
    date,
    author,
    tags: tags.split(",").map((tag) => tag.trim()),
    comments: comments ? parseComments(comments) : posts[postId].comments,
    htmlContent,
  };

  res.redirect(`/blog/${postId}`);
});

app.post("/blog/delete/:postId", (req, res) => {
  const postId = req.params.postId;
  if (!posts[postId]) {
    res.status(404).send("Post not found");
    return;
  }

  delete posts[postId];
  res.redirect("/blog");
});

app.get("/blog/:postId", (req, res) => {
  const post = posts[req.params.postId];
  if (!post) {
    res.status(404).send("Post not found");
    return;
  }
  res.render("showBlog.ejs", { post });
});

app.get("/about", (req, res) => {
  res.render("about", { aboutImages });
});

app.get("/travel", (req, res) => {
  res.render("travel", { pnwImages, europeImages });
});

app.get("/eat", (req, res) => {
  res.render("eat", { foodImages });
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

function parseComments(commentsStr) {
  return commentsStr
    .split(",")
    .map((comment) => {
      const [user, ...commentParts] = comment.split(":");
      return {
        user: user.trim(),
        comment: commentParts.join(":").trim(),
      };
    })
    .filter((comment) => comment.user && comment.comment);
}

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
