/**
 * ═══════════════════════════════════════════════════════════════
 *  data.js  –  छत्रपती उद्योग समूह
 * ═══════════════════════════════════════════════════════════════
 *
 *  हे एकच फाईल संपादित करून सर्व website update करा.
 *  फक्त हे फाईल बदला – बाकी काहीही बदलण्याची गरज नाही.
 *
 *  TO UPDATE THE WEBSITE: edit only this file.
 *  You do NOT need to touch index.html, style.css, or app.js.
 *
 * ═══════════════════════════════════════════════════════════════
 */

const SITE = {

  /* ─────────────────────────────────────────────────────────
     WEBSITE NAME & LOCATION
     ───────────────────────────────────────────────────────── */
  name:     'छत्रपती उद्योग समूह',
  tagline:  'भोकरदन, जालना – विश्वासार्ह प्लॉट योजना',
  location: 'भोकरदन, जिल्हा जालना, महाराष्ट्र',

  /* ─────────────────────────────────────────────────────────
     CONTACTS
     primary   = shown on all pages (top bar, modal, everywhere)
     secondary = shown only on Contact page and Footer
     ───────────────────────────────────────────────────────── */
  contacts: {
    primary: {
      name:  'भगवान पांडे',
      phone: '9028730624',          // ← फोन नंबर बदलण्यासाठी येथे बदला
      role:  'प्रमुख संपर्क व्यक्ती',
      // फोटो जोडायला: images/contacts/ मध्ये photo save करा आणि खाली नाव द्या
      // To add photo: save image in images/contacts/ folder and set path below
      photo: 'images/contacts/bhagwan-pande.jpg'  // ← फोटो नसल्यास: photo: ''
    },
    secondary: {
      name:  'पंडित लक्खस',
      phone: '9422291323',          // ← फोन नंबर बदलण्यासाठी येथे बदला
      role:  'संपर्क व्यक्ती',
      photo: 'images/contacts/pandit-lakhas.jpg'  // ← फोटो नसल्यास: photo: ''
    }
  },

  /* ─────────────────────────────────────────────────────────
     PROJECTS
     ───────────────────────────────────────────────────────────
     प्रत्येक project मध्ये:
       availablePlots  → उपलब्ध प्लॉट संख्या (number बदला)
       soldPlots       → विकलेले प्लॉट (number बदला)
       photos          → फोटो list (खाली सूचना वाचा)
       active: false   → project लपवायला

     PHOTOS – HOW TO ADD:
       1. Photo file copy करा → images/projects/<id>/ folder मध्ये
       2. खाली photos array मध्ये file चे नाव add करा
       उदा: 'images/projects/shiv-nagar/photo1.jpg'
     ───────────────────────────────────────────────────────── */
  projects: [
    {
      id:             'shiv-nagar',       // folder name – बदलू नका
      name:           'शिव नगर',
      location:       'भोकरदन, जालना',
      availablePlots: 15,                 // ← हे बदला
      soldPlots:      5,                  // ← हे बदला
      plotSizes:      '१२०० ते ३००० चौ.फूट',
      price:          'संपर्क करा',
      road:           'मुख्य रस्त्याजवळ',
      water:          'उपलब्ध',
      electricity:    'उपलब्ध',
      documents:      'कायदेशीर उपलब्ध',
      photos: [
        // फोटो जोडण्यासाठी खालील ओळ uncomment करा आणि file नाव बदला:
        // 'images/projects/shiv-nagar/photo1.jpg',
        // 'images/projects/shiv-nagar/photo2.jpg',
        // 'images/projects/shiv-nagar/photo3.jpg',
      ],
      active: true
    },

    {
      id:             'jijau-nagar',      // folder name – बदलू नका
      name:           'जिजाऊ नगर',
      location:       'भोकरदन, जालना',
      availablePlots: 20,                 // ← हे बदला
      soldPlots:      3,                  // ← हे बदला
      plotSizes:      '१५०० ते ४००० चौ.फूट',
      price:          'संपर्क करा',
      road:           'रुंद रस्त्याजवळ',
      water:          'उपलब्ध',
      electricity:    'उपलब्ध',
      documents:      'कायदेशीर उपलब्ध',
      photos: [
        // 'images/projects/jijau-nagar/photo1.jpg',
        // 'images/projects/jijau-nagar/photo2.jpg',
      ],
      active: true
    }

    /* ── नवीन project जोडायला हे copy-paste करा: ─────────────
    ,{
      id:             'navi-yojana',      // unique id, no spaces
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
    ─────────────────────────────────────────────────────────── */
  ]
};
