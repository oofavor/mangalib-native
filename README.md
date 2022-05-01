# Clone of [mangalib](https://mangalib.me/) PWA to React Native.

## If you work at [Mangalib](https://mangalib.me/)
If you can, you may give me your api endpoints and stuff... <b>I won't leak them. I promise</b>.

## Why it's made and for who?
Mangalib and remanga don't have their own apps and relies only on PWAs, which are quite bad in terms of perfomance and usablitity. 

I wanted to make a native app that looks almost like Mangalib PWA, but with improved UX. 

Unfortunatly, mangalib doesn't have open api and I have to use remanga's api, which as stated below lacks in some areas like notifications and etc.

## For employers and HRs
`pleaseHireMe(remote)(pls).then(result => console.error('you will make more money'))`

## Known bugs
- Project uses react-native-largelist so because of hypersensitivity users can encounter accident presses
- [Mangalib](https://mangalib.me/) API is hidden behind their SSR so this project uses [remanga](https://remanga.org/) api which lacks in some areas (notifications, title details such as the author and the artist)
- Loading the app takes a lot of time, and it's not just React Native performance, api calls resolve only after ~30sec after app loaded
- When navigating from TitleScreen back there's is a glitch happens which flicks the image


