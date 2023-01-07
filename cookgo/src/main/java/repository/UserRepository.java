package repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import repository.search.UserSearch;
import users.User;

public interface UserRepository extends JpaRepository<User,Long>, UserSearch{
	//UserEntity 클래스에 대한 JPA Repository 입니다.
	@Query(value = "select * from user u where u.id=?1" )
	Page<User> findUserById(String userId);
}
