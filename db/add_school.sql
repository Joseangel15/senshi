insert into Schools
(
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
)
VALUES
(
$1, 
$2,
$3,
$4,
$5,
$6,
$7,
$8,
$9,
$10,
$11,
$12,
$13,
$14
);

select *
from schools;