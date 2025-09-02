## Setup
WP Version
- Install zip in LocalWP or similar platform (unhosted)

Next Version
- Node 18+
- `npm i`
- `npm run dev` (http://localhost:3000)

## Notes / Decisions
- I built out the WP site first, as I knew the markup and css would largely be the same, and the WP would require some extra syntax and boilerplate
- I decided for the sake of clarity and time, to place all css styles in a single file, and to not use css modules in the next app
- Whenever I am working from a wireframe, I bring in all assets, then build from the top of the page down, creating all elements required before styling
- For this code challenge, the next app was a simple port from the working WP build.

## Time Spent/Known Tradeoffs
- The challenge states a pixel-perfect margin of error of +/- 2-4 pixels. I always seek for perfect parity, which takes more time
- As a result of working for visual accuracy, the WP site was built in a single large push, while the next app was ported in smaller increments to display repo hygiene
- I ran into an issue with the credit card assets not exporting as full images (I left them in the img folder for you to see), so for the WP site I exported the whole image block as one, which dropped the backdrop-filter: blur effect.
- In the next app, I opted to create a rough mock-card asset to show I can create the blur effect appropriately. It is only present on desktop, and swaps out to the static asset for mobile. It is a bit rough (offset not exact, blur interacting with lower pane), but was done quickly as a proof-of-concept.
- Approximately 6.5 hours in total, not including time spent trying to figure out how to get the full card asset out of Figma. (Need full access to get the unstyled asset)
