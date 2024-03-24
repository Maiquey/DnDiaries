### Mountain Madness Hackathon 2024

![screenshot](src/Assets/logo_dndiaries_1.png)

The party:

    Josh Chung
    Nelson Fang
    Jan Mazurek
    Stephanie Wong
    Elvin Zukic


### About our project and How to Use:
Get a new perspective on your DnD or other tabletop RPG campaigns with DnDiaries!

Input your characters with the bookmark icon and then record your adventure's important moments with the inkpot.

You will then see all your epic moments come to life as DALLE-3 reimagines your edventure and puts it in image form.

DnDiaries keeps track of all your adventures so you can always look back and reminisce on the good times!

IMPORTANT DISCLAIMER: API calls cost $0.04 an image so I would ask that the judges to not do mass testing. It would be preferable if you didn't do more than 20 API calls (generating an image)

## Compile instructions

Ensure you have a decently recent version of node/npm installed.

Make sure python is installed, install the following python dependencies:

### `pip install Flask==2.1.5`
### `pip install requests==2.26.0`
### `pip install flask-cors==3.1.1`

Then run the python application in a terminal in the project directory:

### `python app.py`

In another terminal in the project directory, run:

### `npm install` (to install react dependencies)

### `npm start` (to start the project)

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.