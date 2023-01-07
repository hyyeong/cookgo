package users;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import lombok.Getter;

// 공통으로 사용되는 컬럼을 처리하고자 하는 클래스 입니다. user와 commnet테이블
@MappedSuperclass
@EntityListeners(value = { AuditingEntityListener.class} ) // 추가 변경 시 자동지정
@Getter
abstract class BaseDateEntity {
	@CreatedDate
	@Column(name="reg_date",updatable=false)
	private LocalDateTime regDate;
	
	@LastModifiedDate
	@Column(name="mod_date")
	private LocalDateTime modDate;
}
