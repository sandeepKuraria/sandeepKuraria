-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 06, 2023 at 10:25 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ecommerce_stock_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `category_id` int(11) NOT NULL,
  `category_name` varchar(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`category_id`, `category_name`) VALUES
(1, 'Electronics'),
(2, 'Clothing'),
(3, 'Furniture'),
(4, 'Books'),
(5, 'Toys');

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `customer_id` int(10) NOT NULL,
  `first_name` varchar(11) DEFAULT NULL,
  `last_name` varchar(11) DEFAULT NULL,
  `email` varchar(60) DEFAULT NULL,
  `Phone` varchar(20) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`customer_id`, `first_name`, `last_name`, `email`, `Phone`, `address`) VALUES
(2, 'Jane', 'Smith', 'jane.smith@example.com', '987-654-3210', '456 Elm St'),
(3, 'Michael', 'Johnson', 'michael.j@example.com', '555-123-4567', '789 Oak Ave'),
(4, 'Emily', 'Wilson', 'emily.w@example.com', '444-987-6543', '101 Pine St'),
(5, 'Robert', 'Brown', 'robert.b@example.com', '777-555-8888', '321 Cedar Rd'),
(6, 'Sarah', 'Davis', 'sarah.d@example.com', '999-333-2222', '555 Elm St'),
(7, 'William', 'Jones', 'william.j@example.com', '111-777-9999', '456 Oak St'),
(8, 'Jennifer', 'Anderson', 'jennifer.a@example.com', '333-666-1111', '888 Maple Rd'),
(9, 'David', 'Martinez', 'david.m@example.com', '222-888-7777', '777 Pine St'),
(10, 'Susan', 'Garcia', 'susan.g@example.com', '444-111-3333', '222 Birch Ave');

-- --------------------------------------------------------

--
-- Table structure for table `items`
--

CREATE TABLE `items` (
  `item_id` int(11) NOT NULL,
  `category_id` int(11) DEFAULT NULL,
  `item_name` varchar(20) DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `stock_quantity` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `items`
--

INSERT INTO `items` (`item_id`, `category_id`, `item_name`, `description`, `price`, `stock_quantity`) VALUES
(1, 1, 'Smartphone', 'High-end smartphone', 599, 85),
(2, 1, 'Laptop', 'Powerful laptop', 999, 30),
(3, 1, 'Tablet', 'High-performance tablet', 349, 20),
(4, 1, 'Headphones', 'Wireless headphones', 99, 75),
(5, 1, 'Smartwatch', 'Fitness smartwatch', 149, 40),
(6, 1, 'Digital Camera', 'Professional DSLR camera', 799, 15),
(7, 1, 'Gaming Console', 'Next-gen gaming console', 499, 25),
(8, 1, 'Wireless Router', 'High-speed router', 69, 30),
(9, 2, 'T-Shirt', 'Cotton T-Shirt', 15, 100),
(10, 2, 'Jeans', 'Blue denim jeans', 29, 120),
(11, 2, 'Dress', 'Elegant black dress', 79, 60),
(12, 2, 'Sneakers', 'Running sneakers', 49, 90),
(13, 2, 'Hoodie', 'Comfortable hoodie', 39, 80),
(14, 2, 'Skirt', 'Floral print skirt', 34, 55),
(15, 3, 'Coffee Table', 'Wooden coffee table', 199, 15),
(16, 3, 'Sofa', 'Comfortable sofa', 599, 10),
(17, 4, 'Science Fiction Book', 'Bestseller sci-fi book', 19, 50),
(18, 4, 'Cookbook', 'Delicious recipes', 29, 40),
(19, 5, 'Action Figure', 'Collectible action figure', 10, 80),
(20, 5, 'Puzzle', '1000-piece jigsaw puzzle', 15, 60);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL,
  `customer_id` int(10) DEFAULT NULL,
  `order_date` date DEFAULT NULL,
  `total_amount` int(11) DEFAULT NULL,
  `item_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`order_id`, `customer_id`, `order_date`, `total_amount`, `item_id`) VALUES
(2, 2, '2023-09-07', 1014, 1),
(3, 3, '2023-09-08', 1298, 2),
(4, 4, '2023-09-09', 499, 3),
(5, 5, '2023-09-10', 899, 4),
(6, 6, '2023-09-11', 349, 5),
(7, 7, '2023-09-12', 1245, 6),
(8, 8, '2023-09-13', 899, 7),
(9, 9, '2023-09-14', 139, 8),
(10, 10, '2023-09-15', 769, 9),
(12, 2, '2023-09-17', 799, 11),
(13, 3, '2023-09-18', 149, 12),
(14, 4, '2023-09-19', 259, 13),
(15, 5, '2023-09-20', 499, 14),
(16, 6, '2023-09-21', 69, 15),
(17, 7, '2023-09-22', 199, 16),
(18, 8, '2023-09-23', 499, 17),
(19, 9, '2023-09-24', 159, 18),
(20, 10, '2023-09-25', 449, 19),
(22, 2, '2023-09-27', 799, 20),
(23, 3, '2023-09-28', 129, 10),
(24, 4, '2023-09-29', 399, 3),
(25, 5, '2023-09-30', 899, 4),
(26, 6, '2023-10-01', 179, 5),
(27, 7, '2023-10-02', 249, 6),
(28, 8, '2023-10-03', 799, 7),
(29, 9, '2023-10-04', 139, 8),
(30, 10, '2023-10-05', 349, 9);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`customer_id`);

--
-- Indexes for table `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`item_id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`),
  ADD KEY `customer_id` (`customer_id`),
  ADD KEY `item_id` (`item_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `customer_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `items`
--
ALTER TABLE `items`
  MODIFY `item_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `items`
--
ALTER TABLE `items`
  ADD CONSTRAINT `items_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`category_id`);

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `item_id` FOREIGN KEY (`item_id`) REFERENCES `items` (`item_id`),
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`customer_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
