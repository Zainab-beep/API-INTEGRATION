function loadNews() {
 let apiKey="b3c509eabb146009496c9aa0f85bd7ed"
 let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=b3c5092eb4b14600949c9aa0f85bd7ed`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      let newsBox = document.getElementById("news");
      newsBox.innerHTML = "";
      console.log(data);
      if (data.articles.length === 0) {
        newsBox.innerHTML = "<p>No news found.</p>";
      }

      data.articles.forEach(item => {
        let div = document.createElement("div");
        div.className = "news-item";

        let imageURL = item.urlToImage ? item.urlToImage : "https://via.placeholder.com/100";

        div.innerHTML = `
          <img src="${imageURL}" alt="news-img">
          <div class="news-details">
            <h3>${item.title}</h3>
            <p>${item.description ? item.description : "No description available."}</p>
            <a href="${item.url}" target="_blank">Read more</a>
          </div>
        `;

        newsBox.appendChild(div);
      });
    })
    .catch(() => {
      document.getElementById("news").innerHTML = "<p>Something went wrong. Try again later.</p>";
    });
}