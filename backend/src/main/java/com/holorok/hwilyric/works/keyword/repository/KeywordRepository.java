package com.holorok.hwilyric.works.keyword.repository;

import com.holorok.hwilyric.works.keyword.domain.Keyword;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface KeywordRepository extends JpaRepository<Keyword, Long> {

    @Query(value = "select k.word from keyword k where k.category = :category and k.is_hangul = :isHangul order by rand() limit :num", nativeQuery = true)
    List<String> findRandomWord(@Param("category") String category, @Param("isHangul") boolean isHangul, @Param("num") int num);
}
