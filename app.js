const express = require('express');
const app = express();
const screenshot = require('./index.js');
const compare = require('./compare.js');



/**
 * generate a screenshot
 * 
 * @access : GET : /screenshot?url=https://google.fr 
 * @param {string} url
 * @returns {object} 
 * 
 */
app.get('/screenshot', (req, res) => {

    if (req.query.url) {

        console.log('Valid request received for ' + req.query.url);

        screenshot(req.query.url)
            .then(r => console.log(`[success]`, r))
            .catch(e => console.log(`[error]`, e));

        res.send(`${ req.query.url } have been requested `);

    } else {

        res.send(`URL is empty ${ req.query.url } `);

    }

});



/**
 * Compare two screenshots
 * 
 * @access : /compare?screenA=${path}&screenB=${path} 
 * @param {string} screenA
 * @param {string} screenB 
 * @returns {object} 
 * 
 */
app.get('/compare', (req, res) => {

    if (req.query.screenA && req.query.screenB) {

        console.log(req.query.screenA+' VS '+req.query.screenB);

        compare(req.query.screenA,req.query.screenB)
            .then( r => res.send(r) )
            .catch( e => res.send(e) );

    } else {

        res.send(`Invalid request`);

    }

});


app.listen(3000);

