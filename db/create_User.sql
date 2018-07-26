INSERT INTO UserInfo
(auth_id, user_name, user_picture, user_rank)
VALUES
($1, $2, $3, $4)
RETURNING *;