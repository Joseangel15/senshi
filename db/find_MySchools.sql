SELECT * from MySchools m
JOIN Schools s on
m.id = s.id
where m.id = $1
order by m.id;