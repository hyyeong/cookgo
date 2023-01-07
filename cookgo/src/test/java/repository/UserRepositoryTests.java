package repository;

import java.util.Optional;
import java.util.stream.IntStream;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.Query;

import lombok.extern.log4j.Log4j2;
import users.User;

@SpringBootTest
@Log4j2
public class UserRepositoryTests {
	/*
	@Autowired
	private UserRepository userRepository;
	
	@Test
	public void testInsert() {
		IntStream.rangeClosed(1,100).forEach(i->{
			UserEntity user = UserEntity.builder()
					.user_name("title...")
					.build();
			UserEntity result = userRepository.save(user);
			log.info("id : " + result.getId());
		});
	}
	@Test
	public void testSelect() {
		Long id = 100L;
		Optional<UserEntity> result = userRepository.findById(id);
		UserEntity user = result.orElseThrow();
		log.info(user);
	}
	@Test
	public void testDelete() {
		Long id=1L;
		userRepository.deleteById(id);
	}
	//@Query("select b from User b where b.title like concat('%',:keyworld,'%')")
	//Page<UserEntity> findKeyword(String keyword,Pageable pageable);
	
	@Test
	public void testPaging() {
		//paging 처리 
		Pageable pageable = PageRequest.of(0, 10, Sort.by("id").descending());
		Page<UserEntity> result = userRepository.findAll(pageable);
		log.info("total count: "+result.getTotalElements());
		result.getContent(); // 콘텐트얻기

	}
	*/
}
