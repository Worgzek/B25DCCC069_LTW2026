# 🎓 Quản lý Điểm Sinh viên

Ứng dụng web quản lý điểm sinh viên được xây dựng bằng React và Vite.
Ứng dụng cho phép người dùng xem danh sách sinh viên, thêm và xóa sinh viên,
lọc theo kết quả học tập và thống kê điểm trung bình của lớp.

## ✨ Tính năng

- **Hiển thị danh sách:** Hiển thị thông tin sinh viên gồm ID, họ tên,
  điểm số, lớp và xếp loại.
- **Thêm sinh viên:** Thêm sinh viên mới thông qua biểu mẫu nhập liệu.
- **Kiểm tra dữ liệu:** Yêu cầu nhập đầy đủ họ tên, điểm số và lớp.
  Điểm số phải nằm trong khoảng từ 0 đến 10.
- **Xóa sinh viên:** Xóa sinh viên khỏi danh sách.
- **Lọc sinh viên:**
  - Tất cả sinh viên.
  - Sinh viên giỏi: điểm >= 8.
  - Sinh viên trượt môn: điểm < 5.
- **Thống kê:** Hiển thị tổng số sinh viên và điểm trung bình của toàn lớp.
- **Giao diện responsive:** Hỗ trợ hiển thị trên máy tính và thiết bị di động.

## 🛠️ Công nghệ sử dụng

- **React:** Xây dựng giao diện người dùng bằng Component.
- **Vite:** Khởi tạo và chạy môi trường phát triển.
- **JavaScript ES6+:** Xử lý dữ liệu và các sự kiện.
- **CSS3:** Thiết kế giao diện.
- **ESLint:** Kiểm tra và phát hiện các vấn đề trong mã nguồn.

## 📂 Cấu trúc dự án

\`\`\`text
student-management/
├── public/
├── src/
│   ├── components/
│   │   ├── StudentItem.jsx
│   │   └── StudentList.jsx
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
├── eslint.config.js
└── README.md
\`\`\`

## 🚀 Cài đặt và chạy ứng dụng

### 1. Yêu cầu hệ thống

- Node.js
- npm
- Git (nếu clone project từ GitHub)

### 2. Clone repository

\`\`\`bash
git clone <repository-url>
\`\`\`

Di chuyển vào thư mục dự án:

\`\`\`bash
cd student-management
\`\`\`

> Thay `<repository-url>` bằng URL repository GitHub của bạn.

### 3. Cài đặt dependencies

\`\`\`bash
npm install
\`\`\`

### 4. Khởi chạy ứng dụng

\`\`\`bash
npm run dev
\`\`\`

Mở URL được hiển thị trong Terminal, thường là:

\`\`\`text
http://localhost:5173/
\`\`\`

## 📖 Kiến thức React và JavaScript áp dụng

### 1. Component

Ứng dụng được chia thành ba component chính:

| Component | Vai trò |
|---|---|
| `App` | Quản lý State và xử lý logic chính |
| `StudentList` | Hiển thị danh sách sinh viên |
| `StudentItem` | Hiển thị thông tin từng sinh viên |

### 2. Props

Sử dụng Props để truyền danh sách sinh viên và hàm xử lý xóa
từ component cha xuống component con.

### 3. State và useState

Sử dụng `useState` để quản lý:

- Danh sách sinh viên.
- Dữ liệu biểu mẫu.
- Bộ lọc danh sách.
- Thông báo lỗi.

### 4. Xử lý mảng

- `map()`: Hiển thị danh sách sinh viên.
- `filter()`: Lọc và xóa sinh viên.
- `reduce()`: Tính tổng điểm để xác định điểm trung bình.

### 5. JavaScript ES6+

- `const` và `let`.
- Arrow Functions.
- Destructuring Assignment.
- Spread Operator.
- Template Literals.
- Toán tử ba ngôi.

## 📊 Quy tắc xếp loại

| Điểm số | Xếp loại |
|---|---|
| Điểm >= 8 | Giỏi |
| 5 <= Điểm < 8 | Đạt |
| Điểm < 5 | Trượt |

Điểm trung bình được tính theo công thức:

\`\`\`text
Điểm trung bình = Tổng điểm của tất cả sinh viên / Tổng số sinh viên
\`\`\`

Khi danh sách không có sinh viên, điểm trung bình được hiển thị là 0.

## ⚠️ Lưu ý

- Dữ liệu sinh viên được lưu trong React State.
- Dữ liệu mới thêm hoặc xóa sẽ cập nhật ngay trên giao diện.
- Ứng dụng chưa sử dụng backend hoặc cơ sở dữ liệu.
- Khi tải lại trang, danh sách sẽ trở về dữ liệu mẫu ban đầu.

## 👨‍💻 Mục tiêu học tập

Project được thực hiện nhằm thực hành các kiến thức cơ bản về React,
bao gồm Component, Props, State, xử lý sự kiện, render danh sách,
kiểm tra dữ liệu đầu vào và thao tác với mảng trong JavaScript ES6+.

---

**Built with React + Vite**