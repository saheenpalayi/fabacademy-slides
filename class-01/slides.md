# Principles and Practices
## & Project Management

<p class="subtitle">Fab Academy · Class 01</p>

Note:
Welcome. Today: choose a final project idea, get git + GitLab working, and start your documentation website.

---

## This week's assignments

<div class="two-col">
<div class="box">

### Principles and Practices
- Plan and sketch a potential final project

</div>
<div class="box">

### Project Management
- Download, read, and sign the student agreement, and commit the file to your repo
- Work through a git tutorial
- Build a personal site in the class archive describing you and your final project

</div>
</div>

---

## How you'll be evaluated

**Learning outcomes**

- Communicate an initial project proposal
- Identify and utilise version control protocol(s)
- Explore and use website development tool(s)

<p class="small">Full checklist: <a href="https://fabacademy.org/2026/nueval/principles_and_practices,_project_management">fabacademy.org/2026/nueval → Principles and Practices, Project Management</a></p>

--

### Checklist – have you…

<ul class="checklist small">
<li>Sketched your final project idea(s)</li>
<li>Described briefly what it will do and who will use it</li>
<li>Made a website and described how you did it</li>
<li>Created a section about yourself on that website</li>
<li>Added a page with your sketch and description of your final project idea(s)</li>
<li>Documented steps for setting up your Git repository and adding files to it</li>
<li>Pushed to your class GitLab repository</li>
<li>Signed and uploaded the Student Agreement</li>
</ul>

--

### Evaluation FAQ

<div class="small">

- **Already know git?** Skip the tutorial, but still document how you set up your site
- **"Describe how you made the website"** = which tools you used + the steps you took
- **Using a template?** OK – credit it, modify it, and document your changes
- **Photos?** Resize, compress and keep them in the class archive – no external hosting
- **How brief is "brief"?** At least one sketch + one paragraph

</div>

---

## Today's plan

1. Pick your final project
2. Git & GitLab – what and why
3. Install & configure git
4. Install VS Code
5. Commit `Students.md` – sign the agreement
6. Build your documentation website <span class="accent">(guest lecture: Midlaj)</span>

---

<!-- .slide: data-background-color="#1d1d1b" -->

# <span class="accent">01</span> Your Final Project

<p class="subtitle" style="color:#ccc">Something worth exploring – that you can finish in 6 months</p>

--

### What is a Fab Academy final project?

- A working device you design and **make yourself** in the lab
- Uses the skills from (almost) every week: CAD, cutting, 3D printing, electronics, machining, programming…
- Presented at the end of the program in a **1-minute video + 1 slide**
- Spiral development: plan a basic version first, then add features

Note:
Emphasise: the final project ties all the weekly assignments together. Pick something that excites you – you'll live with it for 6 months.

--

### Explore past projects

- Browse the student archives on [fabacademy.org](https://fabacademy.org) – each year lists every student's site
- Look at the **final project page** + **presentation slide/video**
- While browsing, ask:
  - What does it sense? What does it do?
  - Which fab processes were used?
  - Was the scope realistic?

Note:
Show 3–4 example projects live. Pick a mix: a simple one done really well, an ambitious one, and one with a nice mechanism.

--

### The requirements for your project

<div class="three-col">
<div class="box">

**Input**

a sensor – <span class="accent">not a button</span>

</div>
<div class="box">

**Output**

an actuator / display / sound – <span class="accent">not an LED</span>

</div>
<div class="box">

**MCU**

your own microcontroller board

</div>
</div>

<p class="fragment">⭐ Nice to have: a <strong>mechanism</strong> – something that moves</p>

--

### Do an initial sketch

- Paper and pencil is perfect
- Show the **parts**, how it's **used**, and roughly **what's inside**
- Label input, output and MCU
- Take a photo → compress it → add it to your final project page

--

### Describe it in a few lines

Answer these in one short paragraph:

- **What** does it do?
- **Who** will use it?
- **Features** – list 3 to 5

<pre class="small"><code class="language-markdown">## Final project: Smart Plant Pot
A pot that measures soil moisture and light, and waters the
plant automatically. For people who forget to water plants.

Features: moisture sensor · water pump · OLED display · app alerts
</code></pre>

--

### Extra: generate ideas using AI

- Use ChatGPT / Claude / Gemini as a **brainstorming partner**
- Give it your interests + the constraints (input, output, MCU, 6 months)
- Ask for 10 ideas, then refine 1–2
- The final choice, sketch and description should be **yours**

<pre class="small"><code class="language-text">I'm a Fab Academy student. My interests are music and gardening.
Suggest 10 final project ideas that use a sensor (not a button),
an output (not an LED), a custom microcontroller board and,
ideally, a mechanism. They must be buildable in 6 months.
</code></pre>

---

<!-- .slide: data-background-color="#1d1d1b" -->

# <span class="accent">02</span> Git & GitLab

<p class="subtitle" style="color:#ccc">Version control for your documentation</p>

--

### What is Git?

- A **version control system** – it tracks every change to your files
- Each saved snapshot is a **commit**
- You can go back in time, see who changed what, and work offline
- Your Fab Academy website lives in a **git repository**

--

### What is GitLab?

- A website that **hosts git repositories online** (the "remote")
- Fab Academy uses its own GitLab: [gitlab.fabcloud.org](https://gitlab.fabcloud.org)
- Every push to your repo **automatically publishes** your website
- GitHub is a similar service – same git, different website

--

### How it fits together

<pre><code class="language-text">  Your laptop                        GitLab (fabcloud)
 ┌──────────────┐    git push     ┌──────────────────┐
 │  local repo  │ ──────────────▶ │   remote repo    │ ──▶ website
 │  (VS Code)   │ ◀────────────── │                  │     published
 └──────────────┘    git pull     └──────────────────┘
</code></pre>

--

### Ways to use git

<div class="three-col">
<div class="box">

**Terminal**

`git add`, `git commit`, `git push` – works everywhere, what we'll learn first

</div>
<div class="box">

**VS Code**

Source Control panel – click to stage, commit and sync

</div>
<div class="box">

**GitHub Desktop**

A friendly GUI app – also works with GitLab repos

</div>
</div>

--

### Learning git (with AI)

- Interactive tutorial: [learngitbranching.js.org](https://learngitbranching.js.org)
- The free book: [git-scm.com/book](https://git-scm.com/book)
- Ask AI to **explain** an error or a command – then run it yourself
- Don't paste commands you don't understand ⚠️

---

<!-- .slide: data-background-color="#1d1d1b" -->

# <span class="accent">03</span> Install & configure git

--

### Install git

<div class="three-col small">
<div class="box">

**macOS**

<pre><code class="language-bash">xcode-select --install
# or, with Homebrew:
brew install git</code></pre>

</div>
<div class="box">

**Linux**

<pre><code class="language-bash">sudo apt install git</code></pre>

</div>
<div class="box">

**Windows**

Download from [git-scm.com](https://git-scm.com/downloads) → installs **Git Bash**

</div>
</div>

Check it works:

<pre><code class="language-bash">git --version</code></pre>

--

### Configure git (once per computer)

<pre><code class="language-bash">git config --global user.name "Your Name"
git config --global user.email "you@example.com"

git config --list   # check your settings
</code></pre>

Use the **same email** as your GitLab account

--

### Connect to GitLab with an SSH key

<pre class="small"><code class="language-bash"># 1. create a key (press Enter to accept the defaults)
ssh-keygen -t ed25519 -C "you@example.com"

# 2. copy the public key
cat ~/.ssh/id_ed25519.pub

# 3. GitLab → Preferences → SSH Keys → paste it → Add key

# 4. test the connection
ssh -T git@gitlab.fabcloud.org
</code></pre>

Note:
Never share the private key (the file without .pub).

--

### Clone your repository

1. Open your repo on GitLab → **Code** → copy **Clone with SSH**
2. In the terminal:

<pre><code class="language-bash">cd ~/Documents
git clone git@gitlab.fabcloud.org:academany/fabacademy/2026/...your-repo.git
cd your-repo
</code></pre>

Now you have a local copy of your website 🎉

---

<!-- .slide: data-background-color="#1d1d1b" -->

# <span class="accent">04</span> VS Code

--

### Install VS Code

- Download: [code.visualstudio.com](https://code.visualstudio.com)
- Open your repo: **File → Open Folder…**
- Built-in terminal: <kbd>Ctrl</kbd> + <kbd>`</kbd>
- Built-in git: the **Source Control** panel

--

### Useful extensions

- **Live Server** – preview your site, auto-reloads on save
- **Prettier** – auto-formats HTML / CSS / JS
- **Markdown All in One** – if you write in Markdown
- **GitLens** – see the history of every line
- **Code Spell Checker** – catches typos in your documentation

---

<!-- .slide: data-background-color="#1d1d1b" -->

# <span class="accent">05</span> Student Agreement

<p class="subtitle" style="color:#ccc">Your first commit</p>

--

### Sign the student agreement

1. Download and **read** the student agreement
2. Add your name to it → save as `Students.md` in your repo
3. Commit and push it (next slide)

--

### Add → Commit → Push

<pre><code class="language-bash">git status                       # what changed?
git add Students.md              # stage the file
git commit -m "Add signed student agreement"
git push                         # send it to GitLab
</code></pre>

<pre class="small"><code class="language-text">files ──add──▶ staging ──commit──▶ local repo ──push──▶ GitLab
</code></pre>

--

### Good habits

- Commit **small and often**, with clear messages
- `git pull` before you start working
- **Compress images** before adding them – the repo should stay small
- Never commit huge videos or CAD files – resize / link instead

<pre class="small"><code class="language-bash"># resize + compress a photo with ImageMagick
magick photo.jpg -resize 1200x -quality 75 photo-small.jpg
</code></pre>

---

<!-- .slide: data-background-color="#1d1d1b" -->

# <span class="accent">06</span> Your Documentation Website

<p class="subtitle" style="color:#ccc">Guest lecture: Midlaj</p>

--

### What your site needs

<div class="two-col">
<div class="box">

**Pages**
- Home
- About me
- Assignments → Week 1
- Final project

</div>
<div class="box">

**Final project page**
- Initial sketch
- Short description
- Features list

</div>
</div>

--

### The building blocks

<div class="three-col">
<div class="box">

**HTML**

the content and structure

</div>
<div class="box">

**CSS**

the look – colours, fonts, layout

</div>
<div class="box">

**JavaScript**

interactivity (optional)

</div>
</div>

<pre class="small"><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;&lt;link rel="stylesheet" href="style.css"&gt;&lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Hi, I'm Saheen&lt;/h1&gt;
    &lt;img src="images/sketch.jpg" alt="Final project sketch"&gt;
  &lt;/body&gt;
&lt;/html&gt;
</code></pre>

--

### Generating your site with AI

- AI can scaffold a starting site in minutes
- But you must **understand and modify** the code
- **Document** what you asked, what it produced, and what you changed
- Templates are OK too – **credit** the original and show your edits

--

### Copyright

- Only use images, code and text you are **allowed** to use
- **Credit** your sources (templates, photos, libraries, AI tools)
- Choose a license for your own work, e.g. [Creative Commons](https://creativecommons.org/share-your-work/)
- Add a footer, e.g. *© 2026 Your Name – CC BY-NC-SA 4.0*

---

## Before next class ✅

<ul class="checklist">
<li>Final project sketch + description on your site</li>
<li><code>Students.md</code> signed and pushed</li>
<li>Website with Home, About, Week 1 and Final project pages</li>
<li>Week 1 page documents how you set up git and built the site</li>
</ul>

---

# Questions?

<p class="subtitle"><a href="../">← Back to all classes</a></p>
