insert into shortener.user(login,password,email) values('user1','pass1','user1@user.com');
insert into shortener.user(login,password,email) values('user2','pass2','user2@user.com');
insert into shortener.user(login,password,email) values('user3','pass3','user3@user.com');
insert into shortener.user(login,password,email) values('user4','pass4','user4@user.com');
insert into shortener.user(login,password,email) values('user5','pass5','user5@user.com');

insert into shortener.link(short_url,source_url,description,click_count,user_id) values('habr','https://habrahabr.ru/','https://habrahabr.ru/',1,1);
insert into shortener.link(short_url,source_url,description,click_count,user_id) values('github','https://github.com/','https://github.com/',2,2);
insert into shortener.link(short_url,source_url,description,click_count,user_id) values('linkIn','https://www.linkedin.com/','https://www.linkedin.com/',3,3);
insert into shortener.link(short_url,source_url,description,click_count,user_id) values('stack','http://stackoverflow.com/','http://stackoverflow.com/',4,4);
insert into shortener.link(short_url,source_url,description,click_count,user_id) values('intex','http://www.intexsoft.by/','http://www.intexsoft.by/',5,5);