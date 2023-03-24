package com.temp.hwilyric.note.keyword.repository;

import com.querydsl.core.types.dsl.Expressions;
import com.querydsl.jpa.impl.JPAQueryFactory;

import java.util.List;

import static com.temp.hwilyric.note.keyword.domain.QKeyword.keyword;


public class CustomKeywordRepositoryImpl implements CustomKeywordRepository{

    private final JPAQueryFactory queryFactory;

    public CustomKeywordRepositoryImpl(JPAQueryFactory queryFactory) {
        this.queryFactory = queryFactory;
    }

    @Override
    public List<String> findRandomWord() {
        return queryFactory
                .select(keyword.word)
                .from(keyword)
                .where(keyword.category.eq("랜덤"))
                .orderBy(Expressions.numberTemplate(Double.class, "function('rand')").asc())
                .limit(10)
                .fetch();
    }
}
