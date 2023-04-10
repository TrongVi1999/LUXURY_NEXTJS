Dự án được viết dựa trên NextJS - react ,trang chủ www.luxuryvietravel.com

## Để chạy dự án , sau khi clone , gõ :

```bash
npm i
npm run dev
```

Sau đo mở trình duyệt vào cổng (http://localhost:3000)

## Cấu trúc dự án :

Website chia thành nhiều page , mỗi page từ nhiều component tạo thành ,các thư mục chính :
-asset : đặt logo , file phương tiện cần cho thẻ <head>
-components : các khối component nhỏ có thể xuất hiện trong nhiều pages ,ví dụ như banner , button...
-hook : các hàm logic , xử lí dữ liệu
-layout : chứa Header và Footer
-pages : là thư mục đặc biệt của nextjs , chứa các đường dẫn đến các page ,chỉ cần tạo file tên tương ứng hoặc thư mục , nextjs sẽ tự cấu hình đường dẫn cho mình , ví dụ tạo thư mục about-us , trong có file index.js ,policy.js ,[id].js ta sẽ có các pages là :

-   /about-us
-   /about-us/policy
-   [id].js tương ứng với truyền params đàng sau - /about-us/id
    -public : chứa các file phương tiện như hình ảnh ,tài liệu ...
    -styles : chứa các file css cho page , ở đây dùng scss module
    -views : chứa các component riêng của từng page và file scss của chúng
    -Còn lại là các file hệ thống

## Các vấn đề đáng chú ý khác :

-Dự án được css thuần hoàn toàn ( ko dùng bootstrap hay tailwhil) ,chỉ sử dụng 1 số thư viện hỗ trợ như swiper ,antd ..
-Font chữ dùng font-google ,câu lệnh @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;500&display=swap') đặt ở global.scss , có thể chỉnh tại đây
-Gọi Api sử dụng react-query kết hợp axios ,danh sách API và cú pháp xem tại pages/api ( dùng chủ yếu tại queryAPI.js , 1 số trong CallAPI.js)
-Quản lí biến bằng useState kết hợp useContext

## Chức năng website :

-Lấy dữ liệu các tour , hotel , transfer , blog từ backend rồi hiển thị ra , chức năng phân loại , tìm kiếm , sắp xêp ...
-Đăng nhập , đăng kí, quản lí tài khoản , thông tin book (chưa có tính năng mã hóa , bảo mật) .
-Đặt tour,hotel...
-Chuyển ngôn ngữ - dùng plugin của google , xem chi tiết code tại pages/\_add.js
-website đã có sitemap , cài data Analyticst của google (\_document.js), schema.org (pages/Schema)
-SEO đã được tối ưu rất nhiều , hầu như chỉ còn thiếu tương tác với facebook , twitter ... , điều chỉnh phù hợp keyword và mô tả
