-- phpMyAdmin SQL Dump
-- version 4.1.8
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 09-09-2014 a las 14:27:58
-- Versión del servidor: 5.5.37-cll
-- Versión de PHP: 5.4.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `cursosgl_globalsys`
--
CREATE DATABASE IF NOT EXISTS `globalsys` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `globalsys`;
-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `banco`
--

CREATE TABLE IF NOT EXISTS `banco` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Banco` varchar(80) NOT NULL,
  `Titular` varchar(80) NOT NULL,
  `Numero` varchar(20) NOT NULL,
  `Tipo` varchar(15) NOT NULL,
  `CIRIF` varchar(15) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=9 ;

--
-- Volcado de datos para la tabla `banco`
--

INSERT INTO `banco` (`id`, `Banco`, `Titular`, `Numero`, `Tipo`, `CIRIF`) VALUES
(8, 'BANCO MERCANTIL', 'GlobalSys', '01050110561110284314', 'Corriente', 'j-31002062-0'),
(7, 'BANCO OCCIDENTAL DE DESCUENTO C.A.', 'GlobalSys', '01210141470102509877', 'Corriente', 'J-31002062-0');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comprobantes`
--

CREATE TABLE IF NOT EXISTS `comprobantes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(25) NOT NULL,
  `Apellido` varchar(25) NOT NULL,
  `Telefono` varchar(12) NOT NULL,
  `Correo` varchar(50) NOT NULL,
  `Banco` varchar(80) NOT NULL,
  `Concepto` varchar(80) NOT NULL,
  `Nrodecuenta` varchar(20) NOT NULL,
  `Tipodepago` varchar(25) NOT NULL,
  `NroComprobante` varchar(25) NOT NULL,
  `Fecha` date NOT NULL,
  `Monto` varchar(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=21 ;

--
-- Volcado de datos para la tabla `comprobantes`
--

INSERT INTO `comprobantes` (`id`, `Nombre`, `Apellido`, `Telefono`, `Correo`, `Banco`, `Concepto`, `Nrodecuenta`, `Tipodepago`, `NroComprobante`, `Fecha`, `Monto`) VALUES
(1, 'Javier', 'Delgado', '04248309075', 'cheche338@gmail.com', 'BANESCO', 'asdasdsd', '01020445390100075312', 'Transferencia', '010102030', '2014-04-15', '1000');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contacto`
--

CREATE TABLE IF NOT EXISTS `contacto` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Correo` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Volcado de datos para la tabla `contacto`
--

INSERT INTO `contacto` (`id`, `Correo`) VALUES
(1, 'cheche338@gmail.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `facilitador`
--

CREATE TABLE IF NOT EXISTS `facilitador` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(25) NOT NULL,
  `Apellido` varchar(25) NOT NULL,
  `Telefono` varchar(15) NOT NULL,
  `Correo` varchar(100) NOT NULL,
  `Area` varchar(50) NOT NULL,
  `Curso` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Volcado de datos para la tabla `facilitador`
--

INSERT INTO `facilitador` (`id`, `Nombre`, `Apellido`, `Telefono`, `Correo`, `Area`, `Curso`) VALUES
(4, 'Ricardo', 'Felicce', '222', 'eaea@fiajfa.com', 'Perforacion', 'Tierra 2');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `inscritos`
--

CREATE TABLE IF NOT EXISTS `inscritos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(25) NOT NULL,
  `Apellido` varchar(25) NOT NULL,
  `Telefono` varchar(25) NOT NULL,
  `Correo` varchar(100) NOT NULL,
  `DiplomadoCursoTaller` varchar(100) NOT NULL,
  `Fechadeinicio` date NOT NULL,
  `Temasdeinteres` varchar(50) NOT NULL,
  `Modalidad` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `DiplomadoCursoTaller` (`DiplomadoCursoTaller`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Volcado de datos para la tabla `inscritos`
--

INSERT INTO `inscritos` (`id`, `Nombre`, `Apellido`, `Telefono`, `Correo`, `DiplomadoCursoTaller`, `Fechadeinicio`, `Temasdeinteres`, `Modalidad`) VALUES
(4, 'Carlos', 'Diaz', '04128462545', 'micorreo@gmail.com', 'Curso 1 F', '2014-04-16', 'Administracion', 'Cursos Abiertos');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `noticias`
--

CREATE TABLE IF NOT EXISTS `noticias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Titulo` varchar(50) NOT NULL,
  `Cuerpo` text NOT NULL,
  `Fecha` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=13 ;

--
-- Volcado de datos para la tabla `noticias`
--

INSERT INTO `noticias` (`id`, `Titulo`, `Cuerpo`, `Fecha`) VALUES
(10, 'Avicii - Wake Me Up - Amazing Ragtime Piano Cover ', '<p style="text-align: center; "><iframe src="//www.youtube.com/embed/Bv0NDgCzl6U" width="640" height="360" frameborder="0"></iframe></p>', '2014-04-19'),
(12, 'Descubren el primer dinosaurio venezolano en Los A', '<h1 id="post-20814" style="margin-top: 5px; margin-bottom: 0px; padding: 20px 0px; font-family: Arial, Trebuchet, sans-serif; color: rgb(204, 204, 204); letter-spacing: -1px; line-height: 30px; clear: both; background-color: rgb(255, 255, 255);"><a href="http://www.noticias24.com/tecnologia/noticia/20814/descubren-el-primer-dinosaurio-venezolano-fue-hallado-en-los-andes/" rel="bookmark" style="margin: 0px; padding: 0px; color: rgb(68, 68, 68); font-weight: bold; outline: none; font-family: Arial; font-size: 42px; line-height: 42px;">Descubren el primer dinosaurio venezolano en Los Andes: tenÃ­a el tamaÃ±o de un perro pequeÃ±o<img src="http://fotos2013.cloud.noticias24.com/dinovenezolano-OR.jpg" style="width: 630px;"></a></h1><div><br></div><div><p style="margin-bottom: 15px; padding: 0px; text-align: justify; color: rgb(68, 68, 68); font-family: Arial, ''Trebuchet MS'', sans-serif; font-size: 15px; line-height: 24px; background-color: rgb(255, 255, 255);"><em style="margin: 0px; padding: 0px;">(Caracas, 08 de agosto. Noticias24).-</em>&nbsp;<strong style="margin: 0px; padding: 0px; font-size: 16px;">â€œLaquintasaura venezuelaeâ€</strong>&nbsp;es el nombre de cuatro especÃ­menes que fueron hallado en La Quinta, una formaciÃ³n de estructuras Ãºnicas ubicada en los Andes venezolanos, cercanos a La Grita y Seboruco, estado TÃ¡chira.<span id="more-20814" style="margin: 0px; padding: 0px;"></span></p><p style="margin-bottom: 15px; padding: 0px; text-align: justify; color: rgb(68, 68, 68); font-family: Arial, ''Trebuchet MS'', sans-serif; font-size: 15px; line-height: 24px; background-color: rgb(255, 255, 255);">De esta manera, se convierte en&nbsp;<strong style="margin: 0px; padding: 0px; font-size: 16px;">el primer dinosaurio encontrado al norte de AmÃ©rica del Sur</strong>, territorio que se presumÃ­a libre de estos animales por estar rodeado de desiertos hace millones de aÃ±os.</p><p style="margin-bottom: 15px; padding: 0px; text-align: justify; color: rgb(68, 68, 68); font-family: Arial, ''Trebuchet MS'', sans-serif; font-size: 15px; line-height: 24px; background-color: rgb(255, 255, 255);"><strong style="margin: 0px; padding: 0px; font-size: 16px;">El dinosaurio criollo tenÃ­a el tamaÃ±o de un perro pequeÃ±o</strong>, medÃ­a un metro de longitud y caminaba sobre sus dos patas traseras. AdemÃ¡s viviÃ³ en grupos pequeÃ±os y consumÃ­a plantas e insectos a juzgar por la curvatura y puntas largas de sus dientes.</p><p style="margin-bottom: 15px; padding: 0px; text-align: justify; color: rgb(68, 68, 68); font-family: Arial, ''Trebuchet MS'', sans-serif; font-size: 15px; line-height: 24px; background-color: rgb(255, 255, 255);">â€œ<strong style="margin: 0px; padding: 0px; font-size: 16px;">Esta especie tiene un papel fundamental en nuestra comprensiÃ³n de la evoluciÃ³n</strong>, no solo de este grupo, sino de los dinosaurios en generalâ€, expresÃ³ el profesor Marcelo SÃ¡nchez-Villagra, de la Universidad de ZÃ¼rich.</p><p style="margin-bottom: 15px; padding: 0px; text-align: justify; color: rgb(68, 68, 68); font-family: Arial, ''Trebuchet MS'', sans-serif; font-size: 15px; line-height: 24px; background-color: rgb(255, 255, 255);">Con informaciÃ³n de&nbsp;<a href="http://actualidad.rt.com/ciencias/view/136397-descubren-dinosaurio-jurasico-venezuela" style="margin: 0px; padding: 0px; color: rgb(255, 102, 0); font-weight: bold; outline: none;">RT</a></p><p style="margin-bottom: 15px; padding: 0px; text-align: justify; color: rgb(68, 68, 68); font-family: Arial, ''Trebuchet MS'', sans-serif; font-size: 15px; line-height: 24px; background-color: rgb(255, 255, 255);"><br></p><p style="margin-bottom: 15px; padding: 0px; text-align: justify; color: rgb(68, 68, 68); font-family: Arial, ''Trebuchet MS'', sans-serif; font-size: 15px; line-height: 24px; background-color: rgb(255, 255, 255);"><img src="http://fotos2013.cloud.noticias24.com/dinovzlno2-OR630.jpg" style="width: 630px;"><br></p></div>', '2014-08-09');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `portafolio`
--

CREATE TABLE IF NOT EXISTS `portafolio` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Area` varchar(70) NOT NULL,
  `Curso` varchar(100) NOT NULL,
  `Cupos` int(11) NOT NULL,
  `Desde` date NOT NULL,
  `Hasta` date NOT NULL,
  `Duracion` varchar(25) NOT NULL,
  `Archivo` varchar(100) NOT NULL,
  `Lugar` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=30 ;

--
-- Volcado de datos para la tabla `portafolio`
--

INSERT INTO `portafolio` (`id`, `Area`, `Curso`, `Cupos`, `Desde`, `Hasta`, `Duracion`, `Archivo`, `Lugar`) VALUES
(10, 'Perforacion', 'Tierra', 40, '2014-03-11', '2014-04-30', '4 horas', '', ''),
(11, 'Perforacion', 'Tierra 2', 50, '2014-05-08', '2014-04-30', '5 Horas', '', ''),
(12, 'Yacimiento', 'Curso 1 Yacimiento', 40, '2013-10-16', '2014-04-26', '10 horas', '', ''),
(13, 'Yacimiento', 'Curso 2 Yacimiento', 23423, '2013-11-01', '2014-04-30', '5 Horas', '', ''),
(14, 'Administracion', 'Curso 1 Administracion', 23423424, '2013-09-24', '2014-04-30', '60 dias', '', ''),
(15, 'Administracion', 'Curso 2 Administracion', 34, '2013-11-22', '2014-04-30', '59 Horas ', '', ''),
(29, 'Area Gerencial/Recursos Humanos', 'Coaching', 10, '2014-09-01', '2014-09-02', '16 Horas', '', ''),
(18, 'TecnicaSeguridad', 'RecuperaciÃ³n Mejorada de Crudos Pesados y  Extra-pesados por InyecciÃ³n de Vapor', 40, '2014-06-16', '2014-09-20', '40 horas', '', ''),
(19, 'TecnicaSeguridad', 'IngenierÃ­a de ProducciÃ³n Nivel I', 40, '2014-06-16', '2014-09-20', '40', '', ''),
(21, 'TecnicaSeguridad', 'OperaciÃ³n y Mantenimiento de Bombas CentrÃ­fugas', 40, '2014-08-16', '2014-08-20', '24', '', ''),
(22, 'TecnicaSeguridad', 'Bombeo EletrocentrÃ­fugo', 40, '2014-08-23', '2014-08-27', '40', '', ''),
(23, 'TecnicaSeguridad', 'TÃ©cnicas de Tratamiento de Crudos', 40, '2014-08-23', '2014-08-27', '40', '', ''),
(24, 'TecnicaSeguridad', 'Gerencia Integrada de Yacimientos', 40, '2014-08-23', '2014-08-27', '40', '', ''),
(25, 'TecnicaSeguridad', 'Mantenimiento de Transformadores', 40, '2014-08-24', '2014-08-25', '32', '', ''),
(26, 'TecnicaSeguridad', 'PlanificaciÃ³n, EjecuciÃ³n y Control del Mantenimiento', 40, '2014-08-25', '2014-08-27', '24', '', ''),
(27, 'TecnicaSeguridad', 'Autocad 3D', 40, '2014-08-25', '2014-08-27', '24', '', ''),
(28, 'TecnicaSeguridad', 'Programa de IngenierÃ­a de Confiabilidad- MÃ³dulo II. EstimaciÃ³n de la Confiabilidad por MÃ©todos P', 40, '2014-08-25', '2014-08-27', '24', '', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE IF NOT EXISTS `usuario` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(25) NOT NULL,
  `Apellido` varchar(25) NOT NULL,
  `Usuario` varchar(25) NOT NULL,
  `Contrasena` varchar(25) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`ID`, `Nombre`, `Apellido`, `Usuario`, `Contrasena`) VALUES
(1, 'Javier', 'Delgado', 'admin', '123'),
(2, 'Ricardo', 'Felicce', 'ricardo', '123');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
