--create products table
create table products(
id integer primary key,
name varchar (100) not null,
price integer,
stock_quantity integer default 0
);

--insert single data
insert into products(name, price, stock_quantity)
values('Wireless Mouse', 35000, 30);

--insert multiple data
insert into products(name, price, stock_quantity)
values('Mechanical Keyboard', 120000, 20),
('HDML Cable', 8000, 100);

--select all data
select * from products;

--select name, price data
select name, price from products;

--update id=1 data
update products
set price=38000
where id=1;

--update stock_quantity
update products
set stock_quantity=35
where id= 2;

--delete product 3
delete from products
where id=3;

--query error 1, because negative value is not defined
insert into products(price)
values(-5000);



