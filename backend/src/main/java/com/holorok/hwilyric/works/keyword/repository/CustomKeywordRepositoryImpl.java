package com.holorok.hwilyric.works.keyword.repository;

import com.querydsl.core.types.dsl.Expressions;
import com.querydsl.jpa.impl.JPAQueryFactory;

import java.util.List;

import static com.holorok.hwilyric.works.keyword.domain.QKeyword.keyword;


public class CustomKeywordRepositoryImpl implements CustomKeywordRepository {

    private final JPAQueryFactory queryFactory;

    public CustomKeywordRepositoryImpl(JPAQueryFactory queryFactory) {
        this.queryFactory = queryFactory;
    }

    @Override
    public List<String> findRandomWord(String category, boolean isHangul, int num) {
        return queryFactory
                .select(keyword.word)
                .from(keyword)
                .where(
                        keyword.category.eq(category),
                        keyword.isHangul.eq(isHangul)
                )
                .orderBy(Expressions.numberTemplate(Double.class, "function('rand')").asc())
                .limit(num)
                .fetch();
    }
}
