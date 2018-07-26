require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
const controller = require('./controller');
const axios = require('axios');
const app = express();

app.use( express.static( `${__dirname}/../build` ) );

let {
    SERVER_PORT, 
    REACT_APP_CLIENT_ID, 
    CLIENT_SECRET, 
    REACT_APP_DOMAIN, 
    CONNECTION_STRING, 
    SESSION_SECRET
} = process.env;

app.use(session ({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
});

app.use(bodyParser.json())

app.get('/auth/callback', async (req, res) => {
    //code from auth0 on req
    let payload = {
        client_id: REACT_APP_CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code: req.query.code,
        grant_type: 'authorization_code',
        redirect_uri: 'http://localhost:3000/auth/callback'
    };

    //port request to exchange the code for a token.
    let responseWithToken = await axios.post(`https://${process.env.REACT_APP_DOMAIN}/oauth/token`, payload);
    
    let userData = await axios.get(`https://${process.env.REACT_APP_DOMAIN}/userinfo?access_token=${responseWithToken.data.access_token}`);
    

    const db = req.app.get('db');
    let {sub, name, picture, rank} = userData.data;
    let userExists = await db.find_user([sub]);
    if(userExists[0]) {
        req.session.user = userExists[0];
        res.redirect(`${process.env.FRONTEND_DOMAIN}/#/Home`)

    } else {
        db.create_User([sub, name, picture, rank]).then( createUser => {
            req.session.user = createUser[0];
            res.redirect(`${process.env.FRONTEND_DOMAIN}/#/Home`)

        })
    }
});

app.get('/api/user/user-data', (req, res) => {
    if (req.session.user) {
        res.status(200).send(req.session.user)
    } else {
        res.status(401).send('Nice try sucka')
    }
})

app.get('/api/logout', (req, res) => {
    req.session.destroy()
    res.redirect(`${process.env.FRONTEND_DOMAIN}/#/`)
})

//ENDPOINTS

app.get('/api/Schools/karate', controller.searchKarate);

app.get('/api/Schools/tai%20chi', controller.searchTaiChi);

app.get('/api/Schools/kung%20fu', controller.searchKungFu);

app.get('/api/Schools/wing%20chun', controller.searchWingChun);

app.get('/api/Schools/krav%20maga', controller.searchKravMaga);

app.get('/api/Schools/kickboxing', controller.searchKickboxing);

app.get('/api/Schools/mma', controller.searchMMA);

app.get('/api/Schools/tae%20kwon%20do', controller.searchTaeKwonDo);

app.get('/api/Schools/muay%20tai', controller.searchMuayTai);

app.get('/api/Schools/boxing', controller.searchBoxing);

app.get('/api/Schools/kenjutsu', controller.searchKenjutsu);

app.get('/api/Schools/kendo', controller.searchKendo);

app.get('/api/Schools/find_all', controller.searchAll);


app.post('/api/schools', controller.save);

//School Info Edpoint

app.get('/api/School/:id', controller.schoolInfo);

//School delete Endpoint

app.delete('/api/School/:id', controller.deleteSchool)

//School edit Endpoint

app.put('/api/School/:id', controller.editSchool)


app.listen(SERVER_PORT, () => { console.log(`It's over ${SERVER_PORT}!`);
});