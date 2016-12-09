drop function if exists multiply;

DELIMITER //
CREATE FUNCTION multiply() RETURNS int
    DETERMINISTIC
BEGIN
    DECLARE result INT;
 
   
 SET result = a*b*c; 
 
 RETURN (result); 
END//


drop procedure if exists ins_user;

DELIMITER //
CREATE PROCEDURE ins_user(login VARCHAR(20), password VARCHAR(40), email VARCHAR(60))
 BEGIN 
 insert into shortener.user(login,password,email) values(login,password,email);
END//