---
title: "Introducción a AWS para principiantes"
lang: "es"
author: Jesús Merlo
email: jesus.lab.tech@gmail.com
date: "2025-10-10"
description: Un rápido vistazo a la interfaz de AWS y a sus servicios más importantes, como EC2, IAM, ...
tags: [
    "AWS", "Entry-level", "15min", "EC2", "IAM", 
]
draft: false
coverImage: "https://lituus.cl/Analytics/cloud-computing/IMG/Logo-AWS-smile.webp"
---
## ¿Qué es AWS?

Amazon Web Services (AWS) es la plataforma de servicios en la nube más utilizada del mundo. Ofrece más de 200 servicios para computación, bases de datos, redes, seguridad, monitoreo y más. Al estar completamente gestionada por Amazon, permite a las empresas y desarrolladores desplegar aplicaciones sin preocuparse por la infraestructura física.

---

## Explorando la consola de AWS

Cuando ingresas a la **AWS Management Console**, encontrarás una interfaz organizada por categorías de servicios:

- **Compute**: EC2, Lambda, ECS  
- **Storage**: S3, EFS, Glacier  
- **Database**: DynamoDB, RDS, Aurora  
- **Security & Identity**: IAM, KMS, Cognito  

La barra de búsqueda superior es tu mejor amiga: escribe “EC2”, “S3” o cualquier servicio y saltarás directamente a él.

---

## IAM: control de acceso y seguridad

**IAM (Identity and Access Management)** permite controlar quién puede hacer qué dentro de tu cuenta.

Con IAM puedes:

- Crear usuarios individuales o grupos.  
- Asignar permisos mediante políticas JSON.  
- Habilitar autenticación multifactor (MFA).  
- Definir roles para servicios como EC2 o Lambda.  

Es una buena práctica **nunca trabajar con el usuario root**. Crea un usuario administrador y usa MFA desde el primer día.

---

## EC2: servidores virtuales en la nube

**Amazon EC2 (Elastic Compute Cloud)** te permite lanzar máquinas virtuales —llamadas _instancias_— en la nube en cuestión de segundos.

Puntos clave:

- Puedes elegir entre cientos de tipos de instancia (t2, t3, m5, c6g...).  
- El almacenamiento por defecto viene de **EBS**.  
- Puedes asignar direcciones IP elásticas.  
- Es posible automatizar despliegues con Launch Templates y Auto Scaling Groups.  

Para principiantes, una instancia **t2.micro o t3.micro** dentro del nivel gratuito es suficiente para aprender.

---

## Otros servicios importantes para empezar

### 🔹 S3 — Almacenamiento de objetos
Ideal para guardar imágenes, archivos estáticos, logs y respaldos. Muy usado con CloudFront para sitios web estáticos.

### 🔹 RDS — Bases de datos gestionadas
Soporta MySQL, PostgreSQL, MariaDB, SQL Server y Oracle. AWS gestiona los parches, backups y alta disponibilidad.

### 🔹 CloudWatch — Monitoreo
Recolecta métricas, logs y eventos. Es clave para entender qué pasa en tu infraestructura.

---

## Conclusión

AWS ofrece un ecosistema enorme, pero para comenzar basta con entender tres pilares:  
**IAM para seguridad**, **EC2 para cómputo**, y **S3 para almacenamiento**.  
Con estos servicios puedes construir desde ambientes de aprendizaje hasta aplicaciones web completas.

A medida que avances, podrás explorar servicios más avanzados como Lambda, VPC, ECS, DynamoDB o API Gateway.

---