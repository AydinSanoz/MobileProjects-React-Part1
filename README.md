# React Native Portfolio Building

Purpose of the this portfolio building will include my React Native Projects 

##  Waiting Outcomes of This Repository

- Understand components structure

- Understand styling basics

- From Basic to High Level React library Usage

## Outline

- Part 1 - Components
  
- Part 2 - Styling


---
# Project 008 - Login Page
! [Project 008 Login Page](./images/Screen%20Shot%202020-10-12%20at%2023.29.37.png)


---
# Project 009 - News Page
- ![Project 010 NewsPage](./images/newspage.gif)


---
# Project 010 - To-Do App
- ![Project 011 To-Do App](./images/todoApp.gif)

## Happy Coding!






### The easiest way to convert your screenrecording to gif.


- Save your screen recording as the name ' in.mov'
- open a terminal at the same folder in.mov file.
- if not installed this do these firs
brew install ffmpeg 
brew cask install xquartz #dependency for gifsicle, only required for mountain-lion and above
open /usr/local/Cellar/x-quartz/2.7.4/XQuartz.pkg # runs the XQuartz installer (YOU NEED TO UPDATE THE PATH)
brew install gifsicle
- paste this command line to your terminal 
  ffmpeg -i in.mov -s 600x400 -pix_fmt rgb24 -r 10 -f gif - | gifsicle --optimize=3 --delay=3 > out.gif
