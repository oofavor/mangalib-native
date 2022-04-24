# Clone of [mangalib](https://mangalib.me/) PWA to React Native.

## Why it's made and for who?
I started this project because I wanted to level my skills in development. 

Mangalib and remanga don't have their own apps and relies only on PWAs, which are quite bad in terms of perfomance and usablitity. My app is well... I think I should've started writing this app in the flutter in the first place. It lacks in perfomance even tho not as critical as PWAs.  

You may use my code to show how to blend a million different patterns, how not to start big project development and just why not to use react native.


## For employers and HRs
The codebase is pretty messy, don't look at it, just check how many files created and that it works...

Feel free to employ me for remote work (please do)!

## Known bugs
- Project uses react-native-largelist so because of hypersensitivity users can encounter accident presses
- [Mangalib](https://mangalib.me/) API is hidden behind their SSR so this project uses [remanga](https://remanga.org/) api which lacks in some areas (notifications, title details such as the author and the artist)
- Loading the app takes a lot of time, and it's not just React Native performance, api calls resolve only after ~30sec after app loaded
- When navigating from TitleScreen back there's is a glitch happens which flicks the image


