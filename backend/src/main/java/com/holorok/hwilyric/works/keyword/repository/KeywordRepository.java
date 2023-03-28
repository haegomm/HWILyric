package com.holorok.hwilyric.works.keyword.repository;

import com.holorok.hwilyric.works.keyword.domain.Keyword;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface KeywordRepository extends JpaRepository<Keyword, Long>, CustomKeywordRepository {
}
