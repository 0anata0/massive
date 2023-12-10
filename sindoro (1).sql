-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 10, 2023 at 08:41 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sindoro`
--

-- --------------------------------------------------------

--
-- Table structure for table `booking`
--

CREATE TABLE `booking` (
  `id_pesanan` int(13) NOT NULL,
  `nama` text NOT NULL,
  `tgl_lahir` date NOT NULL,
  `jk` text NOT NULL,
  `no_hp` bigint(20) NOT NULL,
  `tgl_naik` date NOT NULL,
  `tgl_turun` date NOT NULL,
  `no_hp_kel` bigint(20) NOT NULL,
  `email` varchar(100) NOT NULL,
  `identitas` text NOT NULL,
  `no_identitas` bigint(30) NOT NULL,
  `alamat` text NOT NULL,
  `ktp` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `password`, `role`) VALUES
(1, 'admin', '12345', 'admin'),
(2, 'ade', '33333', 'user'),
(3, 'ucup', '$2b$10$z3XgxQY3/MRZx8xyIfCbMeE6xkOuE.Esyt.pyF7KQ.imkPpkKYEfi', 'user'),
(4, 'ujang', '$2b$10$hfy2BxSebfGHD/T8MJ.yVepcCK/knU4p7fVdQhG733Z69kv10qFqa', 'user'),
(5, 'akuadmin', '$2b$10$nE4gjm/9ITd6e5KeiWXxteKcoIooL2KyQjK65VORybqkJDh4xUhl2', 'admin'),
(6, 'adsad', '$2b$10$.rjNio836Rj9Nsw/wXoHReNYNlW15MCuAdKwhCiuYCkkIJZiFBJ.y', 'user'),
(7, 'dharma', '$2b$10$vuG2ZiZvvBm.oadptm5Siel2SOfYwZ2cX8sl/1YykU9NUtYF56aYm', 'user'),

--
-- Indexes for dumped tables
--

--
-- Indexes for table `booking`
--
ALTER TABLE `booking`
  ADD PRIMARY KEY (`id_pesanan`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `booking`
--
ALTER TABLE `booking`
  MODIFY `id_pesanan` int(13) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
