# Lab11  
The function of cookie and session<br>
Session是在服务端保存的一种数据结构，保存的方法有很多，比如内存、数据库和文件等等。在大型的网站，一般会有专门的Session服务器集群，用来保存用户会话，这个时候Session信息都是放在内存的，使用一些缓存服务比如Memcached之类的来存放Session。<br>

Cookie是在客户端（比如浏览器）中保存用户信息的一种机制，用来记录用户的一些信息，也是实现Session的一种方式。服务端会在HTTP协议中告诉客户端，需要在Cookie中记录一个Session ID，以后每次请求把这个Session ID发送到服务器，服务器就能识别具体的客户。

The advantages & disadvantages of cookie and session.<br>
1、cookie数据存放在客户的浏览器上，session数据放在服务器上。<br>
2、cookie不是很安全，别人可以分析存放在本地的COOKIE并进行COOKIE欺骗,考虑到安全应当使用session。<br>
3、session会在一定时间内保存在服务器上。当访问增多，会比较占用服务器的性能,考虑到减轻服务器性能方面，应当使用COOKIE。<br>
4、单个cookie保存的数据不能超过4K，很多浏览器都限制一个站点最多保存20个cookie。



   
   








