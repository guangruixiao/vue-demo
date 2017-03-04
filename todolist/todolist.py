
#-*-coding:utf-8-*-


#初始化
from flask import Flask,render_template

app=Flask(__name__)




#路由和视图函数
@app.route("/")
def index():
	return render_template("index.html")

@app.route("/data")
def test():
	return "<p>呵呵，后台暂时木有内容，不过这条数据来自后台!</p>"



#启动服务器
if __name__=="__main__":
	app.run(debug=True)
