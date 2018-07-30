delete from MySchools
Where school_id = $1;

select * from
MySchools 
full outer join Schools on
Schools.id=MySchools.school_id
where MySchools.user_id = $2;