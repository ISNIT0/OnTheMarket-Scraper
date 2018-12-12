# OnTheMarket-Scraper
![Safe NPM](https://safenpm.herokuapp.com/status/onthemarket-scraper.png)

Easily Scrape OnTheMarket property data

To get all properties in an outcode and first page:
```javascript
var OnTheMarket = require('onthemarket-scraper');

OnTheMarket.byOutcode('HP13', 0);
/*
  {
    "total": 46,
    "properties": [
        {
            "address": "Bourne End, Buckinghamshire",
            "price-qualifier": "default",
            "prop-type": "houses",
            "agent": {
                "id": 3448,
                "logo-path": null,
                "logo-url": "https://s3-eu-west-1.amazonaws.com/images.agentsmutual.co.uk/agents/8f78dbce-8b3d-4331-934d-abfc43a8128b.png"
            },
            "promotional-text": "",
            "bedrooms": 7,
            "id": 1057067,
            "fees": false,
            "location": {
                "lat": 51.588001,
                "lon": -0.70621401
            },
            "price": 6750000,
            "media": {
                "virtualtours": [],
                "documents": [
                    {
                        "url": "http://89.213.252.239/servlets/VS/servlet/FlippyPreviewerServlet?COMPANY_ID=FIN&OVERRIDE=false&PROP_REF=FIN080100394"
                    },
                    {
                        "url": "http://www.chewtonrose.co.uk/FIN080100394"
                    },
                    {
                        "url": "http://89.213.252.250/servlets/SPO/servlet/servlets.EPCGrapherServlet?RT=IMG&IS=2&EEC=34&EEP=44&EIC=45&EIP=53"
                    }
                ],
                "floorplans": [
                    {
                        "url": "/properties/1057067/flp_0_0.jpg"
                    }
                ],
                "images": [
                    {
                        "large-url": "/properties/1057067/img_0_8_large.jpg",
                        "url": "/properties/1057067/img_0_8_thumbnail.jpg"
                    },
                    {
                        "large-url": "/properties/1057067/img_1_8_large.jpg",
                        "url": "/properties/1057067/img_1_8_thumbnail.jpg"
                    },
                    {
                        "large-url": "/properties/1057067/img_2_8_large.jpg",
                        "url": "/properties/1057067/img_2_8_thumbnail.jpg"
                    },
                    {
                        "large-url": "/properties/1057067/img_3_8_large.jpg",
                        "url": "/properties/1057067/img_3_8_thumbnail.jpg"
                    },
                    {
                        "large-url": "/properties/1057067/img_4_8_large.jpg",
                        "url": "/properties/1057067/img_4_8_thumbnail.jpg"
                    },
                    {
                        "large-url": "/properties/1057067/img_5_2_large.jpg",
                        "url": "/properties/1057067/img_5_2_thumbnail.jpg"
                    },
                    {
                        "large-url": "/properties/1057067/img_6_1_large.jpg",
                        "url": "/properties/1057067/img_6_1_thumbnail.jpg"
                    },
                    {
                        "large-url": "/properties/1057067/img_7_1_large.jpg",
                        "url": "/properties/1057067/img_7_1_thumbnail.jpg"
                    },
                    {
                        "large-url": "/properties/1057067/img_8_2_large.jpg",
                        "url": "/properties/1057067/img_8_2_thumbnail.jpg"
                    },
                    {
                        "large-url": "/properties/1057067/img_9_1_large.jpg",
                        "url": "/properties/1057067/img_9_1_thumbnail.jpg"
                    },
                    {
                        "large-url": "/properties/1057067/img_10_1_large.jpg",
                        "url": "/properties/1057067/img_10_1_thumbnail.jpg"
                    },
                    {
                        "large-url": "/properties/1057067/img_11_2_large.jpg",
                        "url": "/properties/1057067/img_11_2_thumbnail.jpg"
                    },
                    {
                        "large-url": "/properties/1057067/img_12_1_large.jpg",
                        "url": "/properties/1057067/img_12_1_thumbnail.jpg"
                    },
                    {
                        "large-url": "/properties/1057067/img_13_0_large.jpg",
                        "url": "/properties/1057067/img_13_0_thumbnail.jpg"
                    },
                    {
                        "large-url": "/properties/1057067/img_14_0_large.jpg",
                        "url": "/properties/1057067/img_14_0_thumbnail.jpg"
                    },
                    {
                        "large-url": "/properties/1057067/img_15_0_large.jpg",
                        "url": "/properties/1057067/img_15_0_thumbnail.jpg"
                    },
                    {
                        "large-url": "/properties/1057067/img_16_0_large.jpg",
                        "url": "/properties/1057067/img_16_0_thumbnail.jpg"
                    },
                    {
                        "large-url": "/properties/1057067/img_17_0_large.jpg",
                        "url": "/properties/1057067/img_17_0_thumbnail.jpg"
                    },
                    {
                        "large-url": "/properties/1057067/img_18_0_large.jpg",
                        "url": "/properties/1057067/img_18_0_thumbnail.jpg"
                    },
                    {
                        "large-url": "/properties/1057067/img_19_0_large.jpg",
                        "url": "/properties/1057067/img_19_0_thumbnail.jpg"
                    },
                    {
                        "large-url": "/properties/1057067/img_20_1_large.jpg",
                        "url": "/properties/1057067/img_20_1_thumbnail.jpg"
                    },
                    {
                        "large-url": "/properties/1057067/img_21_3_large.jpg",
                        "url": "/properties/1057067/img_21_3_thumbnail.jpg"
                    },
                    {
                        "large-url": "/properties/1057067/img_22_0_large.jpg",
                        "url": "/properties/1057067/img_22_0_thumbnail.jpg"
                    },
                    {
                        "large-url": "/properties/1057067/img_23_1_large.jpg",
                        "url": "/properties/1057067/img_23_1_thumbnail.jpg"
                    },
                    {
                        "large-url": "/properties/1057067/img_24_0_large.jpg",
                        "url": "/properties/1057067/img_24_0_thumbnail.jpg"
                    }
                ]
            },
            "instruction-type": "for-sale"
        }, .. ]}
*/

```

To get details iof property:
```javascript
var OnTheMarket = require('onthemarket-scraper');

OnTheMarket.detail('1057067');

/*
{ description: 'Walking through his exquisite...',
  address: 'Bourne End, Buckinghamshire',
  'price-qualifier': 'default',
  'prop-type': 'houses',
  'nearby-places': 
   { pharmacy: 
      [ [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object] ],
     dentist: [ [Object], [Object], [Object] ],
     surgery: 
      [ [Object],
        [Object],
        [Object],
        [Object],
        [Object] ],
     supermarket: [ [Object] ],
     school: 
      [ [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object] ],
     station: [ [Object] ] },
  agent: 
   { affiliations: [],
     address: '30 Packhorse Road\nGerrards Cross\nSL9 7DA',
     email: '0801@spicerhaart.com',
     'logo-path': '/agents/8f78dbce-8b3d-4331-934d-abfc43a8128b.png',
     telephone: '01753 903956',
     name: 'Chewton Rose - Gerrards Cross',
     postcode: 'SL9 7DA',
     type: 'all',
     id: 3448,
     'logo-url': 'https://s3-eu-west-1.amazonaws.com/images.agentsmutual.co.uk/agents/8f78dbce-8b3d-4331-934d-abfc43a8128b.png',
     location: { lat: 51.587399, lon: -0.55374002 } },
  summary: 'THE GREAT ESTATE They found the breathtaking, 10-acre setting and were drawn to the privacy and tranquillity it offered - and there they created a magnificent dream home',
  'promotional-text': '',
  bedrooms: 7,
  id: 1057067,
  fees: false,
  location: { lat: 51.588001, lon: -0.70621401 },
  price: 6750000,
  media: 
   { virtualtours: [],
     documents: [ [Object], [Object], [Object] ],
     floorplans: [ [Object] ],
     images: 
      [ [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object] ] },
  'instruction-type': 'for-sale' }

*/
```
