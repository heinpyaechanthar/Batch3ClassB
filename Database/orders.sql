--create orders table
create table orders(
id integer primary key,
product_id integer not null,
quantity_ordered integer not null,
order_date timestamp default current_timestamp
);

--insert 3 order
insert into orders(product_id, quantity_ordered)
values(1,2),(2,1),(3,5);

--select quantity_ordered > 3
select * from orders
where quantity_ordered > 3;

--query error 2, because product_id integer not null 
insert into orders(quantity_ordered)
values(3);