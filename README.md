Retardium ($RT) Static Website

Description:
Simple, mobile-friendly landing page for the Retardium meme coin. Includes:

About section

How to Buy guide

Tokenomics

Community links

Swap widget (Jupiter iframe)

File Structure

retardium-site/       ← repo root
├── index.html        ← main HTML file
├── style.css         ← global styles
├── script.js         ← animations & blob background
├── Retardium.png     ← logo (if used)
├── README.md         ← project documentation
└── LICENSE           ← license terms (if chosen)

Getting Started Locally

Clone the repo

git clone https://github.com/<your-username>/retardium-site.git
cd retardium-site

Open in browser

Simply open index.html in your favorite browser.

Customization

Token Mint Address:
Edit the src attribute on the <iframe> in index.html:

<iframe
  src="https://jup.ag/swap/SOL-<YOUR_MINT_ADDRESS>"
  ...
></iframe>

Blob Speed:
Tweak the speedFactor constant in script.js to change background animation speed.

Text & Links:
Update section copy, social handles, and URLs directly in index.html.

Deployment on Vercel

Push your code to a Git repo (GitHub, GitLab, Bitbucket).

Go to https://vercel.com/new/import and import your repo.

Vercel auto-detects a static site and deploys in seconds.

Add your custom domain under Settings → Domains, then follow the DNS instructions provided by Vercel.

License

This project is released under the Creative Commons Zero v1.0 Universal (CC0 1.0) Public Domain Dedication. That means:

🆓 You can use, modify, and distribute the code for any purpose, without attribution.

📜 The original author waives all copyright and related rights.

🔗 Read the full license text here: https://creativecommons.org/publicdomain/zero/1.0/

If you later decide to adopt a different license, add a LICENSE file and update this section accordingly.

