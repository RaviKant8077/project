-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: user1
-- ------------------------------------------------------
-- Server version	8.0.39

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `addresses`
--

DROP TABLE IF EXISTS `addresses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `addresses` (
  `address_id` bigint NOT NULL AUTO_INCREMENT,
  `building_name` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  `pincode` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `street` varchar(255) NOT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`address_id`),
  KEY `FK1fa36y2oqhao3wgg2rw1pi459` (`user_id`),
  CONSTRAINT `FK1fa36y2oqhao3wgg2rw1pi459` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `addresses`
--

LOCK TABLES `addresses` WRITE;
/*!40000 ALTER TABLE `addresses` DISABLE KEYS */;
INSERT INTO `addresses` VALUES (1,'ShreeDixitBhawan','Mathura','India','281502','UttarPradesh','BihariJiMandir',1),(2,'ShreeMudgilBhawan','Ludhian','India','141002','Punjab','VeerPariwarGali',1);
/*!40000 ALTER TABLE `addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `app_user`
--

DROP TABLE IF EXISTS `app_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `app_user` (
  `id` int NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `app_user`
--

LOCK TABLES `app_user` WRITE;
/*!40000 ALTER TABLE `app_user` DISABLE KEYS */;
INSERT INTO `app_user` VALUES (1,'$2a$10$HCleUNPI17cPQTELEs4ojuy.6p.DEycf16foU0258PeTJku954DU6','gulaboo'),(2,'test1','test'),(3,'$2a$10$uehuGMmiIhI7FB.LK.FYverk6Ldmqol.S7Rbq934vLImW.F79Mq5K','tester'),(4,'$2a$10$Y/qSPq7CixWaDsJXLPz9A.bNMD0yNeDHjfLmgXgmdZywW2z6td5Ga','testing');
/*!40000 ALTER TABLE `app_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart_items`
--

DROP TABLE IF EXISTS `cart_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart_items` (
  `cart_item_id` int NOT NULL AUTO_INCREMENT,
  `discount` double NOT NULL,
  `product_price` double NOT NULL,
  `quantity` int DEFAULT NULL,
  `cart_id` int DEFAULT NULL,
  `product_id` bigint DEFAULT NULL,
  PRIMARY KEY (`cart_item_id`),
  KEY `FKpcttvuq4mxppo8sxggjtn5i2c` (`cart_id`),
  KEY `FK1re40cjegsfvw58xrkdp6bac6` (`product_id`),
  CONSTRAINT `FK1re40cjegsfvw58xrkdp6bac6` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`),
  CONSTRAINT `FKpcttvuq4mxppo8sxggjtn5i2c` FOREIGN KEY (`cart_id`) REFERENCES `carts` (`cart_id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart_items`
--

LOCK TABLES `cart_items` WRITE;
/*!40000 ALTER TABLE `cart_items` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carts`
--

DROP TABLE IF EXISTS `carts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carts` (
  `cart_id` int NOT NULL AUTO_INCREMENT,
  `total_price` double DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`cart_id`),
  UNIQUE KEY `UK64t7ox312pqal3p7fg9o503c2` (`user_id`),
  CONSTRAINT `FKb5o626f86h46m4s7ms6ginnop` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carts`
--

LOCK TABLES `carts` WRITE;
/*!40000 ALTER TABLE `carts` DISABLE KEYS */;
INSERT INTO `carts` VALUES (1,35360000,1),(2,0,3);
/*!40000 ALTER TABLE `carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carts_cart_items`
--

DROP TABLE IF EXISTS `carts_cart_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carts_cart_items` (
  `cart_cart_id` int NOT NULL,
  `cart_items_cart_item_id` int NOT NULL,
  UNIQUE KEY `UKlqiwtn8064a6umr2tdjj0skhs` (`cart_items_cart_item_id`),
  KEY `FKagdhptctnqmhrw9ivnnqq9dfq` (`cart_cart_id`),
  CONSTRAINT `FK4eau008wx5vox2k1wr772m5d3` FOREIGN KEY (`cart_items_cart_item_id`) REFERENCES `cart_items` (`cart_item_id`),
  CONSTRAINT `FKagdhptctnqmhrw9ivnnqq9dfq` FOREIGN KEY (`cart_cart_id`) REFERENCES `carts` (`cart_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carts_cart_items`
--

LOCK TABLES `carts_cart_items` WRITE;
/*!40000 ALTER TABLE `carts_cart_items` DISABLE KEYS */;
/*!40000 ALTER TABLE `carts_cart_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `category_id` bigint NOT NULL AUTO_INCREMENT,
  `category_name` varchar(255) NOT NULL,
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Lofer'),(2,'SmartPhones'),(3,'SmartTV\'s'),(4,'CarCollection');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `category_id` bigint NOT NULL AUTO_INCREMENT,
  `category_name` varchar(255) NOT NULL,
  `version` int DEFAULT NULL,
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Mens T-Shirts',NULL),(2,'Smartphones',NULL),(3,'Apparel',NULL),(4,'Home Appliances',NULL),(5,'Toys',NULL),(6,'Furniture',NULL),(7,'Books',NULL),(8,'Sports Equipment',NULL),(9,'Beauty Products',NULL),(10,'Automotive',NULL),(11,'Outdoor Gear',NULL),(12,'Electronics',NULL),(13,'Kitchen Appliances',NULL),(14,'Baby Products',NULL),(15,'Health & Fitness',NULL),(16,'Garden & Outdoor',NULL),(17,'Pet Supplies',NULL),(18,'Office Supplies',NULL),(19,'Jewelry & Watches',NULL),(20,'Travel & Luggage',NULL),(21,'Musical Instruments',NULL),(22,'Crafts & Hobbies',NULL),(23,'Collectibles & Memorabilia',NULL),(24,'Art & Decor',NULL),(25,'Food & Beverages',NULL),(26,'Stationery & Gift Wrapping',NULL),(27,'Electrical & Lighting',NULL),(28,'DIY & Tools',NULL),(29,'Party Supplies',NULL),(30,'Educational Toys',NULL);
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_items`
--

DROP TABLE IF EXISTS `order_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_items` (
  `order_item_id` bigint NOT NULL AUTO_INCREMENT,
  `discount` double NOT NULL,
  `ordered_product_price` double NOT NULL,
  `quantity` int DEFAULT NULL,
  `order_id` bigint DEFAULT NULL,
  `product_id` bigint DEFAULT NULL,
  PRIMARY KEY (`order_item_id`),
  KEY `FKbioxgbv59vetrxe0ejfubep1w` (`order_id`),
  KEY `FKocimc7dtr037rh4ls4l95nlfi` (`product_id`),
  CONSTRAINT `FKbioxgbv59vetrxe0ejfubep1w` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`),
  CONSTRAINT `FKocimc7dtr037rh4ls4l95nlfi` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_items`
--

LOCK TABLES `order_items` WRITE;
/*!40000 ALTER TABLE `order_items` DISABLE KEYS */;
INSERT INTO `order_items` VALUES (1,8,920000,2,1,54),(2,8,1656000,2,1,52),(3,8,920000,2,1,53),(4,8,920000,1,3,54),(5,8,920000,2,3,53),(6,8,1656000,3,3,52),(7,8,1012000,2,3,55),(8,30,22400,1,5,2),(9,30,22400,1,5,3),(10,30,22400,1,5,5),(11,20,1040000,3,5,102);
/*!40000 ALTER TABLE `order_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `order_id` bigint NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `order_date` date DEFAULT NULL,
  `order_status` varchar(255) DEFAULT NULL,
  `total_amount` double DEFAULT NULL,
  `address_id` bigint DEFAULT NULL,
  `payment_id` bigint DEFAULT NULL,
  PRIMARY KEY (`order_id`),
  UNIQUE KEY `UKhaujdjk1ohmeixjhnhslchrp1` (`payment_id`),
  KEY `FKhlglkvf5i60dv6dn397ethgpt` (`address_id`),
  CONSTRAINT `FK8aol9f99s97mtyhij0tvfj41f` FOREIGN KEY (`payment_id`) REFERENCES `payments` (`payment_id`),
  CONSTRAINT `FKhlglkvf5i60dv6dn397ethgpt` FOREIGN KEY (`address_id`) REFERENCES `addresses` (`address_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,'user1@example.com','2025-02-24','Order Accepted !',42352000,1,1),(3,'admin@example.com','2025-02-24','Order Accepted !',9752000,1,3),(5,'admin@example.com','2025-02-24','Order Accepted !',3187200,2,5);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payments`
--

DROP TABLE IF EXISTS `payments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payments` (
  `payment_id` bigint NOT NULL AUTO_INCREMENT,
  `payment_method` varchar(255) NOT NULL,
  `pg_name` varchar(255) DEFAULT NULL,
  `pg_payment_id` varchar(255) DEFAULT NULL,
  `pg_response_message` varchar(255) DEFAULT NULL,
  `pg_status` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`payment_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payments`
--

LOCK TABLES `payments` WRITE;
/*!40000 ALTER TABLE `payments` DISABLE KEYS */;
INSERT INTO `payments` VALUES (1,'CARD','Stripe','pi_eyJzdWIiOiJ1c2VyM','Payment Successful','succeeded'),(3,'PAYPAL','Stripe','pi_eyJzdWIiOiJ1c2VyM','Payment Successful','succeeded'),(5,'PAYPAL','Stripe','pi_eyJzdWIiOiJ1c2VyM','Payment Successful','succeeded');
/*!40000 ALTER TABLE `payments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `post`
--

DROP TABLE IF EXISTS `post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `post` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKe1uowv0k023inxelpjxikachg` (`user_id`),
  CONSTRAINT `FKe1uowv0k023inxelpjxikachg` FOREIGN KEY (`user_id`) REFERENCES `social_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post`
--

LOCK TABLES `post` WRITE;
/*!40000 ALTER TABLE `post` DISABLE KEYS */;
INSERT INTO `post` VALUES (2,3),(3,4),(4,5),(5,6),(6,7),(7,8),(8,9),(9,10),(12,13),(15,16),(16,17),(17,18),(18,19),(19,20),(20,21),(21,22),(22,23),(23,24),(24,25),(25,26),(26,27),(27,28),(28,29),(29,30),(30,31),(31,32);
/*!40000 ALTER TABLE `post` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `primary_categories`
--

DROP TABLE IF EXISTS `primary_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `primary_categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `category_name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `primary_categories`
--

LOCK TABLES `primary_categories` WRITE;
/*!40000 ALTER TABLE `primary_categories` DISABLE KEYS */;
INSERT INTO `primary_categories` VALUES (1,'Employment & Labor Department'),(2,'Women & Child Development Department'),(3,'Food & Civil Supplies Department'),(4,'Urban Development & Housing Department'),(5,'Revenue & Land Records Department'),(6,'Panchayati Raj & Rural Development Department'),(7,'Social Welfare Department'),(8,'Small & Medium Enterprises (SME) Department'),(9,'Municipal Corporation & Local Bodies'),(10,'Education Department'),(11,'Health & Family Welfare Department'),(12,'Transport Department'),(13,'Public Works Department (PWD)'),(14,'Electricity Department'),(15,'Irrigation & Water Resources Department'),(16,'Forest & Environment Department'),(17,'Minority Welfare Department'),(18,'Police Department'),(19,'Legal & Judicial Department'),(20,'Agriculture & Farmers Welfare Department'),(21,'Cooperative Department'),(22,'Sports & Youth Affairs Department'),(23,'Tourism & Culture Department'),(24,'Disaster Management Department'),(25,'Fisheries & Animal Husbandry Department'),(26,'Telecommunications & IT Department'),(27,'Skill Development & Entrepreneurship Department'),(28,'Tribal Affairs Department'),(29,'Housing & Urban Poverty Alleviation Department'),(30,'Commerce & Industries Department'),(31,'Finance Department'),(32,'Defense & Home Affairs Department'),(33,'Transport & Roadways Department'),(34,'Information & Broadcasting Department');
/*!40000 ALTER TABLE `primary_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `product_id` bigint NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `discount` bigint DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `price` double NOT NULL,
  `product_name` varchar(255) DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `special_price` double NOT NULL,
  `category_id` bigint DEFAULT NULL,
  PRIMARY KEY (`product_id`),
  KEY `FK1mtsbur82frn64de7balymq9s` (`category_id`),
  CONSTRAINT `FK1mtsbur82frn64de7balymq9s` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,NULL,0,'default.png',600,'Robot',10,499,1),(52,NULL,10,'default.png',6000,'SS Cricket bat',1,5400,3),(102,NULL,8,'396e7245-d3d9-40c1-ab5a-d0fe0329da21.jpeg',7200,'Samsung J1',1,6624,6),(152,NULL,8,'default.png',7200,'Techno ',1,6624,7),(202,NULL,8,'default.png',22000,'Samsung j7Prime ',1,20240,8),(302,'My sevent Smart phone',10,'9cd73a2e-272e-4c3a-876b-bf51e84ad9c5.jpg',27000,'One Plus Nord ',1,24300,10),(352,'Going to be my new purchase',30,'default.png',20000,'A Tab  ',1,14000,10),(402,'Was My second IPhone .',20,'11a68a1e-c138-4ff8-90ea-603e2253cea5.jpg',30000,'IPhone 7  ',1,24000,10),(452,'i bought that after my iphone 7 .;',30,'default.png',32000,'IPhone XR',1,22400,10);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_seq`
--

DROP TABLE IF EXISTS `product_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_seq` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_seq`
--

LOCK TABLES `product_seq` WRITE;
/*!40000 ALTER TABLE `product_seq` DISABLE KEYS */;
INSERT INTO `product_seq` VALUES (551);
/*!40000 ALTER TABLE `product_seq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `product_id` bigint NOT NULL,
  `description` varchar(255) NOT NULL,
  `discount` double NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `price` double NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `quantity` int DEFAULT NULL,
  `special_price` double NOT NULL,
  `category_id` bigint DEFAULT NULL,
  `seller_id` bigint DEFAULT NULL,
  PRIMARY KEY (`product_id`),
  KEY `FKog2rp4qthbtt2lfyhfo32lsw9` (`category_id`),
  KEY `FKbgw3lyxhsml3kfqnfr45o0vbj` (`seller_id`),
  CONSTRAINT `FKbgw3lyxhsml3kfqnfr45o0vbj` FOREIGN KEY (`seller_id`) REFERENCES `users` (`user_id`),
  CONSTRAINT `FKog2rp4qthbtt2lfyhfo32lsw9` FOREIGN KEY (`category_id`) REFERENCES `categories` (`category_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'i bought that after my iphone 7 .;',30,'da54b8b9-5cbf-48db-bf06-0e4d5fe5d553.webp',32000,'IPhone XR',1,22400,2,NULL),(2,'My first Ever smartPhone .;',30,'a89a6d04-6d15-4a3b-aa24-1b2910b01a34.jpg',32000,'Samsung',0,22400,2,NULL),(3,'First Television.;',30,'af32abdc-a897-4f5d-ae0b-e65fdac37341.jpg',32000,'Sansui',0,22400,3,NULL),(4,'Worst Choice.;',30,'6fba57d9-738f-4950-9ec2-e4036903a394.jpg',32000,'Fati Jean',1,22400,1,NULL),(5,'Good choice regarding office.;',30,'0ee358fb-0571-48e2-a8be-99bdb75e47db.jpg',32000,'Formal Paint-Shirt',0,22400,1,NULL),(52,'OneDay i will definietly  buy that car .',8,'50145d46-7a40-4aa0-984a-a0388218ad1f.webp',1800000,'Jaguar XJL ',-1,1656000,4,NULL),(53,'very quite running  car .',8,'2d2ca7f0-fb64-40d8-b02f-0e6dfd2b70f7.webp',1000000,'Belono ',-1,920000,4,NULL),(54,'A luxury Car .',8,'b9713dfb-1f45-4c64-873c-63c3908c5000.png',1000000,'Swift Dzire ',0,920000,4,NULL),(55,'My dream Car .',8,'9a046e36-bc86-4eaa-bb11-4ac2061b59a7.webp',1100000,'Thar  ',2,1012000,4,NULL),(102,'My third priority car .',20,'c0b7d412-7daf-4ffa-a9f9-2d5357d6f146.webp',1300000,'HondaCity',2,1040000,4,NULL),(152,'My fourth smartPhone',8,'e935c23b-fa8f-4c2e-a896-db36fb3de6e4.jpg',18000,'Samsung j2 ',1,16560,2,NULL),(202,'4K resolution and having ultra hd video fram with good clear sound ',23,'c5a4604b-db06-4005-9774-4b8aa02a4f27.avif',18000,'LG SmartTV ',5,13860,3,NULL),(252,'Seamless Display Sporting a meticulously designed 6.78-inch 2800×1260 AMOLED display, the V40 5G 6.78-inch Smartphone renders vivid colours and rich details. ',19,'73772198-b8fe-486f-bf7c-10555714a93c.webp',39999,'Vivo V40 ',5,32399.19,2,NULL),(253,'All-new metal unibody design.Powered by OnePlus Intelligence and AI.For years of Fast and Smooth from day one. ',9,'b6fabff5-97e1-43db-8022-8f75bc13c1e9.webp',32999,'OnePlus Nord4',5,30029.09,2,NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products_seq`
--

DROP TABLE IF EXISTS `products_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products_seq` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products_seq`
--

LOCK TABLES `products_seq` WRITE;
/*!40000 ALTER TABLE `products_seq` DISABLE KEYS */;
INSERT INTO `products_seq` VALUES (351);
/*!40000 ALTER TABLE `products_seq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `role_id` int NOT NULL AUTO_INCREMENT,
  `role_name` enum('ROLE_ADMIN','ROLE_SELLER','ROLE_USER') DEFAULT NULL,
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'ROLE_USER'),(2,'ROLE_SELLER'),(3,'ROLE_ADMIN');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `social_group`
--

DROP TABLE IF EXISTS `social_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `social_group` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `social_group`
--

LOCK TABLES `social_group` WRITE;
/*!40000 ALTER TABLE `social_group` DISABLE KEYS */;
INSERT INTO `social_group` VALUES (1),(2),(3),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),(14),(15),(16),(17),(18),(19),(20),(21),(22);
/*!40000 ALTER TABLE `social_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `social_profile`
--

DROP TABLE IF EXISTS `social_profile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `social_profile` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `social_user` bigint DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UKhaird55k5uiex254lg7ypd203` (`social_user`),
  CONSTRAINT `FKsdce1d3lfanv548dn2sg232d` FOREIGN KEY (`social_user`) REFERENCES `social_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `social_profile`
--

LOCK TABLES `social_profile` WRITE;
/*!40000 ALTER TABLE `social_profile` DISABLE KEYS */;
INSERT INTO `social_profile` VALUES (1,NULL,NULL),(2,3,'unique'),(3,4,NULL),(4,5,NULL),(5,6,NULL),(6,7,NULL),(7,8,NULL),(8,9,NULL),(9,10,NULL),(10,NULL,'test'),(13,13,'unique'),(15,16,NULL),(16,17,NULL),(17,18,NULL),(18,19,NULL),(19,20,NULL),(20,21,NULL),(21,22,NULL),(22,23,NULL),(23,24,NULL),(24,25,NULL),(25,26,NULL),(26,27,NULL),(27,28,NULL),(28,29,NULL),(29,30,NULL),(30,31,NULL),(31,32,'unique');
/*!40000 ALTER TABLE `social_profile` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `social_user`
--

DROP TABLE IF EXISTS `social_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `social_user` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `social_profile_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UKjqc34sg55yjknyfibi6ugh26y` (`social_profile_id`),
  CONSTRAINT `FKf7j6eggv93qmigovjtbovq5n3` FOREIGN KEY (`social_profile_id`) REFERENCES `social_profile` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `social_user`
--

LOCK TABLES `social_user` WRITE;
/*!40000 ALTER TABLE `social_user` DISABLE KEYS */;
INSERT INTO `social_user` VALUES (3,NULL),(4,NULL),(5,NULL),(6,NULL),(7,NULL),(8,NULL),(9,NULL),(10,NULL),(13,NULL),(16,NULL),(17,NULL),(18,NULL),(19,NULL),(20,NULL),(21,NULL),(22,NULL),(23,NULL),(24,NULL),(25,NULL),(26,NULL),(27,NULL),(28,NULL),(29,NULL),(30,NULL),(31,NULL),(32,NULL);
/*!40000 ALTER TABLE `social_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `social_user_groups`
--

DROP TABLE IF EXISTS `social_user_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `social_user_groups` (
  `user_id` bigint NOT NULL,
  `group_id` bigint NOT NULL,
  PRIMARY KEY (`user_id`,`group_id`),
  CONSTRAINT `FK1kwshbcdr7hcuspd0quas556t` FOREIGN KEY (`user_id`) REFERENCES `social_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `social_user_groups`
--

LOCK TABLES `social_user_groups` WRITE;
/*!40000 ALTER TABLE `social_user_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `social_user_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `social_user_social_groups`
--

DROP TABLE IF EXISTS `social_user_social_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `social_user_social_groups` (
  `user_id` bigint NOT NULL,
  `group_id` bigint NOT NULL,
  PRIMARY KEY (`user_id`,`group_id`),
  KEY `FKcdq4yo5yhl4jki4f5g1moxv25` (`group_id`),
  CONSTRAINT `FKcdq4yo5yhl4jki4f5g1moxv25` FOREIGN KEY (`group_id`) REFERENCES `social_group` (`id`),
  CONSTRAINT `FKffl2cs4acga405lwsojmto8mx` FOREIGN KEY (`user_id`) REFERENCES `social_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `social_user_social_groups`
--

LOCK TABLES `social_user_social_groups` WRITE;
/*!40000 ALTER TABLE `social_user_social_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `social_user_social_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_address`
--

DROP TABLE IF EXISTS `user_address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_address` (
  `user_id` bigint NOT NULL,
  `address_id` bigint NOT NULL,
  KEY `FKpv7y2l6mvly37lngi3doarqhd` (`address_id`),
  KEY `FKrmincuqpi8m660j1c57xj7twr` (`user_id`),
  CONSTRAINT `FKpv7y2l6mvly37lngi3doarqhd` FOREIGN KEY (`address_id`) REFERENCES `addresses` (`address_id`),
  CONSTRAINT `FKrmincuqpi8m660j1c57xj7twr` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_address`
--

LOCK TABLES `user_address` WRITE;
/*!40000 ALTER TABLE `user_address` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_group`
--

DROP TABLE IF EXISTS `user_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_group` (
  `user_id` bigint NOT NULL,
  `group_id` bigint NOT NULL,
  PRIMARY KEY (`user_id`,`group_id`),
  KEY `FKaq7tkchivj8ew4n43xu04hfpx` (`group_id`),
  CONSTRAINT `FKaq7tkchivj8ew4n43xu04hfpx` FOREIGN KEY (`group_id`) REFERENCES `social_group` (`id`),
  CONSTRAINT `FKoq3gabjmngrm6dmnbd5as2yc6` FOREIGN KEY (`user_id`) REFERENCES `social_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_group`
--

LOCK TABLES `user_group` WRITE;
/*!40000 ALTER TABLE `user_group` DISABLE KEYS */;
INSERT INTO `user_group` VALUES (4,2),(5,3),(6,3),(6,4),(7,4),(8,5),(9,5),(9,6),(16,10),(17,11),(18,11),(18,12),(19,12),(20,13),(21,13),(21,14),(22,14),(23,15),(24,15),(24,16),(25,16),(26,17),(27,17),(27,18),(28,18),(29,19),(30,19),(30,20),(31,20);
/*!40000 ALTER TABLE `user_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_role`
--

DROP TABLE IF EXISTS `user_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_role` (
  `user_id` bigint NOT NULL,
  `role_id` int NOT NULL,
  PRIMARY KEY (`user_id`,`role_id`),
  KEY `FKt7e7djp752sqn6w22i6ocqy6q` (`role_id`),
  CONSTRAINT `FKj345gk1bovqvfame88rcx7yyx` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  CONSTRAINT `FKt7e7djp752sqn6w22i6ocqy6q` FOREIGN KEY (`role_id`) REFERENCES `roles` (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_role`
--

LOCK TABLES `user_role` WRITE;
/*!40000 ALTER TABLE `user_role` DISABLE KEYS */;
INSERT INTO `user_role` VALUES (1,1),(3,1),(4,1),(2,2),(3,2),(3,3);
/*!40000 ALTER TABLE `user_role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` bigint NOT NULL AUTO_INCREMENT,
  `email` varchar(50) NOT NULL,
  `password` varchar(120) NOT NULL,
  `username` varchar(20) NOT NULL,
  `cart_cart_id` int DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `UKr43af9ap4edm43mmtq01oddj6` (`username`),
  UNIQUE KEY `UK6dotkott2kjsp8vw4d0m25fb7` (`email`),
  UNIQUE KEY `UKgt2i0051aon6nnjl2g2ma8xhd` (`cart_cart_id`),
  CONSTRAINT `FKdmrua1we2pofsbd2unv8ymqnk` FOREIGN KEY (`cart_cart_id`) REFERENCES `carts` (`cart_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'user1@example.com','$2a$10$5/ZfhGInE00RgnrDHlihJOZSb0fqkrQRLmXJUwh3/9pAXiwB2wRge','user1',NULL),(2,'seller1@example.com','$2a$10$QfbADhwJuSUwzY/k.Hi7Ce22k8il.4SUaMk5560cwDkCDtHOIZbl6','seller1',NULL),(3,'admin@example.com','$2a$10$8NkWOwTtQuRbvHLrK7jGJO7JPTLBZBFg9GQ0QewMFPC5rU0aFay1O','admin',NULL),(4,'radhey@gmail.com','$2a$10$M1xk0cR7GWYuSo0SRNkk3.e3ZrnaxVGtX3OWfuGMN1nGPPgj05f1W','user2',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-04-09 12:29:11
