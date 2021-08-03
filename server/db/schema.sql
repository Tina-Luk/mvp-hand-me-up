DROP DATABASE IF EXISTS MVP;

CREATE DATABASE MVP;

USE MVP;

CREATE TABLE User (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50),
  email VARCHAR(50),
  password VARCHAR(50),
  phoneNumber VARCHAR(15),
  cityState VARCHAR(50),
  zip INT
);

CREATE TABLE Post (
  id INT PRIMARY KEY AUTO_INCREMENT,
  category VARCHAR(50),
  title VARCHAR(50),
  description VARCHAR(200),
  itemCondition VARCHAR(20),
  picture VARCHAR(500),
  userId INT,
  FOREIGN KEY (userId) REFERENCES User(id)
);

INSERT INTO User (name, email, password, phoneNumber, cityState, zip) VALUES ('Sandy', 'sandy@gmail.com', '123456', '510-234-1234', 'Berkley, CA', 94705);

INSERT INTO User (name, email, password, phoneNumber, cityState, zip) VALUES ('Beth', 'beth@gmail.com', '123456', '510-234-1234', 'Bakersfield, CA', 95215);

INSERT INTO Post (category, title, description, itemCondition, picture, userId) VALUES ('Clothes', 'Box of baby girl clothes','Baby girl clothes barely used 6-12 months old. 15 onsies, 15 pants, 3 jackets, 2 sweaters', 'Very Good', 'https://pixl.varagesale.com/http://s3.amazonaws.com/hopshop-image-store-production/31529787/3f09178286f1d18332d1265302734dd0.jpg?_ver=large_uploader_thumbnail&w=640&h=640&fit=crop&s=c6a2e5d448acaeaba8c0f96d16e43695', 1);

INSERT INTO Post (category, title, description, itemCondition, picture, userId) VALUES ('Play & Learn', 'Books books books', '5 Books: First 100 Words with Noveslties on Every Page. Play and Learn ABCs, 123s, animals, jobs and science', 'Very Good', 'https://images-na.ssl-images-amazon.com/images/I/91VzMbS-vpL.jpg', 1);

INSERT INTO Post (category, title, description, itemCondition, picture, userId) VALUES ('Play & Learn', 'Water fun for the kids','Step 2 Rain Showers Splash Pond Water Table/ Kids Water Table with 13 pc accessory set.', 'Good', 'https://images-na.ssl-images-amazon.com/images/I/61j1NSOsCxL._AC_SL1000_.jpg', 1);

INSERT INTO Post (category, title, description, itemCondition, picture, userId) VALUES ('Out & About', 'Double Stroller Great Condition','Graco Ready2Grow LX Double Stroller', 'Very Good', 'https://i.ebayimg.com/images/g/t8sAAOSwA3dYLak4/s-l640.jpg', 1);

