const feed = document.getElementById("post-feed");

posts.forEach(post => {
  const card = document.createElement("a");
  card.href = `post.html?id=${post.id}`;
  card.className = "bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden";

  card.innerHTML = `
    <img src="${post.image}" class="h-48 w-full object-cover" />
    <div class="p-4">
      <span class="text-xs text-indigo-600 font-semibold">${post.category}</span>
      <h2 class="text-lg font-bold mt-1">${post.title}</h2>
      <p class="text-sm text-slate-600 mt-2">${post.excerpt}</p>
      <div class="text-xs text-slate-500 mt-3">
        ${post.ngo} • ${post.location}
      </div>
    </div>
  `;

  feed.appendChild(card);
});

