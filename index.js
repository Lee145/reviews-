// local reviews data
const reviews = [
    {
      id: 1,
      name: "anna peres",
      job: "web developer",
      img:
        "anne-peres-unsplash.jpg",
      text:
        "A history of everything you copy Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices. Download for iOS Download for Mac Keep track of your snippets Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices.",
    },
    {
      id: 2,
      name: "ayo ogunseide",
      job: "web designer",
      img:
        "ayo-ogunseinde-unsplash.jpg",
      text:
        " Our Mac and iOS apps will help you organize everything. Quick Search Easily search your snippets by content, category, web address, application, and more. iCloud Sync Instantly saves and syncs snippets across all your devices",
    },
    {
      id: 3,
      name: "eye ebony",
      job: "intern",
      img:
        "eye-for-ebony-unsplash.jpg",
      text:
"Complete History Retrieve any snippets from the first moment you started using the app. Access Clipboard anywhere Whether you’re on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks. Supercharge your workflow We’ve got the tools to boost your productivity.",
    },
    {
      id: 4,
      name: "matheus ferrero",
      job: "the boss",
      img:
        "matheus-ferrero-unsplash.jpg",
      text:
        "Create blacklists Ensure sensitive information never makes its way to your clipboard by excluding certain sources. Plain text snippets Remove unwanted formatting from copied text for a consistent look. Sneak preview Quick preview of all snippets on your Clipboard for easy access.",
    },
  ];

  window.addEventListener("DOMContentLoaded", function () {
    suprise();
  });
  let img = document.getElementById("person-img")
  let reviewEl = document.getElementById("review")
  let author = document.getElementById("author")
  let job = document.getElementById("job")
  let info = document.getElementById("info")
  let prevBtn = document.getElementById("prev-btn")
  let  nextBtn = document.getElementById("next-btn")


let activeReview = 0

  function suprise() {
    let randomReview = reviews[getRandomReviews()]
 img.src = randomReview.img
 author.textContent = randomReview.name
 job.textContent = randomReview.job
 info.textContent = randomReview.text
   }
  
   function previous() {
    if(activeReview <= 0){
      activeReview = reviews.length
      activeReview--
    }
    suprise()
   }
   

  function next() {
   if(activeReview >=reviews.length -1){
    activeReview=-1
    activeReview++
    
   } 
   suprise()
  }

  

  let getRandomReviews = function() {
    return Math.floor(Math.random()*reviews.length)
  }