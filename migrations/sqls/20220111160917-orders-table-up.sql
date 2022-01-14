CREATE TABLE orders(
    id SERIAL PRIMARY KEY,
    order_status VARCHAR(100),
    user_id BIGINT NOT NULL REFERENCES orders(id)
);