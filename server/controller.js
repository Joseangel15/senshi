

module.exports = {
    
    searchKarate: ( req, res, next ) => {
        const db = req.app.get('db');
        db.find_Karate().then(dbResult => {
            res.status(200).send(dbResult);
        });
    },

    searchTaiChi: ( req, res, next ) => {
        const db = req.app.get('db');
        db.find_TaiChi().then(dbResult => {
            res.status(200).send(dbResult);
        });
    },

    searchKungFu: ( req, res, next ) => {
        const db = req.app.get('db');
        db.find_KungFu().then(dbResult => {
            res.status(200).send(dbResult);
        });
    },

    searchWingChun: ( req, res, next ) => {
        const db = req.app.get('db');
        db.find_WingChun().then(dbResult => {
            res.status(200).send(dbResult);
        });
    },

    searchKravMaga: ( req, res, next ) => {
        const db = req.app.get('db');
        db.find_KravMaga().then(dbResult => {
            res.status(200).send(dbResult);
        });
    },

    searchKickboxing: ( req, res, next ) => {
        const db = req.app.get('db');
        db.find_Kickboxing().then(dbResult => {
            res.status(200).send(dbResult);
        });
    },

    searchMMA: ( req, res, next ) => {
        const db = req.app.get('db');
        db.find_Mma().then(dbResult => {
            res.status(200).send(dbResult);
        });
    },

    searchTaeKwonDo: ( req, res, next ) => {
        const db = req.app.get('db');
        db.find_TaeKwonDo().then(dbResult => {
            res.status(200).send(dbResult);
        });
    },

    searchMuayTai: ( req, res, next ) => {
        const db = req.app.get('db');
        db.find_MuayTai().then(dbResult => {
            res.status(200).send(dbResult);
        });
    },

    searchBoxing: ( req, res, next ) => {
        const db = req.app.get('db');
        db.find_Boxing().then(dbResult => {
            res.status(200).send(dbResult);
        });
    },

    searchKenjutsu: ( req, res, next ) => {
        const db = req.app.get('db');
        db.find_Kenjutsu().then(dbResult => {
            res.status(200).send(dbResult);
        });
    },

    searchKendo: ( req, res, next ) => {
        const db = req.app.get('db');
        db.find_Kendo().then(dbResult => {
            res.status(200).send(dbResult);
        });
    },

    searchAll: ( req, res, next ) => {
        const db = req.app.get('db');
        db.find_All().then(dbResult => {
            res.status(200).send(dbResult);
        });
    },

    save: ( req, res, next ) => {
        const { school_name, school_mastyle, school_address, school_city, school_state, school_zip, school_phone, school_email, school_info, school_instructor_name, school_instructor_rank, school_instructor_bio, school_instructor_picture, school_picture} = req.body;

        const db = req.app.get('db'); 

        db.add_school([ 
            school_name,
            school_mastyle,
            school_picture,
            school_address,
            school_city,
            school_state,
            school_zip,
            school_phone,
            school_email,
            school_info,
            school_instructor_name,
            school_instructor_rank,
            school_instructor_bio,
            school_instructor_picture
        ])
        
        .then(dbResult => {
            res.status(200).send(dbResult);
        })
        .catch(err => {
            console.log(err)
        });
    },

    schoolInfo: ( req, res, next ) => {
        const {id} = req.params
        const db = req.app.get('db');
        db.find_School([id]).then(id => {
            res.status(200).send(id);
        });
    },

    deleteSchool: (req, res, next ) => {
        const {id} = req.params
        const db = req.app.get('db');
        db.delete_School([id]).then(id => {
            res.status(200).send(id);
        })
    },

    editSchool: (req, res, next ) => {
        const db = req.app.get('db');
        const {id} =req.params
        const {
            school_name,
            school_mastyle,
            school_address,
            school_city,
            school_state,
            school_zip,
            school_phone,
            school_email,
            school_info,
            school_instructor_picture,
            school_picture,
            school_instructor_name,
            school_instructor_rank,
            school_instructor_bio
        } = req.body

        db.edit_School([school_name, school_mastyle, school_address, school_city, school_state, school_zip,school_phone, school_email, school_info, school_instructor_picture, school_picture, school_instructor_name, school_instructor_rank, school_instructor_bio, id])
        
        .then( user => { res.status(200).send(user);})

        .catch(err => {
            res.status(500).send({
                errorMessage: 'userNotFound'
            })
            console.log(err)
        })
    }

    

    



}