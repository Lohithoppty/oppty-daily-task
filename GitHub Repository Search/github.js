let page = 1;
const perPage = 6;
let query = "";

function searchRepos() {
  query = searchInput.value.trim();
  if (!query) return;
  page = 1;
  fetchRepos();
}

async function fetchRepos() {
  results.innerHTML = "⏳ Loading repositories...";

  try {
    const res = await fetch(
      `https://api.github.com/search/repositories?q=${query}&page=${page}&per_page=${perPage}`
    );
    const data = await res.json();

    showRepos(data.items);

    prevBtn.disabled = page === 1;
    nextBtn.disabled = data.items.length < perPage;
  } catch {
    results.innerHTML = "❌ Failed to load repositories";
  }
}

function showRepos(repos) {
  results.innerHTML = "";
  repos.forEach(repo => {
    const div = document.createElement("div");
    div.className = "repo";
    div.innerHTML = `
      <a href="${repo.html_url}" target="_blank">${repo.full_name}</a>
      <p>${repo.description || "No description available"}</p>
      <p>⭐ ${repo.stargazers_count} | 🍴 ${repo.forks_count}</p>
    `;
    results.appendChild(div);
  });
}

function changePage(step) {
  page += step;
  fetchRepos();
}