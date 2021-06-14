# UCSD-CodeBootCamp-portfolio-react

My portfolio rebuilt using React

## Progress

### 2020.05.22_2143

Initial Commit.  Created react app and linked remote to github repo.

### 2020.05.22_2312

Ran npm i, and configured 'package.json' for heroku, and then created heroku app for project, and connected it to github project repo, enabling automatic deployments.  I created .pngs and .ico files with my initials to be used by the project in '/assets', and added the output images to '/public/', and then updated the links in 'index.html'.

### 2020.05.22_2335

Third attempt to fix heroku build, ran 'npm run build', and created 'build' folder structure, updated 'package.json', and ran 'npm install'.

### 2020.05.22_2350

Added images to '/src/images' folder, and updated folder structure.

### 2020.05.23_1403

Updated 'App.js' and 'App.css', and 'index.css'.  Added Navbar component, and shells for each page.

### 2020.05.23_1421

After analyzing activity example of 'Grid' component, I decided to break it out into three components for 'Col', 'Row', and 'Container'.  I then updated 'Navbar' component from a function component into a class component.

### 2020.05.23_1435

I created 'Container' and 'Row' components' 'index.js' files.

### 2020.05.23_2012

I added and configured Travis CI to project repo. I created 'Col' component's 'index.js' file.

### 2020.05.23_2024

I added page shell for 'Home.js' to '/pages'.

### 2020.05.23_2045

I commented out page shell for 'Home.js' and removed it from navbar in attempt to fix navbar behavior.  I then updated the .js files in /pages to use class components.

### 2020.05.23_2054

I corrected imports and syntax for class components in /pages .js files.

### 2020.05.23_2128

I troubleshooted navbar for awhile, during which I re-added 'home.js' and associated links.  I created a NavWrap component to contain the navbar, and updated component naming conventions.  I am still running into an issue where each page renders below the home page.  I think I can work around this for now, by having the homepage be largely only background; However, I would like to revisit this issue later.  

### 2020.05.23_2210

Added '.travis.yml' file to root project folder.

### 2020.05.23_2302

Removed '.travis.yml' file from root project folder, and removed travis ci from project for now.  I do not have ruby installed in order to get trvis cli in order to get api key.

### 2020.05.23_234

I have converted chunks of html from my previous portfolio in jsx, and added piece by piece into each of the .js files in /pages.  I then troubleshooted links and css.
