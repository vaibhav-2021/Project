CREATE DATABASE  IF NOT EXISTS `carrental_1` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `carrental_1`;
-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: carrental_1
-- ------------------------------------------------------
-- Server version	8.0.28

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
-- Table structure for table `admins_tb`
--

DROP TABLE IF EXISTS `admins_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admins_tb` (
  `admin_id` bigint NOT NULL AUTO_INCREMENT,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`admin_id`),
  UNIQUE KEY `UK_onypgp38m9vvchuaot7fkaww5` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admins_tb`
--

LOCK TABLES `admins_tb` WRITE;
/*!40000 ALTER TABLE `admins_tb` DISABLE KEYS */;
/*!40000 ALTER TABLE `admins_tb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `billings_tb`
--

DROP TABLE IF EXISTS `billings_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `billings_tb` (
  `bill_id` bigint NOT NULL AUTO_INCREMENT,
  `actual_return_date` date DEFAULT NULL,
  `billing_date` date DEFAULT NULL,
  `billing_status` varchar(10) DEFAULT NULL,
  `late_fees` double NOT NULL,
  `total_amount` double NOT NULL,
  `booking_id` bigint NOT NULL,
  PRIMARY KEY (`bill_id`),
  KEY `FKr4gxwovqq55q1ba3rqaadr6v3` (`booking_id`),
  CONSTRAINT `FKr4gxwovqq55q1ba3rqaadr6v3` FOREIGN KEY (`booking_id`) REFERENCES `bookings_tb` (`booking_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `billings_tb`
--

LOCK TABLES `billings_tb` WRITE;
/*!40000 ALTER TABLE `billings_tb` DISABLE KEYS */;
INSERT INTO `billings_tb` VALUES (1,'2022-10-12','2022-09-10','Cancelled',0,0,6),(2,'2022-10-12','2022-09-10','Paid',0,2000,7),(3,'2022-09-10','2022-09-10','Paid',0,2000,8),(4,'2022-09-10','2022-09-10','Paid',0,28000,9),(5,'2022-09-10','2022-09-10','Paid',1000,-1000,10);
/*!40000 ALTER TABLE `billings_tb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bookings_tb`
--

DROP TABLE IF EXISTS `bookings_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bookings_tb` (
  `booking_id` bigint NOT NULL AUTO_INCREMENT,
  `booking_status` varchar(30) DEFAULT NULL,
  `drop_loc_id` bigint DEFAULT NULL,
  `pick_up_date` date DEFAULT NULL,
  `pick_up_loc_id` bigint DEFAULT NULL,
  `return_date` date DEFAULT NULL,
  `car_id` bigint NOT NULL,
  `cust_id` bigint NOT NULL,
  PRIMARY KEY (`booking_id`),
  KEY `FKchhob81yyq5pg16xy3xw3234c` (`car_id`),
  KEY `FK1ys9sryxudmba14r073al9yn5` (`cust_id`),
  CONSTRAINT `FK1ys9sryxudmba14r073al9yn5` FOREIGN KEY (`cust_id`) REFERENCES `customers_tb` (`cust_id`),
  CONSTRAINT `FKchhob81yyq5pg16xy3xw3234c` FOREIGN KEY (`car_id`) REFERENCES `cars_tb` (`car_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bookings_tb`
--

LOCK TABLES `bookings_tb` WRITE;
/*!40000 ALTER TABLE `bookings_tb` DISABLE KEYS */;
INSERT INTO `bookings_tb` VALUES (1,'Booked',1,'2022-01-01',1,'2022-01-01',1,1),(2,'Cancelled',1,'2022-01-01',1,'2022-01-01',2,5),(3,'Cancelled',1,'2022-01-01',1,'2022-01-01',2,1),(4,'Booked',1,'2022-09-10',1,'2022-09-12',1,1),(5,'Booked',1,'2022-09-10',1,'2022-09-12',1,1),(6,'Cancelled And Refunded',1,'2022-09-10',1,'2022-10-12',1,1),(7,'Booked',1,'2022-09-10',1,'2022-10-12',1,1),(8,'Submited',1,'2022-09-10',1,'2022-09-10',2,1),(9,'Submited',1,'2022-09-10',1,'2022-09-10',2,1),(10,'Submited',1,'2022-09-10',1,'2022-09-10',2,1);
/*!40000 ALTER TABLE `bookings_tb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `car_category_tb`
--

DROP TABLE IF EXISTS `car_category_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `car_category_tb` (
  `car_category_id` bigint NOT NULL AUTO_INCREMENT,
  `car_category_name` varchar(20) DEFAULT NULL,
  `cost_per_day` double NOT NULL,
  `seat` tinyint DEFAULT NULL,
  PRIMARY KEY (`car_category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `car_category_tb`
--

LOCK TABLES `car_category_tb` WRITE;
/*!40000 ALTER TABLE `car_category_tb` DISABLE KEYS */;
INSERT INTO `car_category_tb` VALUES (1,'HatchBack',1000,5),(2,'HatchBack',1000,5);
/*!40000 ALTER TABLE `car_category_tb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cars_tb`
--

DROP TABLE IF EXISTS `cars_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cars_tb` (
  `car_id` bigint NOT NULL AUTO_INCREMENT,
  `available_flag` bit(1) NOT NULL,
  `car_image` varchar(255) DEFAULT NULL,
  `company` varchar(20) DEFAULT NULL,
  `milage` tinyint DEFAULT NULL,
  `model_name` varchar(20) DEFAULT NULL,
  `model_type` varchar(20) DEFAULT NULL,
  `model_year` int DEFAULT NULL,
  `registration_no` varchar(20) DEFAULT NULL,
  `car_category_id` bigint NOT NULL,
  `location_id` bigint NOT NULL,
  PRIMARY KEY (`car_id`),
  UNIQUE KEY `UK_92e62nd8dnut51igxg84q4m4d` (`registration_no`),
  KEY `FKeftcaf0oh9m5dif2v93lj7o10` (`car_category_id`),
  KEY `FK56sm8n7mjdkib0jjnwr4ohbp1` (`location_id`),
  CONSTRAINT `FK56sm8n7mjdkib0jjnwr4ohbp1` FOREIGN KEY (`location_id`) REFERENCES `locations_tb` (`location_id`),
  CONSTRAINT `FKeftcaf0oh9m5dif2v93lj7o10` FOREIGN KEY (`car_category_id`) REFERENCES `car_category_tb` (`car_category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cars_tb`
--

LOCK TABLES `cars_tb` WRITE;
/*!40000 ALTER TABLE `cars_tb` DISABLE KEYS */;
INSERT INTO `cars_tb` VALUES (1,_binary '',NULL,'Suzuki',12,'Swift','Diesel',2016,'MH 50 8508',1,1),(2,_binary '',NULL,'Suzuki',12,'Swift','Diesel',2016,'MH 50 8505',1,1),(4,_binary '',NULL,'Suzuki',12,'Swift','Diesel',2016,'',1,1),(7,_binary '',NULL,'Suzuki',12,'Swift','Diesel',2016,'MH 50 8506',1,1);
/*!40000 ALTER TABLE `cars_tb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customers_tb`
--

DROP TABLE IF EXISTS `customers_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customers_tb` (
  `cust_id` bigint NOT NULL AUTO_INCREMENT,
  `city` varchar(20) DEFAULT NULL,
  `district` varchar(30) DEFAULT NULL,
  `driving_lic` varchar(20) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `first_name` varchar(20) DEFAULT NULL,
  `last_name` varchar(20) DEFAULT NULL,
  `middle_name` varchar(20) DEFAULT NULL,
  `mobile_no` bigint DEFAULT NULL,
  `password` varchar(350) DEFAULT NULL,
  `pincode` int DEFAULT NULL,
  `state` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`cust_id`),
  UNIQUE KEY `UK_38miehsmoyywjt0h85q2fnyim` (`driving_lic`),
  UNIQUE KEY `UK_inwr775hoqah2rfs31j80wtma` (`email`),
  UNIQUE KEY `UK_mh65do69wqxwl3n1yj0beccls` (`mobile_no`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers_tb`
--

LOCK TABLES `customers_tb` WRITE;
/*!40000 ALTER TABLE `customers_tb` DISABLE KEYS */;
INSERT INTO `customers_tb` VALUES (1,'Kolhapur','Satara','CDCD56789123224','rjay1@test.com','Jay1','gupta','Pramod',9123468423,'jay1@1234',415112,''),(5,'Kolhapur','Satara','CDCD56789123223','amol@test.com','Amol','Totre','Pramod',8082495381,'amol@123',410209,'Maharashtra'),(7,'Kolhapur','Satara','CDCD56789123226','rahul@test.com','rahul','Totre','Pramod',8082495382,'$2a$10$68wqUjEW3K2WMMPZ47sqDOAKh9PUU1ZdZWfWYw3O7CWYOd3x4uL.G',415112,'Maharashtra');
/*!40000 ALTER TABLE `customers_tb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `feedbacks_tb`
--

DROP TABLE IF EXISTS `feedbacks_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `feedbacks_tb` (
  `f_id` bigint NOT NULL AUTO_INCREMENT,
  `message` varchar(200) DEFAULT NULL,
  `rating` int DEFAULT NULL,
  `reply` varchar(200) DEFAULT NULL,
  `booking_id` bigint NOT NULL,
  `cust_id` bigint NOT NULL,
  PRIMARY KEY (`f_id`),
  UNIQUE KEY `UK8fhk7vlk69v4fppgp0aiygsox` (`booking_id`,`cust_id`),
  KEY `FK2itl6nns0575k6a2stcmvob8t` (`cust_id`),
  CONSTRAINT `FK2itl6nns0575k6a2stcmvob8t` FOREIGN KEY (`cust_id`) REFERENCES `customers_tb` (`cust_id`),
  CONSTRAINT `FK8phpi0wy2u55b87ms37lsd926` FOREIGN KEY (`booking_id`) REFERENCES `bookings_tb` (`booking_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `feedbacks_tb`
--

LOCK TABLES `feedbacks_tb` WRITE;
/*!40000 ALTER TABLE `feedbacks_tb` DISABLE KEYS */;
INSERT INTO `feedbacks_tb` VALUES (1,' Good',5,'Thank  very Much',1,1);
/*!40000 ALTER TABLE `feedbacks_tb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `locations_tb`
--

DROP TABLE IF EXISTS `locations_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `locations_tb` (
  `location_id` bigint NOT NULL AUTO_INCREMENT,
  `city` varchar(20) DEFAULT NULL,
  `district` varchar(20) DEFAULT NULL,
  `location_name` varchar(20) DEFAULT NULL,
  `pincode` int DEFAULT NULL,
  `state` varchar(30) DEFAULT NULL,
  `street` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`location_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `locations_tb`
--

LOCK TABLES `locations_tb` WRITE;
/*!40000 ALTER TABLE `locations_tb` DISABLE KEYS */;
INSERT INTO `locations_tb` VALUES (1,'Karad','Satara','Wakhan Road',415110,'Maharastra','MG Road');
/*!40000 ALTER TABLE `locations_tb` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-09-11 14:08:05
