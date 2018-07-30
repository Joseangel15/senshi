select * from
MySchools 
full outer join Schools on
Schools.id=MySchools.school_id
where MySchools.user_id = $1;