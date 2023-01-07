package users;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;

import org.springframework.data.annotation.Id;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Table(name="user")
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class User extends BaseDateEntity{
	// Entity Class
	@Id// 기본키
	@GeneratedValue(strategy= GenerationType.IDENTITY) // 키 생성 전략 IDENTITY : DB에 위임
	private Long num;
	
	@Column(length=100,nullable = false,unique=true)
	private String id;

	@Column(length=300,nullable = false,unique=true)
	private String password;
	
	@Column(length=200,nullable = false,unique=true)
	private String email;

	@Column(length=50,nullable = false)
	private String nickname;

	@Column(name="birth")
	private LocalDateTime birth;
	
	public void change(String password,String email,String nickname) {
		//Update tl tkdyd
		this.password=password;
		this.email=email;
		this.nickname=nickname;
	}
}
