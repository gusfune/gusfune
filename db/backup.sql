BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "Project" (
	"id"	INTEGER NOT NULL,
	"createdAt"	DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
	"updatedAt"	DATETIME NOT NULL,
	"title"	TEXT NOT NULL,
	"logo"	TEXT NOT NULL,
	"color"	TEXT NOT NULL,
	"subtitle"	TEXT NOT NULL,
	"role"	TEXT NOT NULL,
	"year"	INTEGER NOT NULL,
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "Recommendation" (
	"id"	INTEGER NOT NULL,
	"createdAt"	DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
	"updatedAt"	DATETIME NOT NULL,
	"name"	TEXT NOT NULL,
	"title"	TEXT NOT NULL,
	"content"	TEXT NOT NULL,
	"photo"	TEXT NOT NULL,
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "Link" (
	"id"	INTEGER NOT NULL,
	"createdAt"	DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
	"updatedAt"	DATETIME NOT NULL,
	"url"	TEXT NOT NULL,
	"type"	TEXT NOT NULL,
	"projectId"	INTEGER NOT NULL,
	FOREIGN KEY("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE,
	PRIMARY KEY("id" AUTOINCREMENT)
);
INSERT INTO "Project" VALUES (1,1615652022713,1615652022713,'Bradesco for Glass','/images/bradesco.png','#FFFFFF','Led the production of the first wearable product in Brazil for Bradesco, the third biggest bank in the country.','Product Lead',2013);
INSERT INTO "Project" VALUES (2,1615652140309,1615652022713,'GOL Linhas Aéreas','/images/gol.png','#FF7122','Led the team responsible for redesigning and developing a more modern iOS and Android app for GOL, the biggest airline company in Brazil.','Product Lead',2016);
INSERT INTO "Project" VALUES (3,1615652140309,1615652022713,'Talkative','/images/talkative.svg','#01bb9b','Led the whole product team for the development of a new product for Web, iOS and Android. It kept over 4,5 stars reviews on app stores.','CTO',2017);
INSERT INTO "Project" VALUES (4,1615668844246,0,'Off Script','/images/offscript.svg','#e3dfd7','Leading the development of an e-commerce/saas marketplace startup.','CTO',2021);
INSERT INTO "Recommendation" VALUES (2,1615657009724,1615657023686,'Tom Huggins','CEO of VersusFC','Gus is not only a talented designer and programmer he really excels at organization and project management and creates a really supportive work environment for his team, a skill that is invaluable in today’s industry. He is also dedicated and driven going above and beyond for his projects.','/images/tom.jpg');
INSERT INTO "Recommendation" VALUES (3,1615657047935,1615657051275,'Ryan Materson','CEO and Co-Founder of Green Hat Web Solutions','Gus takes pride in being a fast and talented worker. Gus has an expert knowledge of WordPress. He is very skilled, and completes tasks quickly. He is a team player and knows how to manage others. I am very thankful to have Gus on my team!','/images/ryan.jpg');
INSERT INTO "Recommendation" VALUES (4,1615657074682,0,'Leslie Orsioli','Client','Gus was our chosen supplier for various projects. He presented us detailed solutions in record time, with excellent cost benefit and meeting all necessary requirements. During execution, we never had issues that were not promptly addressed. His level of service was beyond effective, as he''s always very professional and attentive. I''d certainly recommend him to anyone in my network.','/images/leslie.jpg');
INSERT INTO "Recommendation" VALUES (5,1615657124333,1615657155530,'Eden Wiedemann','CEO at Talkative','Gus is a different kind of professional. Forget the tech leader full of energy who spend a significant lot of time trying to look cool, the kind of face so common at the startup universe. He is a lot better than this. I had the honor to work with him some times, the last one as a partner in Wololo, where Gus was our CTO. Focus, responsibility, a huge capacity of quickly study a problem and give us the best tech solutions and, i must say, organized as hell. If you need someone to figure as the revolutionary and engaged tech leader he may not be your guy, but you need someone that does what needs to be done and can''t be stopped until doing it, someone who is a fast learner and don''t know what means "impossible", he is your man.','/images/eden.jpg');
INSERT INTO "Link" VALUES (1,1615653749885,0,'https://talkative.media/','web',3);
INSERT INTO "Link" VALUES (2,1615653749886,0,'https://play.google.com/store/apps/details?id=media.talkative.mobify','android',3);
INSERT INTO "Link" VALUES (3,1615653749886,0,'https://apps.apple.com/us/app/talkative/id1235312079','ios',3);
INSERT INTO "Link" VALUES (4,1615653749886,0,'https://play.google.com/store/apps/details?id=br.com.edeploy.gol.checkin.activities','android',2);
INSERT INTO "Link" VALUES (5,1615653749886,0,'https://itunes.apple.com/br/app/gol-check-in-status-do-voo/id337961662?mt=8','ios',2);
INSERT INTO "Link" VALUES (6,1615653749886,0,'https://vimeo.com/84151891','iot',1);
INSERT INTO "Link" VALUES (7,1615668939712,0,'https://offscript.io','web',4);
COMMIT;
