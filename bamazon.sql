create database bamazon;
use bamazon;
create table products(
		item_id int(4) not null,
        product_name varchar(100) not null,
        department_name varchar(100) not null,
        price decimal(10,2) not null,
        stock_quantity int(20) not null,
        primary key(item_id)
);

select * from products;
/*update Products set stock_quantity = 30 where item_id = 400;*/
insert into products (item_id, product_name, department_name, price, stock_quantity)
values (100, "tshirts", "clothing", 5.99, 20),
		(200, "shoes", "footwear", 60.00, 18),
        (300, "Microsoft Surface Pro 2", "tablets and computers", 200.00, 24),
        (400, "socks", "footwear", 9.99, 32),
        (500, "pucks", "hockey", 9.99, 19),
        (600, "undershirts", "clothing", 4.99, 20),
        (700, "UNO", "board and card games", 12.00, 10),
        (800, "tealight candles", "home decor", 1.00, 100),
        (900, "jeans", "clothing", 14.00, 40),
        (1000, "Samsung Galaxy S10", "smartphones", 700.00, 80)