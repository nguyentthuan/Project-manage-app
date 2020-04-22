# Project-manage-app
Project manage 

Ý tưởng : 
1.Đầu tiên,tạo app Reactjs để chạy client, sau đó dùng nodejs để start Server.
 -Cấu hình Server và Client. Chạy lệnh  '' npm run dev " để start đồng thời Server lần Client.

2.Tiếp theo,tạo cấu trúc model để lưu User(Member).
-Tạo form để lưu thông tin member xuống database(Mongodb)
-Show danh sách member ra.
-Update thông tin member theo Id,  chỉ cho update phone và birthday, tên thì ko được sửa. 
-show lại danh sách.

3.Tạo cấu trúc model để lưu các dự án(Project)
-Tạo Form để lưu thông tin Project đó, bao gồm: tên dự án, mô tả, và các check box để phân công members theo từng Project (list checkbox này là đổ từ
database User ra,lấy fullname để show ra)
-Lưu thông tin Project đó vào database, bao gồm: name,mô tả, và danh sách các members được phân công.
- Show ra .
-Khi update, ta lại đổ từ database User ra list Checkbox-lấy fullname, để cho người dùng chọn lại members được phân công cho Project đó.Sau đó 
lại cập nhật lại trong database.
