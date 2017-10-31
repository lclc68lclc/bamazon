create database bamazon;

use bamazon;

create table products(
item_id integer unique not null,
product_name varchar(30) not null,
department_name varchar(30) not null,
price float(7,4),
stock_quantity integer,
primary key(item_id)
);

insert into products (item_id, product_name, department_name, price, stock_quantity) values
(1001, "Wood Giraffe", "Toys", 7.99, 10),
(1002, "Fidget Spinner", "Toys", 3.99, 5),
(1003, "Milk and Honey", "Books", 1.99, 15),
(1004, "Programming Game AI", "Books", 1.99, 1),
(1005, "Pillow", "Home", 2.99, 10),
(1006, "Candle", "Home", 7.99, 8),
(1007, "Coffee Mug", "Home", 3.99, 2),
(1008, "Pen", "Office", 2.99, 50),
(1009, "Desk Lamp", "Office", 24.99, 20),
(1010, "Envelopes", "Office", 0.99, 100);

select * from products;

select count(10) item_id from products;