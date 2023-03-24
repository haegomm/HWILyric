package com.temp.hwilyric.config;

import com.mongodb.client.MongoClient;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.MongoDatabaseFactory;
import org.springframework.data.mongodb.config.EnableMongoAuditing;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.SimpleMongoClientDatabaseFactory;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@Configuration
@EnableMongoRepositories(basePackages = "com.temp.hwilyric.note.common.repository", mongoTemplateRef = "blogMongoTemplate")
@EnableMongoAuditing
public class MongoConfig {

	@Bean
	public MongoTemplate blogMongoTemplate(MongoClient mongoClient) {
		MongoDatabaseFactory factory = new SimpleMongoClientDatabaseFactory(mongoClient, "blog");
		return new MongoTemplate(factory);
	}
}