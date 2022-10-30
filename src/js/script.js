window.onload = function() {
    //fetch('https://api.jsonbin.io/v3/b/635e94470e6a79321e395bff?meta=false') 

    fetch('res/json/myjson.json') 
        .then((response) => response.json())
        .then(json => {
            console.log(json);
            let div1 = document.createElement("div");
            div1.className = 'postbox';
    
            for (let i = 0; i < json.length; i++) {
                let div = document.createElement("div");
                div.className = 'post';
                
                let postTitle = document.createElement("h3");
                postTitle.innerText = json[i].title;
                div.appendChild(postTitle);

                let postBody2 = document.createElement("p");
                postBody2.innerText = json[i].body;
                div.appendChild(postBody2);

                let div2 = document.createElement("div");
                div2.className = 'author'

                let postAuthor = document.createElement("h4");
                postAuthor.innerText = json[i].author;
                div2.appendChild(postAuthor);

                let postTime = document.createElement("h4");
                postTime.innerText = json[i].time;
                div2.appendChild(postTime);

                let postTimeOfDay = document.createElement("h4");
                postTimeOfDay.innerText = json[i].timeOfDay;
                div2.appendChild(postTimeOfDay);

                let postWeekday = document.createElement("h4");
                postWeekday.innerText = json[i].weekday;
                div2.appendChild(postWeekday);

                let postWeather = document.createElement("h4");
                postWeather.innerText = json[i].weather;
                div2.appendChild(postWeather);

                let postMood = document.createElement("h4");
                postMood.innerText = json[i].mood;
                div2.appendChild(postMood);
                
                let postImage = document.createElement("img");
                postImage.src = json[i].image;
                postImage.alt="";

                div.appendChild(postImage);


                div.appendChild(div2);
                
                div1.appendChild(div);
                document.body.appendChild(div1);
            }
            
        })

        .catch(err => {
        let errDiv = document.createElement("div");
        errDiv.className = 'post';
        errDiv.innerText = err;
        document.body.appendChild(errDiv);
        })


}
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }