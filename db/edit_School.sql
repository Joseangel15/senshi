Update Schools
set 
    school_name = $1,
    school_mastyle = $2,
    school_address = $3,
    school_city = $4,
    school_state = $5,
    school_zip = $6,
    school_phone = $7,
    school_email = $8,
    school_info = $9,
    school_instructor_picture = $10,
    school_picture = $11,
    school_instructor_name = $12,
    school_instructor_rank = $13,
    school_instructor_bio = $14

where id = $15;