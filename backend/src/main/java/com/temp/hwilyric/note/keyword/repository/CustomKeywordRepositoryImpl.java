package com.temp.hwilyric.note.keyword.repository;

import com.querydsl.core.types.Projections;
import com.querydsl.core.types.dsl.Expressions;
import com.querydsl.core.types.dsl.NumberExpression;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.temp.hwilyric.note.keyword.domain.QKeyword;
import com.temp.hwilyric.note.keyword.dto.RandomKeywordRes;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

import static com.temp.hwilyric.note.keyword.domain.QKeyword.keyword;


public class CustomKeywordRepositoryImpl implements CustomKeywordRepository{

    private final JPAQueryFactory queryFactory;

    public CustomKeywordRepositoryImpl(JPAQueryFactory queryFactory) {
        this.queryFactory = queryFactory;
    }

    @Override
    public List<RandomKeywordRes> findRandomWord() {
        return queryFactory
                .select(Projections.bean(RandomKeywordRes.class, keyword.word))
                .from(keyword)
                .where(keyword.category.eq("랜덤"))
                .orderBy(Expressions.numberTemplate(Double.class, "function('rand')").asc())
                .limit(10)
                .fetch();
    }
}
