-- phpMyAdmin SQL Dump
-- version 3.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Nov 11, 2012 at 04:21 AM
-- Server version: 5.5.25a
-- PHP Version: 5.4.4

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `marcadores_quilpue`
--

-- --------------------------------------------------------

--
-- Table structure for table `markers`
--

CREATE TABLE IF NOT EXISTS `markers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `fono` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `direccion` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mail` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `info` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `web` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `logo` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `lat` float(10,6) NOT NULL,
  `lng` float(10,6) NOT NULL,
  `category` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=50 ;

--
-- Dumping data for table `markers`
--

INSERT INTO `markers` (`id`, `name`, `fono`, `direccion`, `mail`, `info`, `web`, `logo`, `lat`, `lng`, `category`) VALUES
(1, '1ra Cia de Bomberos', '(032)2910029', 'Zenteno #770, Quilpue', 'info@primeraquilpue.cl', 'Bomberos de Chile es una organización sin fines de lucro, con el propósito de prestar servicios a toda la comunidad', 'http://www.primeraquilpue.cl/', 'imagenes/logos/logo_bomberos1.png', -33.045670, -71.438599, 'bomberos'),
(2, '2da Cia de Bomberos', '(032)2916503', 'Esmeralda #712, Quilpué', NULL, 'Bomberos de Chile es una organización sin fines de lucro, con el propósito de prestar servicios a toda la comunidad', 'http://www.bomberosquilpue.cl/', 'imagenes/logos/logo_bomberos2.png', -33.049347, -71.443054, 'bomberos'),
(3, '3ra Cia de Bomberos', '(032)2910002', 'San Enrique s/n esquina Lisboa, El Retiro, Quilpué', NULL, 'Bomberos de Chile es una organización sin fines de lucro, con el propósito de prestar servicios a toda la comunidad', NULL, 'imagenes/logos/logo_bomberos3.png', -33.037952, -71.439781, 'bomberos'),
(4, '4ta Cia de Bomberos', '(032)2949377', 'Baden Powell #310, Belloto 2000, Quilpué.', NULL, 'Bomberos de Chile es una organización sin fines de lucro, con el propósito de prestar servicios a toda la comunidad', 'http://www.bombabelloto.cl/', 'imagenes/logos/logo_bomberos4.png', -33.048958, -71.419228, 'bomberos'),
(5, '5ta Cia de Bomberos', NULL, 'Los Diamantes s/n, Colinas de Oro, Quilpué', NULL, 'Bomberos de Chile es una organización sin fines de lucro, con el propósito de prestar servicios a toda la comunidad', NULL, 'imagenes/logos/logo_bomberos5.png', -33.063808, -71.436440, 'bomberos'),
(8, 'Carabineros de Chile, 2da Comisaria', '(032)3132326', 'Alcalde Subercaseaux #1570, Quilpué', NULL, 'Una institución de policía uniformada en Chile que tiene naturaleza militar, con el propósito de prestar servicios a toda la comunidad', 'http://www.carabineros.cl/', 'imagenes/logos/logo_carabineros.gif', -33.055412, -71.438858, 'carabineros'),
(9, 'Carabineros de Chile, Tenencia', '(032)3132350', 'Avenida Freire #560, Quilpué', NULL, 'Una institución de policía uniformada en Chile que tiene naturaleza militar, con el propósito de prestar servicios a toda la comunidad', 'http://www.carabineros.cl/', 'imagenes/logos/logo_carabineros.gif', -33.046227, -71.404739, 'carabineros'),
(10, 'Municipalidad de Quilpué', '(032)2186000', 'Vicuña Mackenna #684, Quilpué', NULL, 'Ilustre Municipalidad de Quilpué', 'http://www.quilpue.cl/', 'imagenes/logos/logo_municipal.png', -33.045864, -71.444931, 'municipalidad'),
(11, 'Corporación Municipal de Quilpué', '(032)3140400', 'Baquedano #960, Quilpué', NULL, 'Corporación Municipal de Quilpué', 'http://www.cmq.cl/', 'imagenes/logos/logo_cmq.png', -33.044781, -71.440231, 'corporacion'),
(12, 'Liceo Guillermo Gronemeyer', '(032)2910050', 'David Cortes #1015, Quilpué', 'clever@cmq.cl', 'Colegio Municipal para toda la comunidad', 'http://cmq.eged.cl/est/colegio_guillermo_gronemeyer.10', 'imagenes/logos/logo_gronemeyer.png', -33.049698, -71.436630, 'educacion'),
(13, 'Liceo Alejandro Lubet Vergara', '(032)2911163', 'Freire #945, Quilpué', 'balcalde@cmq.cl', 'Colegio Municipal para toda la comunidad', 'http://cmq.eged.cl/est/liceo_alejandro_lubet_vergara.30', 'imagenes/logos/logo_lubet.png', -33.045383, -71.439529, 'educacion'),
(14, 'Colegio Ignacio Carrera Pinto', '(032)2914260', 'Eusebio Lillo #2149, El Sol, Quilpué', 'm.molinari@cmq.cl', 'Colegio Municipal para toda la comunidad', 'http://cmq.eged.cl/est/colegio_ignacio_carrera_pinto.28', 'imagenes/logos/logo_carrerapinto.png', -33.036449, -71.431328, 'educacion'),
(15, 'Colegio Manuel Bulnes Prieto', '(032)2910517', 'Covadonga #1250, Quilpué', 'xguerra@cmq.cl', 'Colegio Municipal para toda la comunidad', NULL, 'imagenes/logos/logo_bulnesprieto.png', -33.050903, -71.436432, 'educacion'),
(16, 'Colegio GuardiaMarina Zañartu', '(032)2942337', 'José Uribe #152, Bto. Norte, Quilpué', 'claudio.pino@cmq.cl', 'Colegio Municipal para toda la comunidad', 'http://cmq.eged.cl/est/colegio_guardiamarina_guillermo_zanartu_irigoyen.5', 'imagenes/logos/logo_guardamarina.png', -33.043888, -71.410431, 'educacion'),
(17, 'Colegio Cmdte. Eleuterio Ramírez', '(032)2826039', 'Ovalle #1810, Las Rosas, Quilpué', 'sonia.alvarado@cmq.cl', 'Colegio Municipal para toda la comunidad', 'http://cmq.eged.cl/est/colegio_comandante_eleuterio_ramirez.17', 'imagenes/logos/logo_eramirez.png', -33.058617, -71.424637, 'educacion'),
(18, 'Colegio Fernando Durán Villareal', '(032)2910462', 'Camilo Henriquez #126, Quilpué', 'pdelpino@cmq.cl', 'Colegio Municipal para toda la comunidad', 'http://cmq.eged.cl/est/colegio_fernando_duran_villareal.20', 'imagenes/logos/logo_duran.png', -33.046276, -71.450516, 'educacion'),
(19, 'Colegio Jose Miguel Infante', '(032)2911575', 'Granada #1557, El Retiro, Quilpué', 'cmaynou@cmq.cl', 'Colegio Municipal para toda la comunidad', 'http://cmq.eged.cl/est/colegio_jose_miguel_infante.11', 'imagenes/logos/logo_infante.png', -33.036098, -71.441299, 'educacion'),
(20, 'Colegio Jorge Rock Lara', '(032)2565529', 'Cooperación S/N Valencia', 'lbarros@cmq.cl', 'Colegio Municipal para toda la comunidad', 'http://cmq.eged.cl/est/colegio_jorge_rock_lara.13', 'imagenes/logos/logo_rlara.png', -33.043888, -71.470390, 'educacion'),
(21, 'Colegio Gaspar Cabrales', '(032)2942061', 'La Aguada Esq. El Ocaso S/N', 'm.pino@cmq.cl', 'Colegio Municipal para toda la comunidad', 'http://cmq.eged.cl/est/colegio_gaspar_cabrales.27', 'imagenes/logos/logo_gcabrera.png', -33.057476, -71.411018, 'educacion'),
(22, 'Colegio Dario Salas', '(032)2910962', 'Samuel Valencia #150, Quilpué', 'mamarin@cmq.cl', 'Colegio Municipal para toda la comunidad', NULL, 'imagenes/logos/logo_dsalas.png', -33.051460, -71.449997, 'educacion'),
(23, 'Colegio Andrés Bello López', '(032)2942057', 'Diego de Almagro #222, Belloto, Quilpué', 'yanini.rivera@cmq.cl', 'Colegio Municipal para toda la comunidad', 'http://cmq.eged.cl/est/colegio_andres_bello.21', 'imagenes/logos/logo_blopez.png', -33.048744, -71.403603, 'educacion'),
(24, 'Centro Educ. Integrada de Adultos', '(032)3200466', 'Las Rosas #505, Quilpué', 'eduardo.castro@cmq.cl', 'Colegio Municipal para toda la comunidad', 'http://cmq.eged.cl/est/centro_de_educacion_integrada_de_adultos_ceia.19', 'imagenes/logos/logo_ceia.png', -33.043648, -71.428551, 'educacion'),
(25, 'Liceo Técnico Profesional Mannheim', '(032)2852256', 'Los Lunes #171, Canal Chacao, Quilpué', 'm.acuna@cmq.cl', 'Colegio Municipal para toda la comunidad', 'http://cmq.eged.cl/est/liceo_tecnico_profesional_mannheim.24', 'imagenes/logos/logo_mann.png', -33.037731, -71.483940, 'educacion'),
(26, 'Colegio Luis Cruz MartInez', '(032)2929700', 'Santiago #588, Bto. Norte, Quilpué', 'rosa.perez@cmq.cl', 'Colegio Municipal para toda la comunidad', 'http://cmq.eged.cl/est/colegio_luis_cruz_martinez.26', 'imagenes/logos/logo_cmartinez.png', -33.037819, -71.404816, 'educacion'),
(27, 'Escuela Teniente Serrano', '(032)2826228', 'Marga Marga s/n', 'mbuist@cmq.cl', 'Colegio Municipal para toda la comunidad', 'http://cmq.eged.cl/est/escuela_teniente_serrano.3', 'imagenes/logos/logo_tserrano.png', -33.069893, -71.412895, 'educacion'),
(29, 'Colegio Theodor Heuss', '032)2918736', 'Ortiz Vega #01381, Pompeya, Quilpué', 'evaras@cmq.cl', 'Colegio Municipal para toda la comunidad', 'http://cmq.eged.cl/est/colegio_theodor_heuss_.18', 'imagenes/logos/logo_theuss.png', -33.051834, -71.467873, 'educacion'),
(30, 'Esc. Esp. de desarrollo Renacimiento', '(032)2123998', 'Del Boldo #1631, Pob. Esperanza, Quilpué', 'gcosta@cmq.cl', 'Colegio Municipal para toda la comunidad', 'http://cmq.eged.cl/est/escuela_especial_de_desarrollo_renacimiento.2', 'imagenes/logos/logo_especial.png', -33.055962, -71.434212, 'educacion'),
(31, 'Liceo de Gastronomia y Turismo', '(032)2944898', 'Diaguitas #200, Belloto 2000, Quilpué', 'juan.norambuena@cmq.cl', 'Colegio Municipal para toda la comunidad', 'http://cmq.eged.cl/est/liceo_de_gastronomia_y_turismo.31', 'imagenes/logos/logo_gturismo.png', -33.048115, -71.421661, 'educacion'),
(32, 'Jardin Valle del Sol', '(032)3171380', 'Alcalde Subercasseaux #1750, Quilpué', 'cbalbontin@cmq.cl', 'Jardin Infantil Municipal para toda la comunidad', NULL, NULL, -33.057449, -71.438889, 'jardines'),
(33, 'Jardin Las Tortolitas', '(032)2923049', 'Ricardo Cumming #1640, Quilpué', 'jbazan@cmq.cl', 'Jardin Infantil Municipal para toda la comunidad', NULL, NULL, -33.056480, -71.441200, 'jardines'),
(34, 'Jardin Manuel Bulnes', '(032)2396130', 'Caupolican #1180, Quilpué', 'cceballos@cmq.cl', 'Jardin Infantil Municipal para toda la comunidad', NULL, NULL, -33.051361, -71.436028, 'jardines'),
(35, 'Jardin Ayelen', '(032)2922282', 'Ortiz de Vega #1381, Pompeya Norte, Quilpué', 'cjara@cmq.cl', 'Jardin Infantil Municipal para toda la comunidad', NULL, NULL, -33.051842, -71.467880, 'jardines'),
(36, 'Jardin Rayito de Sol', '(032)2942912', 'Santiago #588, Belloto Norte, Quilpué', 'ccarrera@cmq.cl', 'Jardin Infantil Municipal para toda la comunidad', NULL, NULL, -33.038078, -71.404907, 'jardines'),
(37, 'Jardin Sol Naciente', '(032)2914394', 'Las Rosas #505, Quilpué', 'paguilar@cmq.cl', 'Jardin Infantil Municipal para toda la comunidad', NULL, NULL, -33.043968, -71.428925, 'jardines'),
(38, 'Jardin Pulgarcito', '(032)2566596', 'Cooperación S/N Paradero 31, Quilpué', 'gmanzano@cmq.cl', 'Jardin Infantil Municipal para toda la comunidad', NULL, NULL, -33.043854, -71.469917, 'jardines'),
(39, 'Jardin Künga', '(032)3193826', 'Lisboa #690, El Retiro, Quilpué', 'jsanchez@cmq.cl', 'Jardin Infantil Municipal para toda la comunidad', NULL, NULL, -33.036358, -71.441376, 'jardines'),
(40, 'Hospital de Quilpué', '(032)253 9200', 'San Martin #1270, Quilpué', NULL, 'Un servicio de salud de calidad para toda la comunidad', 'http://www.hospitalquilpue.cl/', 'imagenes/logos/logo_hospital.jpg', -33.052090, -71.433495, 'salud'),
(41, 'Consultorio Quilpué', '(032)2721502', 'Covadonga #1490, Quilpué', 'ricardo.saavedra@cmq.cl', 'Un servicio de salud de calidad para toda la comunidad', NULL, NULL, -33.050396, -71.433662, 'salud'),
(42, 'Consultorio Belloto Sur', '(032)2722682', 'El Alba #988, Quilpué', 'jalbornoz@cmq.cl', 'Un servicio de salud de calidad para toda la comunidad', NULL, NULL, -33.058662, -71.408112, 'salud'),
(43, 'Posta Colliguay', '(09)97220802', 'Colliguay, Quilpué', 'rleyton@cmq.cl', 'Un servicio de salud de calidad para toda la comunidad', NULL, NULL, -33.168522, -71.149055, 'salud'),
(44, 'Posta Pompeya', '(032)2923617', 'Av. Frodden #1721, Pompeya, Quilpué', 'scapelli@cmq.cl', 'Un servicio de salud de calidad para toda la comunidad', NULL, NULL, -33.054432, -71.466690, 'salud'),
(45, 'Posta Aviador Acevedo', '(032)2722154', 'Aviador Acevedo #906, Belloto, Quilpué', 'daniel.araujo@cmq.cl', 'Un servicio de salud de calidad para toda la comunidad', NULL, NULL, -33.042118, -71.409271, 'salud'),
(46, 'Consultorio Los Pinos', '(032)2333169', 'Quinchamali #2949, Quilpué', 'jessica.molina@cmq.cl', 'Un servicio de salud de calidad para toda la comunidad', NULL, NULL, -33.073269, -71.422363, 'salud'),
(47, 'Policia de Investigaciones', '(032)2920677', 'Manuel Rodríguez #625, Quilpué', 'bicrim.quil@investigaciones.cl', 'Es la policía civil investigativa de Chile, de carácter científico técnica, creada oficialmente en 1933.', 'http://www.policia.cl/', 'imagenes/logos/logo_pdi.png', -33.045795, -71.446671, 'policiainvestigaciones'),
(49, 'Liceo Técnico Femenino', '(032) 3180642', 'Avda. Cuatro Pinos NÂº 2159 Los Pinos', 'clara.yanez@cmq.cl ', 'Colegio Municipal para toda la comunidad', 'http://www.ltfq.cl/', 'imagenes/logos/logo_ltf.png', -33.070644, -71.427406, 'educacion');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
