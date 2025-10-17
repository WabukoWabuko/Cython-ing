// script.js - behavior: dark mode toggle, copy-to-clipboard, syllabus download, year
document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('themeToggle');
  const body = document.body;
  const yearNode = document.getElementById('year');
  yearNode.textContent = new Date().getFullYear();

  // remember theme in localStorage (simple)
  const saved = localStorage.getItem('cython_theme');
  if (saved === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.checked = true;
  }

  themeToggle.addEventListener('change', function() {
    if (this.checked) {
      body.classList.add('dark-mode');
      localStorage.setItem('cython_theme', 'dark');
    } else {
      body.classList.remove('dark-mode');
      localStorage.removeItem('cython_theme');
    }
  });

  // copy buttons
  document.querySelectorAll('button[data-copy]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const value = btn.getAttribute('data-copy');
      navigator.clipboard.writeText(value).then(() => {
        btn.innerText = 'Copied!';
        setTimeout(()=> btn.innerText = 'Copy', 1400);
      }).catch(()=> {
        alert('Copy failed — just select and copy manually.');
      });
    });
  });

  // download syllabus as JSON (simple export of curriculum outline)
  document.getElementById('downloadSyllabus').addEventListener('click', () => {
    const syllabus = {
      title: "Cython Mastery — Course Roadmap",
      author: "WabukoWabuko",
      contact: {
        phone: "+254740750403",
        email: "basilwabbbs@gmail.com",
        github: "https://github.com/WabukoWabuko",
        portfolio: "https://wabuko-portfolio.vercel.app"
      },
      modules: [
        { id: 1, title: "Foundations", duration_weeks: 1 },
        { id: 2, title: "Cython Language Basics", duration_weeks: 2 },
        { id: 3, title: "Performance Optimization", duration_weeks: 2 },
        { id: 4, title: "Interfacing with C & C++", duration_weeks: 1.5 },
        { id: 5, title: "Real-World Applications", duration_weeks: 2 },
        { id: 6, title: "Teaching & Sharing Knowledge", duration_weeks: 1 },
        { id: 7, title: "Deep Dive & Maintenance", duration_weeks: 1.5 }
      ],
      estimated_total_weeks: 11.0
    };

    const blob = new Blob([JSON.stringify(syllabus, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'cython-syllabus.json';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  });
});

