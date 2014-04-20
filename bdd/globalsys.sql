-- phpMyAdmin SQL Dump
-- version 4.1.4
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-04-2014 a las 22:51:49
-- Versión del servidor: 5.6.15-log
-- Versión de PHP: 5.4.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `globalsys`
--

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
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Volcado de datos para la tabla `banco`
--

INSERT INTO `banco` (`id`, `Banco`, `Titular`, `Numero`, `Tipo`, `CIRIF`) VALUES
(3, 'FONDO COMUN BANCO UNIVERSAL', 'Javier Delgado', '01020445390100075312', 'Corriente', '123123123123'),
(4, 'BANCO CARONI', 'Jorge Obed', '13124234534534542342', 'Corriente', '54345345');

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
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

--
-- Volcado de datos para la tabla `comprobantes`
--

INSERT INTO `comprobantes` (`id`, `Nombre`, `Apellido`, `Telefono`, `Correo`, `Banco`, `Concepto`, `Nrodecuenta`, `Tipodepago`, `NroComprobante`, `Fecha`, `Monto`) VALUES
(3, 'Javier22', 'Delgado22', '042483090752', 'cheche338222@gmail.com', 'BANESCO222', 'qweqwe22', '01020445390100075312', 'Transferencia22', '01010203022', '2014-05-15', '100022'),
(4, 'Javier', 'Delgado', '04248309075', 'cheche338@gmail.com', 'BANESCO', 'asdasdsd', '01020445390100075312', 'Transferencia', '010102030', '2014-04-15', '1000'),
(5, 'Javier', 'Delgado', '04248309075', 'cheche338@gmail.com', 'FONDO COMUN BANCO UNIVERSAL', 'Inscripcion', '01020445390100075312', 'Transferencia', '010101002', '2014-04-15', '1000'),
(6, 'sdfsdfsdf', 'kjhjjk', '98798798', 'sdfsdf@fdgfdg.com', 'BANESCO', 'sdfsddsfsdf', '01020445390100075312', 'Transferencia', '234234234', '2014-04-01', '3243434'),
(7, '', '', '', '', '', '', '', '', '', '0000-00-00', ''),
(8, '', '', '', '', '', '', '', '', '', '0000-00-00', ''),
(9, '', '', '', '', '', '', '', '', '', '0000-00-00', ''),
(10, '', '', '', '', '', '', '', '', '', '0000-00-00', '');

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
-- Estructura de tabla para la tabla `inscritos`
--

CREATE TABLE IF NOT EXISTS `inscritos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(25) NOT NULL,
  `Apellido` varchar(25) NOT NULL,
  `Telefono` varchar(25) NOT NULL,
  `Correo` varchar(100) NOT NULL,
  `DiplomadoCursoTaller` int(11) NOT NULL,
  `Fechadeinicio` date NOT NULL,
  `Temasdeinteres` varchar(50) NOT NULL,
  `Modalidad` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `DiplomadoCursoTaller` (`DiplomadoCursoTaller`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

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
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=18 ;

--
-- Volcado de datos para la tabla `portafolio`
--

INSERT INTO `portafolio` (`id`, `Area`, `Curso`, `Cupos`, `Desde`, `Hasta`, `Duracion`) VALUES
(10, 'Perforacion', 'Tierra', 40, '2014-04-13', '2014-04-30', '4 horas'),
(11, 'Perforacion', 'Tierra 2', 50, '2014-04-13', '2014-04-30', '5 Horas'),
(12, 'Yacimiento', 'Curso 1 Yacimiento', 40, '2014-04-13', '2014-04-26', '10 horas'),
(13, 'Yacimiento', 'Curso 2 Yacimiento', 23423, '2014-04-13', '2014-04-30', '5 Horas'),
(14, 'Administracion', 'Curso 1 Administracion', 23423424, '2014-04-13', '2014-04-30', '60 dias'),
(15, 'Administracion', 'Curso 2 Administracion', 34, '2014-04-13', '2014-04-30', '59 Horas '),
(16, 'Finanzas', 'Curso 1 F', 324234, '2014-04-13', '2014-04-30', '3 horas'),
(17, 'Finanzas', 'Curso 2 Fi', 234234, '2014-04-05', '2014-04-30', '3 horas ');

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
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`ID`, `Nombre`, `Apellido`, `Usuario`, `Contrasena`) VALUES
(1, 'Javier', 'Delgado', 'admin', '123');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
