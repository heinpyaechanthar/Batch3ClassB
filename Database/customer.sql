--create customer table
create table customers(
id serial primary key,
name VARCHAR (20) not null,
email varchar (50) not null unique,
created_at timestamp default now()
)

--insert a single customer
insert into customers (name, email)
values ('John Doe', 'johndoe@gmai.com')

--insert multiple customer
insert into customers(name, email)
values ('Alice Smith', 'alice@gmail.com'),
       ('Bob Johnson', 'bob@gmail.com')

--select column
select * from customers;

--select exactly data
select name, email from customers;

--update data row 2
update customers
set email= 'koko@gamil.com'
where id=2;

--delete row 2
delete from customers where id=2;