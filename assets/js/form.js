document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('blogForm').addEventListener('submit', function(event) {
      event.preventDefault();

      const username = document.getElementById('username').value.trim();
      const title = document.getElementById('title').value.trim();
      const content = document.getElementById('content').value.trim();

      if (username && title && content) {
          const post = {
              username,
              title,
              content
          };

          let posts = JSON.parse(localStorage.getItem('posts')) || [];
          posts.push(post);
          localStorage.setItem('posts', JSON.stringify(posts));

          window.location.href = 'blog.html';
      } else {
          alert('Please fill in all fields');
      }
  });
});
