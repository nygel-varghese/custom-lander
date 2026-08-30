/*
  NYGEL ONLINE — TEMPORARY PLACEHOLDER

  Edit only this CONFIG block when you need to change the launch
  date or the collection of thoughts.

  launchDate:
    ISO 8601 date/time with an explicit timezone offset.
    Example: "2027-01-01T00:00:00+05:30"
*/

const CONFIG = {
  launchDate: "2027-01-01T00:00:00+05:30",

  quotes: [
  "Curiosity is a better starting point than certainty.",
  "A good question can be more useful than a good answer.",
  "The best way to predict the future is to build it.",
  "I try to make things clear before I make them clever.",
  "The work gets interesting when the obvious answer stops being enough.",
  "What you pay attention to is, quite literally, the life you live.",
  "The interesting things usually begin with a question.",
  "Stay curious long enough to change your mind.",
  "Questions open doors that answers tend to close.",
  "Wonder is useful. Keep some of it.",
  "The better question often changes the better answer.",
  "Curiosity keeps the world from becoming banal.",
  "There is usually more to understand.",
  "Pay attention to what makes you curious.",
  "Ideas become interesting when they become tangible.",
  "Thinking is useful. Building is even more so.",
  "Start with something small enough to build.",
  "Good work leaves evidence that someone cares.",
  "Make something; anything. Then make it better.",
  "You learn a different kind of truth by making things.",
  "The first version only needs to exist.",
  "A rough beginning is still a beginning.",
  "Make room for the unfinished.",
  "Some ideas need to be built to be understood.",
  "The distance between an idea and a thing is often times the breadth of the first step.",
  "Attention is one of the few things you can choose every day.",
  "Not everything deserves your attention. Unless the thing you're thinking about happens to be a person.",
  "Slow down enough to notice what is actually happening.",
  "Clarity begins when one eliminates noise.",
  "Good thinking usually starts with paying attention.",
  "The obvious is worth questioning. Always.",
  "Take your time with things that matter.",
  "A change in your perspective can make the familiar feel interesting.",
  "Thinking clearly is harder than thinking quickly.",
  "Sometimes the answer is hiding inside the question.",
  "There is much value in sitting with an unfinished thought.",
  "Change your mind when the evidence changes.",
  "Knowing more should make us more curious.",
  "Learning begins where certainty feels askew.",
  "You don't have to be correct to be moving forward.",
  "A useful idea should survive being questioned.",
  "Every good lesson changes what you notice next.",
  "Studying something is different from knowing about it.",
  "Keep the parts that still surprise you.",
  "Growth often looks like becoming less certain about the right things.",
  "The internet is still a remarkably interesting place to make things.",
  "There is still plenty of room to make something original.",
  "The internet rewards attention, but you still decide where to place it.",
  "We have never had more ways to make things.",
  "The tools keep changing. The need to make endures.",
  "Technology changes quickly. But we'll always have interesting problems to solve.",
  "The future tends to arrive looking ordinary at first.",
  "There is something worth making in almost every corner of the internet.",
  "Digital touchpoints can still feel remarkably human.",
  "A life is partly the collection of things you choose to notice.",
  "Leave some room for things you didn't plan.",
  "Not every useful thing needs to be productive.",
  "Some of the best ideas arrive without an appointment.",
  "Keep a few unfinished ideas around.",
  "The things you return to are usually telling you something.",
  "There is more than one way to make a meaningful thing.",
  "A good life probably contains a reasonable number of rabbit holes.",
  "It's okay to follow an interesting idea a little further.",
  "The point isn't always to arrive.",
  "Some paths are worth taking simply because they are interesting.",
  "Make space for the things that don't have an obvious purpose.",
  "Stay interested. It is a surprisingly good strategy.",
  "Ask an artist, there is no such thing as a mistake.",
  "There are a few things worth figuring out.",
  "Stay curious. Make things.",
  "Somewhere between thinking and making, things get interesting.",
  "The winner takes it all, no matter how many times you fall.",
  "Ideas, observations, questions, and the occasional rabbit hole...the stuff of Saturdays well spent.",
  "Still working it out is as fine today as ever.",
  "Everything in the universe is a work in progress, in more ways than one.",
  "There is probably something interesting anywhere.",
  "Right now is always the best Where to live."
  ]
};

const $ = (id) => document.getElementById(id);
const launchTime = new Date(CONFIG.launchDate).getTime();
let lastQuoteIndex = -1;

function pad(value) {
  return String(value).padStart(2, "0");
}

function updateCountdown() {
  const remaining = Math.max(0, launchTime - Date.now());
  const totalSeconds = Math.floor(remaining / 1000);

  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  $("days").textContent = String(days).padStart(2, "0");
  $("hours").textContent = pad(hours);
  $("minutes").textContent = pad(minutes);
  $("seconds").textContent = pad(seconds);
}

function showQuote() {
  if (!CONFIG.quotes.length) return;

  let index = Math.floor(Math.random() * CONFIG.quotes.length);

  if (CONFIG.quotes.length > 1) {
    while (index === lastQuoteIndex) {
      index = Math.floor(Math.random() * CONFIG.quotes.length);
    }
  }

  lastQuoteIndex = index;

  const quote = $("quote");
  quote.style.opacity = "0";

  window.setTimeout(() => {
    quote.textContent = CONFIG.quotes[index];
    quote.style.opacity = "1";
  }, 120);
}

$("another-thought").addEventListener("click", showQuote);
$("year").textContent = new Date().getFullYear();

showQuote();
updateCountdown();
window.setInterval(updateCountdown, 1000);
