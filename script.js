const accessKey = "19vaC-fcXN_2rkqSDJe1N__h0LmmNN9_0On8j-IyXDA";

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMore = document.getElementById("show-more");

let keyword = '';
let page = 1;
let loadedPages = 0;

async function searchImages() {
	keyword = searchBox.value;
	const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

	const response = await fetch(url);
	const data = await response.json();

	if(page === 1){
		searchResult.innerHTML = ""; 
	}

	const results = data.results;


	results.map((result) => {
		const image = document.createElement("img");
		image.src = result.urls.small;
		const imageLink = document.createElement("a");
		imageLink.href = result.links.html;
		imageLink.target = "_blank";

		imageLink.appendChild(image);
		searchResult.appendChild(imageLink);
	})
	showMore.style.display = "block";
}

searchForm.addEventListener("submit", (e) =>{
	e.preventDefault();
	page = 1;
	loadedPages = 0;
	searchImages();
});

showMore.addEventListener("click", () =>{
	page++;
	searchImages();
})
/*window.addEventListener("scroll", () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight) {
    	if (loadedPages >= 15) {
    		alert("You have reached the end.");
    		return;
    	}
        page++;
        loadedPages++;
        searchImages();
    }
});*/



