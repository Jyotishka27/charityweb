const params = new URLSearchParams(window.location.search);
const postId = params.get("id");

const post = posts.find(p => p.id === postId);
const container = document.getElementById("post-container");

if (!post) {
  container.innerHTML = "<p>Post not found</p>";
} else {
  container.innerHTML = `
    <img src="${post.image}" class="w-full h-64 object-cover rounded-xl mb-6" />
    <span class="text-sm text-indigo-600 font-semibold">${post.category}</span>
    <h1 class="text-3xl font-bold mt-2">${post.title}</h1>
    <p class="text-slate-600 mt-4">
      ${post.excerpt}
    </p>

    <div class="mt-6 p-4 bg-white rounded-lg border">
      <p class="text-sm text-slate-500">Posted by</p>
      <p class="font-semibold">${post.ngo}</p>
      <p class="text-sm text-slate-500">${post.location}</p>
    </div>

    <a href="#" class="inline-block mt-6 bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold">
      Donate / Learn More
    </a>
  `;
}

