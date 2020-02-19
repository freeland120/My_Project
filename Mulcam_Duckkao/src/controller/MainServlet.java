package controller;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.*;

/**
 * Servlet implementation class MainServlet
 */
public class MainServlet extends HttpServlet {
	protected void process(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("호출되었습니다~ 저를 부르셨습니까??");
		
		request.setCharacterEncoding("UTF-8");
		BufferedReader br=request.getReader();
		
		JSONObject obj=(JSONObject)JSONValue.parse(br);
		String id=(String)obj.get("id");
		System.out.println(id+":"+obj.get("pw")); //데이터 잘 도착했는지 확인

		//login 처리 이게 바로 business
		response.setContentType("application/json;charset=utf-8");
		PrintWriter out=response.getWriter();
		obj=new JSONObject(); //새로운 객체

		boolean flag=true;
		if(flag){
			obj.put("resultCode",1);
			obj.put("message",id+"님 환영합니다!");
		}else{
			obj.put("resultCode",0);
			obj.put("message","다시 로그인하세요!");
		}
		
		out.print(obj);

	}
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		process(request,response);
	}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		process(request,response);
	}

}
