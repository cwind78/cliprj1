@GetMapping(value= {"user/{name}", "user/"})
	public List<User> getUserList(@PathVariable(required=false) User user) {
		List<User> list = new ArrayList<User>();
		IntStream.range(0, 5).forEachOrdered(n -> {
			User u = new User();
			u.setId(String.format("%06d", n));
			u.setPwd(String.format("%06d", n));
			u.setName(String.valueOf(n));
			u.setEmail(String.valueOf(n)+"@kkk.com");
			u.setDate(LocalDate.now().format(DateTimeFormatter.BASIC_ISO_DATE));
			
			list.add(u);
		});
		
		return list;
	}

package com.org.app.vo.test;

import lombok.Data;

@Data
public class User {
	String name;
	String id;
	String pwd;
	String email;
	String date;
}
