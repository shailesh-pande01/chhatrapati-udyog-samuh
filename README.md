# छत्रपती उद्योग समूह – Static Website

Simple static website for land plotting in भोकरदन, जालना.
Built with plain HTML, CSS, and JavaScript. No backend required.

---

## Folder Structure

```
chhatrapati-static/
├── index.html                  ← Website (do not edit)
├── css/
│   └── style.css               ← Design/colors (do not edit)
├── js/
│   ├── data.js                 ← ✅ EDIT THIS FILE to update content
│   └── app.js                  ← Logic (do not edit)
├── images/
│   ├── rajmudra.png            ← Add your Rajmudra logo here
│   └── projects/
│       ├── shiv-nagar/         ← Add शिव नगर photos here
│       └── jijau-nagar/        ← Add जिजाऊ नगर photos here
└── README.md                   ← This file
```

**Simple rule: Only edit `js/data.js` for all updates.**

---

## How to Update the Website

### 1. Change available or sold plots

Open `js/data.js`, find the project, and change the numbers:

```js
availablePlots: 15,   // ← Change to new number
soldPlots:      5,    // ← Change to new number
```

Save the file. If deployed on Vercel, push to GitHub (see below).

---

### 2. Change contact phone number

Open `js/data.js`, find the contacts section:

```js
contacts: {
  primary: {
    name:  'भगवान पांडे',
    phone: '9028730624',   // ← Change phone here
```

---

### 3. Add photos to a project

**Step 1** – Copy your photo into the correct folder:
- शिव नगर photos → `images/projects/shiv-nagar/`
- जिजाऊ नगर photos → `images/projects/jijau-nagar/`

Use simple names without spaces: `photo1.jpg`, `front.jpg`, `plot.jpg`

**Step 2** – Open `js/data.js` and add the filename to the photos array:

```js
photos: [
  'images/projects/shiv-nagar/photo1.jpg',
  'images/projects/shiv-nagar/photo2.jpg',
],
```

**Remove a photo:** Delete that line from the array. The file stays in the folder but won't show on the website.

---

### 4. Add Rajmudra logo

Save your image file as exactly: `images/rajmudra.png`

It will appear automatically in the header circle. If the file is missing, a placeholder text shows instead.

---

### 5. Add a new project

Open `js/data.js`, scroll to the bottom of the `projects` array, and copy-paste this block:

```js
,{
  id:             'navi-nagar',      // unique name, no spaces or Marathi
  name:           'नवीन नगर',
  location:       'भोकरदन, जालना',
  availablePlots: 10,
  soldPlots:      0,
  plotSizes:      '१५०० ते २५०० चौ.फूट',
  price:          'संपर्क करा',
  road:           'उपलब्ध',
  water:          'उपलब्ध',
  electricity:    'उपलब्ध',
  documents:      'कायदेशीर उपलब्ध',
  photos: [],
  active: true
}
```

Also create the photo folder: `images/projects/navi-nagar/`

---

### 6. Hide a project (without deleting)

Set `active: false` in data.js:

```js
active: false   // ← project hidden from website
```

Change back to `true` to show it again.

---

## Deploy to Vercel (Free Hosting)

See the separate deployment guide: `deployment-guide.html`

Short version:
1. Upload this folder to GitHub
2. Connect GitHub to Vercel
3. Vercel auto-deploys on every push

---

## Make a change live on Vercel

After editing `data.js` or adding photos:

```bash
git add .
git commit -m "updated plot count"
git push
```

Vercel auto-deploys within 1–2 minutes.

---

## Local Testing (without internet)

Just double-click `index.html` to open in browser.
No server needed for local testing.

---

*जय शिवाजी | जय भवानी*
