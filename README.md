# MOSAIQ
## Server  
- `server.js` serves whole news data as an object if requested `GET` `/news`.  
- `crawler.js` scrapes news of the day and save as `<date>.json` file and MySQL.  
  + MySQL: 'news' table in 'MOSAIQ' database  
  + colums of 'news' table  
| Field     | Type        | Null | Key | Default | Extra          |  
| --------- | ----------- | ---- | --- | ------- | -------------- |  
| news_id   | INT(11)     | NO   | PRI | NULL    | AUTO_INCREMENT |  
| date      | DATE        | NO   |     | NULL    |                |  
| publisher | VARCHAR(20) | NO   |     | NULL    |                |  
| headline  | TINYTEXT    | YES  |     | NULL    |                |  
| body      | TEXT        | YES  |     | NULL    |                |  
| link      | TINYTEXT    | NO   |     | NULL    |                |  
```  
+-----------+-------------+------+-----+---------+----------------+  
| Field     | Type        | Null | Key | Default | Extra          |  
+-----------+-------------+------+-----+---------+----------------+  
| news_id   | int(11)     | NO   | PRI | NULL    | auto_increment |  
| date      | date        | NO   |     | NULL    |                |  
| publisher | varchar(20) | NO   |     | NULL    |                |  
| headline  | tinytext    | YES  |     | NULL    |                |  
| body      | text        | YES  |     | NULL    |                |  
| link      | tinytext    | NO   |     | NULL    |                |  
+-----------+-------------+------+-----+---------+----------------+  
```  
- `autoCrawler.js` acts just as `crawler.js` except that it automatically scrapes articles every 5 a.m.  


mosaiq  

