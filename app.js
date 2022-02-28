//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const homeStartingContent = "Deploy to production post launch so wheelhouse have bandwidth. Make it more corporate please close the loop helicopter view regroup, but land the plane nor weaponize the data yet waste of resources. Big boy pants put your feelers out, nor the last person we talked to said this would be ready commitment to the cause . Agile helicopter view loop back, and what are the expectations or innovation is hot right now and quick win. Drive awareness to increase engagement marginalised key performance indicators nor we don't need to boil the ocean here so are there any leftovers in the kitchen? moving the goalposts. Conversational content anti-pattern yet tbrand terrorists, so prethink, nor circle back.";
const aboutContent = "Gain traction are there any leftovers in the kitchen? yet prethink. This medium needs to be more dynamic we want to see more charts. Circle back around table the discussion . Out of scope synergestic actionables yet on this journey high turnaround rate. Touch base. Low-hanging fruit onward and upward, productize the deliverables and focus on the bottom line viral engagement i don't want to drain the whole swamp, i just want to shoot some alligators tread it daily. Net net focus on the customer journey. We're building the plane while we're flying it. Weâ€™re starting to formalize flexible opinions around our foundations vec quick-win through the lens of or zoom meeting at 2:30 today. Can you send me an invite?.";
const contactContent = "Donuts in the break room killing it, and let's unpack that later, incentivization. What the best practices, drink the Kool-aid, for zoom meeting at 2:30 today. I know you're busy zeitgeist for pixel pushing, for timeframe. I need to pee and then go to another meeting note for the previous submit: the devil should be on the left shoulder but let's circle back tomorrow nor back-end of third quarter for on your plate. Move the needle golden goose bake it in or shotgun approach we need to dialog around your choice of work attire. Back-end of third quarter finance this is meaningless exposing new ways to evolve our design language we need distributors to evangelize the new line to local markets, but put in in a deck for our standup today loop back.";

const posts = [];

app.get("/", (req, res) => {
  res.render("home", {
    startingContent: homeStartingContent,
    posts: posts
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    aboutContent: aboutContent
  });
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    contactContent: contactContent
  });
});

app.get("/compose", (req, res) => {
  res.render("compose");
});

app.post("/compose", (req, res) => {
  const postTitle = req.body.postTitle;
  const postBody = req.body.postBody;
  const post = {
    title: postTitle,
    content: postBody
  };

  posts.push(post);
  res.redirect("/");
});

app.get("/posts/:postName", (req, res) => {
  const postName = req.params.postName;

  posts.forEach((post) => {
    if (postName === post.title) console.log("Post found on " + post.title);
  });
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
