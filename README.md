# pianisimo-shop
雅虎网店设计
## 自己从网页设计到设计配图到编码全由一个人完成，大约花费了10天左右吧

## 中间遇到的些问题
### PC端的问题
    1、轮播中间因为包含JS代码，所以要用<iframe></iframe>内部嵌套来解决，
    把滚动条去掉，设置宽高（搜索框部分同理）。
    2、相对于body定位的东西，由于受到乐天店铺自己宽度受限，只能在主页显示。
    3、素材文案的及时性是乐天装修进度的关键点。
    4、二级页面及时更新，需提前做好准备，图片上传等准备工作做充分，争取到乐天后台能及时上传。
    5、后台图片上传png格式的，将自动转化为jpg格式，设计的时候要提前考虑。
    6、定稿的时间还得在写代码之前确定，否则后面更改东西太多。
### 移动端的问题
    1、不同设备的兼容问题
    2、js库用zepto.js代替jqure.js
    3、主要是解决加载速度的问题，能用css画的就不要用图，大小需要自适应的图标的图标做成字体的就不要画，
    能flex布局的就不要浮动，也不要用绝对定位（因为手机对flex的兼容非常友好）
### 手机GLOD页面代码格式
    <meta http-equiv="refresh" ="" content="0;URL=https://www.rakuten.ne.jp/gold/nini-shop/header.html">
### iframe标签格式
    <iframe id="Example2"
    title="Example2"
    width="400"
    height="300"
    frameborder="0"
    scrolling="no"
    marginheight="0"
    marginwidth="0"
    src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=es-419&amp;geocode=&amp;q=buenos+aires&amp;sll=37.0625,-95.677068&amp;sspn=38.638819,80.859375&amp;t=h&amp;ie=UTF8&amp;hq=&amp;hnear=Buenos+Aires,+Argentina&amp;z=11&amp;ll=-34.603723,-58.381593&amp;output=embed">
    </iframe>
    <iframe id="iFrame1" name="iFrame1" width="100%" height="1022px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://shopping.geocities.jp/pianisimo/header.html"></iframe>
### 店铺的图片问题
    1、合集应该有，但更多的是体现主推产品或者季节性产品，如果店铺全是合集，让买家也不知道该怎么选择。