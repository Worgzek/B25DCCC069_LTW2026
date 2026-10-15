import { useState } from "react";
import StudentList from "./components/StudentList";
import "./App.css";

const App = () => {
    // Danh sách sinh viên ban đầu
    const [students, setStudents] = useState([
        { id: 1, name: "Nguyễn Văn An", score: 8.5, class: "CNTT01" },
        { id: 2, name: "Trần Thị Bình", score: 4.5, class: "CNTT02" },
        { id: 3, name: "Lê Văn Cường", score: 7, class: "CNTT01" },
    ]);

    // Dữ liệu form
    const [name, setName] = useState("");
    const [score, setScore] = useState("");
    const [studentClass, setStudentClass] = useState("");

    // Bộ lọc
    const [filter, setFilter] = useState("all");

    // Thông báo lỗi
    const [error, setError] = useState("");

    // Thêm sinh viên
    const handleAddStudent = (event) => {
        event.preventDefault();

        const trimmedName = name.trim();
        const trimmedClass = studentClass.trim();
        const numericScore = Number(score);

        if (!trimmedName || !trimmedClass || score.trim() === "") {
            setError("Vui lòng nhập đầy đủ thông tin.");
            return;
        }

        if (!Number.isFinite(numericScore)
            || numericScore < 0
            || numericScore > 10) {
            setError("Điểm phải là số từ 0 đến 10.");
            return;
        }

        const newStudent = {
            id: Date.now(),
            name: trimmedName,
            score: numericScore,
            class: trimmedClass,
        };

        setStudents((prevStudents) => [
            ...prevStudents,
            newStudent,
        ]);

        // Xóa dữ liệu form sau khi thêm
        setName("");
        setScore("");
        setStudentClass("");
        setError("");
    };

    // Xóa sinh viên
    const handleDeleteStudent = (id) => {
        setStudents((prevStudents) =>
            prevStudents.filter((student) => student.id !== id)
        );
    };

    // Lọc danh sách
    const filteredStudents = students.filter((student) => {
        if (filter === "good") {
            return student.score >= 8;
        }

        if (filter === "failed") {
            return student.score < 5;
        }

        return true;
    });

    // Thống kê
    const totalStudents = students.length;

    const averageScore = totalStudents > 0
        ? students.reduce(
            (total, student) => total + student.score,
            0
        ) / totalStudents
        : 0;

    return (
        <div className="app">
            <header>
                <h1>Quản lý điểm sinh viên</h1>
                <p>Quản lý danh sách và kết quả học tập</p>
            </header>

            {/* Thống kê */}
            <section className="statistics">
                <div className="stat-card">
                    <h3>Tổng sinh viên</h3>
                    <p>{totalStudents}</p>
                </div>

                <div className="stat-card">
                    <h3>Điểm trung bình</h3>
                    <p>{averageScore.toFixed(2)}</p>
                </div>
            </section>

            {/* Form thêm sinh viên */}
            <section className="form-section">
                <h2>Thêm sinh viên</h2>

                <form onSubmit={handleAddStudent}>
                    <div className="form-group">
                        <label>Họ tên</label>
                        <input
                            type="text"
                            placeholder="Nhập họ tên"
                            value={name}
                            onChange={(event) =>
                                setName(event.target.value)
                            }
                        />
                    </div>

                    <div className="form-group">
                        <label>Điểm số</label>
                        <input
                            type="number"
                            placeholder="Nhập điểm từ 0 đến 10"
                            value={score}
                            min="0"
                            max="10"
                            step="any"
                            onChange={(event) =>
                                setScore(event.target.value)
                            }
                        />
                    </div>

                    <div className="form-group">
                        <label>Lớp</label>
                        <input
                            type="text"
                            placeholder="Nhập tên lớp"
                            value={studentClass}
                            onChange={(event) =>
                                setStudentClass(event.target.value)
                            }
                        />
                    </div>

                    {error && (
                        <p className="error-message">{error}</p>
                    )}

                    <button type="submit" className="add-btn">
                        Thêm sinh viên
                    </button>
                </form>
            </section>

            {/* Bộ lọc */}
            <section className="list-section">
                <div className="list-header">
                    <h2>Danh sách sinh viên</h2>

                    <div className="filter-group">
                        <button
                            className={filter === "all" ? "active" : ""}
                            onClick={() => setFilter("all")}
                        >
                            Tất cả
                        </button>

                        <button
                            className={filter === "good" ? "active" : ""}
                            onClick={() => setFilter("good")}
                        >
                            Sinh viên giỏi
                        </button>

                        <button
                            className={filter === "failed" ? "active" : ""}
                            onClick={() => setFilter("failed")}
                        >
                            Trượt môn
                        </button>
                    </div>
                </div>

                <StudentList
                    students={filteredStudents}
                    onDelete={handleDeleteStudent}
                />
            </section>
        </div>
    );
};

export default App;