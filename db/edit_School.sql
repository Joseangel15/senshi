Update Schools
set 
    school_name = $1,
    school_mastyle = $2,
    school_picture = $3,
    school_address = $4,
    school_city = $5,
    school_state = $6,
    school_zip = $7,
    school_phone = $8,
    school_email = $9,
    school_info = $10,
    school_instructor_name = $11,
    school_instructor_rank = $12,
    school_instructor_bio = $13,
    school_instructor_picture = $14,

where id = $1;